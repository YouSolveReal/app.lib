/**
 * feedback.js — Feedback & Problem Report via Formspree
 *
 * SETUP (one-time, free):
 * 1. Go to https://formspree.io and create a free account
 * 2. Click "New Form" → set email to yousolvereal@gmail.com
 * 3. Copy the form ID from the endpoint URL (e.g. "xpzvkdqb")
 * 4. Replace YOUR_FORM_ID below with your actual form ID
 *
 * Free tier: 50 submissions/month — no credit card needed.
 */

const FORMSPREE_ID = "xlgplqjr";   // ← replace this

// ── Tab switch ────────────────────────────────────────────────────────────────
function fbSwitchTab(tab) {
  const isFeedback = tab === "feedback";
  document.getElementById("form-feedback").style.display = isFeedback ? "" : "none";
  document.getElementById("form-report").style.display   = isFeedback ? "none" : "";
  document.getElementById("ftab-feedback").classList.toggle("auth-tab-active",  isFeedback);
  document.getElementById("ftab-report").classList.toggle("auth-tab-active",   !isFeedback);
}
window.fbSwitchTab = fbSwitchTab;

// ── Show / hide overlay ───────────────────────────────────────────────────────
function fbShow() {
  // Pre-fill name & email from Firebase auth if logged in
  const user = window.getAuthUser ? window.getAuthUser() : null;
  if (user) {
    const nameEl  = document.getElementById("fb-name");
    const emailEl = document.getElementById("fb-email");
    if (!nameEl.value)  nameEl.value  = user.displayName || "";
    if (!emailEl.value) emailEl.value = user.email || "";
  }
  document.getElementById("feedback-overlay").style.display = "flex";
}

function fbHide() {
  document.getElementById("feedback-overlay").style.display = "none";
  // Clear messages
  ["fb-error","fb-success","rp-error","rp-success"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  });
}

// ── Submit ────────────────────────────────────────────────────────────────────
async function fbSubmit(e, type) {
  e.preventDefault();

  const isFeedback = type === "feedback";
  const errEl  = document.getElementById(isFeedback ? "fb-error"   : "rp-error");
  const succEl = document.getElementById(isFeedback ? "fb-success" : "rp-success");
  const btn    = document.getElementById(isFeedback ? "fb-btn"     : "rp-btn");

  errEl.style.display  = "none";
  succEl.style.display = "none";

  const name    = document.getElementById("fb-name").value.trim();
  const email   = document.getElementById("fb-email").value.trim();
  const message = isFeedback
    ? document.getElementById("fb-message").value.trim()
    : document.getElementById("fb-report-msg").value.trim();
  const appName = !isFeedback
    ? (document.getElementById("fb-app").value || "Not specified")
    : null;

  if (!message) {
    errEl.textContent   = "Please enter a message.";
    errEl.style.display = "block";
    return;
  }

  if (FORMSPREE_ID === "YOUR_FORM_ID") {
    errEl.textContent   = "Formspree not configured yet. Please set up FORMSPREE_ID in feedback.js.";
    errEl.style.display = "block";
    return;
  }

  btn.disabled    = true;
  btn.textContent = "Sending…";

  const payload = {
    _subject: isFeedback ? `[Apps Library] Feedback from ${name || email || "User"}` : `[Apps Library] Problem Report — ${appName}`,
    name:    name  || "Anonymous",
    email:   email || "Not provided",
    type:    isFeedback ? "General Feedback" : "Problem Report",
    ...(appName ? { app: appName } : {}),
    message,
  };

  try {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method:  "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body:    JSON.stringify(payload),
    });
    const data = await res.json();
    if (res.ok && data.ok !== false) {
      succEl.textContent   = isFeedback
        ? "Thank you for your feedback! We'll review it."
        : "Report submitted. We'll look into it.";
      succEl.style.display = "block";
      // Clear message textarea
      document.getElementById(isFeedback ? "fb-message" : "fb-report-msg").value = "";
    } else {
      throw new Error(data.error || "Submission failed");
    }
  } catch (err) {
    errEl.textContent   = "Failed to send. Please try again or email yousolvereal@gmail.com directly.";
    errEl.style.display = "block";
  } finally {
    btn.disabled    = false;
    btn.textContent = isFeedback ? "Send Feedback" : "Submit Report";
  }
}
window.fbSubmit = fbSubmit;

// ── Hint bubble ───────────────────────────────────────────────────────────────
function fbDismissHint() {
  const hint = document.getElementById("fb-hint");
  hint.style.opacity = "0";
  hint.style.transition = "opacity .25s";
  setTimeout(() => { hint.style.display = "none"; }, 260);
  localStorage.setItem("fb-hint-seen", "1");
}
window.fbDismissHint = fbDismissHint;

// ── Wire on DOM ready ─────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-feedback").addEventListener("click", () => {
    fbDismissHint();
    fbShow();
  });

  document.getElementById("feedback-close").addEventListener("click", fbHide);

  document.getElementById("feedback-overlay").addEventListener("click", e => {
    if (e.target === e.currentTarget) fbHide();
  });

  // Show hint bubble once to new visitors (after 3 seconds)
  if (!localStorage.getItem("fb-hint-seen")) {
    setTimeout(() => {
      const hint = document.getElementById("fb-hint");
      hint.style.display = "block";
      // Auto-dismiss after 8 seconds
      setTimeout(fbDismissHint, 8000);
    }, 3000);
  }

  // Populate app dropdown from global apps array
  const select = document.getElementById("fb-app");
  if (typeof apps !== "undefined") {
    apps.forEach(app => {
      const opt = document.createElement("option");
      opt.value       = app.name;
      opt.textContent = app.name;
      select.appendChild(opt);
    });
  }
});
