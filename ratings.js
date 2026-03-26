/**
 * ratings.js — Per-user star ratings via Firebase Firestore
 *
 * Firestore structure:
 *   ratings/{appId}  →  { [uid]: 1-5, ... }
 *
 * Set these Firestore Security Rules in Firebase Console → Firestore → Rules:
 *
 *   rules_version = '2';
 *   service cloud.firestore {
 *     match /databases/{database}/documents {
 *       match /ratings/{appId} {
 *         allow read: if true;
 *         allow write: if request.auth != null;
 *       }
 *     }
 *   }
 */

const _db = firebase.firestore();
const _cache = {};   // { appId: { uid: rating } }

// ── Fetch ─────────────────────────────────────────────────────────────────────
async function fetchRatings(appId) {
  if (_cache[appId]) return _cache[appId];
  try {
    const snap = await _db.collection("ratings").doc(appId).get();
    _cache[appId] = snap.exists ? snap.data() : {};
  } catch {
    _cache[appId] = {};
  }
  return _cache[appId];
}

// ── Submit ────────────────────────────────────────────────────────────────────
async function submitRating(appId, rating) {
  const user = window.getAuthUser();
  if (!user) return;
  await _db.collection("ratings").doc(appId).set(
    { [user.uid]: rating },
    { merge: true }
  );
  if (!_cache[appId]) _cache[appId] = {};
  _cache[appId][user.uid] = rating;
}

// ── Compute average ───────────────────────────────────────────────────────────
function computeAvg(data) {
  const vals = Object.values(data).filter(v => typeof v === "number" && v >= 1 && v <= 5);
  if (!vals.length) return { avg: 0, count: 0 };
  return { avg: vals.reduce((a, b) => a + b, 0) / vals.length, count: vals.length };
}

// ── Stars HTML (read-only display) ────────────────────────────────────────────
function starsDisplayHtml(avg, count) {
  const rounded = Math.round(avg);
  let s = "";
  for (let i = 1; i <= 5; i++) {
    s += `<span class="star${i <= rounded ? " star-on" : ""}">★</span>`;
  }
  const label = count === 0 ? "No ratings yet" : `${avg.toFixed(1)} &nbsp;(${count} rating${count !== 1 ? "s" : ""})`;
  return `<div class="stars-wrap">${s}<span class="stars-label">${label}</span></div>`;
}

// ── Render interactive card stars ─────────────────────────────────────────────
function renderCardStars(appId, data) {
  const el   = document.getElementById(`stars-${appId}`);
  if (!el) return;
  const user       = window.getAuthUser();
  const { avg, count } = computeAvg(data);
  const userRating = user ? (data[user.uid] || 0) : 0;

  // Build star buttons (interactive) + avg label
  let starsHtml = `<div class="stars-interactive card-stars-rate" id="card-rate-${appId}" title="${user ? 'Click to rate' : 'Sign in to rate'}">`;
  for (let i = 1; i <= 5; i++) {
    starsHtml += `<span class="star-rate${i <= userRating ? " star-on" : ""}" data-val="${i}">★</span>`;
  }
  starsHtml += `</div>`;
  const label = count === 0 ? "No ratings yet" : `${avg.toFixed(1)} (${count})`;
  starsHtml += `<span class="stars-label">${label}</span>`;

  el.innerHTML = starsHtml;

  const rateEl = document.getElementById(`card-rate-${appId}`);
  const stars  = rateEl.querySelectorAll(".star-rate");

  rateEl.addEventListener("mouseover", e => {
    const val = +e.target.dataset.val;
    if (!val) return;
    stars.forEach(s => s.classList.toggle("star-hover", +s.dataset.val <= val));
  });
  rateEl.addEventListener("mouseleave", () => {
    stars.forEach(s => s.classList.remove("star-hover"));
  });
  rateEl.addEventListener("click", e => {
    const val = +e.target.dataset.val;
    if (!val) return;
    window.requireAuth(async () => {
      await submitRating(appId, val);
      renderCardStars(appId, _cache[appId]);
      // Also refresh modal if open on same app
      const avgEl = document.getElementById("modal-stars-avg");
      if (avgEl) renderModalStars(appId, _cache[appId]);
    });
  });
}

// ── Load all card star displays ───────────────────────────────────────────────
async function loadAllStars(apps) {
  await Promise.all(apps.map(async app => {
    const data = await fetchRatings(app.id);
    renderCardStars(app.id, data);
  }));
}

// ── Modal: render avg + interactive stars ─────────────────────────────────────
function renderModalStars(appId, data) {
  const user       = window.getAuthUser();
  const { avg, count } = computeAvg(data);
  const userRating = user ? (data[user.uid] || 0) : 0;

  const avgEl   = document.getElementById("modal-stars-avg");
  const interEl = document.getElementById("modal-stars-interactive");
  if (!avgEl || !interEl) return;

  avgEl.innerHTML = starsDisplayHtml(avg, count);

  if (!user) {
    interEl.innerHTML = `<span style="font-size:12px; color:#7a8fa6;">Sign in to rate this app.</span>`;
    return;
  }

  // Interactive stars
  let html = `<div class="stars-interactive" id="stars-rate-${appId}">`;
  for (let i = 1; i <= 5; i++) {
    html += `<span class="star-rate${i <= userRating ? " star-on" : ""}" data-val="${i}">★</span>`;
  }
  html += `</div>`;
  if (userRating) {
    html += `<span style="font-size:11px; color:#7a8fa6; margin-top:4px; display:block;">Your rating: ${userRating} / 5</span>`;
  }
  interEl.innerHTML = html;

  const rateEl = document.getElementById(`stars-rate-${appId}`);
  const stars  = rateEl.querySelectorAll(".star-rate");

  rateEl.addEventListener("mouseover", e => {
    const val = +e.target.dataset.val;
    if (!val) return;
    stars.forEach(s => s.classList.toggle("star-hover", +s.dataset.val <= val));
  });
  rateEl.addEventListener("mouseleave", () => {
    stars.forEach(s => s.classList.remove("star-hover"));
  });
  rateEl.addEventListener("click", async e => {
    const val = +e.target.dataset.val;
    if (!val) return;
    await submitRating(appId, val);
    // Re-render modal stars with updated cache
    renderModalStars(appId, _cache[appId]);
    // Also update card stars
    const cardEl = document.getElementById(`stars-${appId}`);
    if (cardEl) {
      const { avg: a, count: c } = computeAvg(_cache[appId]);
      cardEl.innerHTML = starsDisplayHtml(a, c);
    }
  });
}

async function openModalStars(appId) {
  const data = await fetchRatings(appId);
  renderModalStars(appId, data);
}

window.loadAllStars   = loadAllStars;
window.openModalStars = openModalStars;
