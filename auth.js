/**
 * auth.js — Firebase Authentication for Apps Library
 *
 * SETUP (one-time, ~5 minutes):
 * 1. Go to https://console.firebase.google.com
 * 2. Click "Add project" → give it a name → create
 * 3. In the project, click "Authentication" → "Get Started"
 * 4. Under "Sign-in method", enable "Email/Password" → Save
 * 5. Click the gear icon → "Project settings" → "Your apps" → Web (</>)
 * 6. Register the app, then copy the firebaseConfig object below
 * 7. Replace the placeholder values in firebaseConfig with your real values
 */

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3DsQKC-tDtHDwyeUooXsgm9TgOD0oFvI",
  authDomain: "applibrary-e6ee1.firebaseapp.com",
  projectId: "applibrary-e6ee1",
  storageBucket: "applibrary-e6ee1.firebasestorage.app",
  messagingSenderId: "498960479704",
  appId: "1:498960479704:web:de7c5fc1e818d066aa6ead",
  measurementId: "G-1QEVYE7HSJ"
};

// ── Init ─────────────────────────────────────────────────────────────────────
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// ── State ─────────────────────────────────────────────────────────────────────
let _currentUser     = null;
let _pendingCallback = null;   // download action waiting for login

// ── Auth overlay helpers ──────────────────────────────────────────────────────
function authShow() {
  const el = document.getElementById("auth-overlay");
  el.style.display = "flex";
}

function authHide() {
  const el = document.getElementById("auth-overlay");
  el.style.display = "none";
  // clear errors / success messages
  document.getElementById("login-error").style.display   = "none";
  document.getElementById("login-success").style.display = "none";
  document.getElementById("reg-error").style.display     = "none";
}

function authSwitchTab(tab) {
  const isLogin = tab === "login";
  document.getElementById("form-login").style.display    = isLogin ? ""     : "none";
  document.getElementById("form-register").style.display = isLogin ? "none" : "";
  document.getElementById("tab-login").classList.toggle("auth-tab-active",    isLogin);
  document.getElementById("tab-register").classList.toggle("auth-tab-active", !isLogin);
}

// Expose tab switcher globally (used by inline onclick in HTML)
window.authSwitchTab = authSwitchTab;

// ── Register ──────────────────────────────────────────────────────────────────
async function authRegister(e) {
  e.preventDefault();
  const name     = document.getElementById("reg-name").value.trim();
  const email    = document.getElementById("reg-email").value.trim();
  const password = document.getElementById("reg-password").value;
  const errEl    = document.getElementById("reg-error");
  const btn      = document.getElementById("reg-btn");

  errEl.style.display = "none";
  btn.disabled = true;
  btn.textContent = "Creating account…";

  try {
    const cred = await auth.createUserWithEmailAndPassword(email, password);
    await cred.user.updateProfile({ displayName: name });
    authHide();
    if (_pendingCallback) { _pendingCallback(); _pendingCallback = null; }
  } catch (err) {
    errEl.textContent    = friendlyError(err.code);
    errEl.style.display  = "block";
  } finally {
    btn.disabled = false;
    btn.textContent = "Create Account";
  }
}

// Expose globally (used by form onsubmit)
window.authRegister = authRegister;

// ── Login ─────────────────────────────────────────────────────────────────────
async function authLogin(e) {
  e.preventDefault();
  const email    = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;
  const errEl    = document.getElementById("login-error");
  const btn      = document.getElementById("login-btn");

  errEl.style.display = "none";
  btn.disabled = true;
  btn.textContent = "Signing in…";

  try {
    await auth.signInWithEmailAndPassword(email, password);
    authHide();
    if (_pendingCallback) { _pendingCallback(); _pendingCallback = null; }
  } catch (err) {
    errEl.textContent   = friendlyError(err.code);
    errEl.style.display = "block";
  } finally {
    btn.disabled = false;
    btn.textContent = "Sign In";
  }
}

window.authLogin = authLogin;

// ── Forgot Password ───────────────────────────────────────────────────────────
async function authForgotPassword() {
  const email  = document.getElementById("login-email").value.trim();
  const errEl  = document.getElementById("login-error");
  const succEl = document.getElementById("login-success");

  errEl.style.display  = "none";
  succEl.style.display = "none";

  if (!email) {
    errEl.textContent   = "Enter your email address above first.";
    errEl.style.display = "block";
    document.getElementById("login-email").focus();
    return;
  }

  try {
    await auth.sendPasswordResetEmail(email);
    succEl.textContent   = `Reset link sent to ${email}. Check your inbox.`;
    succEl.style.display = "block";
  } catch (err) {
    errEl.textContent   = friendlyError(err.code);
    errEl.style.display = "block";
  }
}

window.authForgotPassword = authForgotPassword;

// ── Logout ────────────────────────────────────────────────────────────────────
async function authLogout() {
  await auth.signOut();
}

// Expose current user for other modules
window.getAuthUser = () => _currentUser;

// ── Public API ────────────────────────────────────────────────────────────────
/**
 * Call this before every download.
 * If user is logged in → runs callback immediately.
 * If not → shows auth modal; callback runs after successful login/register.
 */
window.requireAuth = function (callback) {
  if (_currentUser) {
    callback();
  } else {
    _pendingCallback = callback;
    authShow();
  }
};

// ── Auth state listener ───────────────────────────────────────────────────────
auth.onAuthStateChanged(user => {
  _currentUser = user;

  const statusEl  = document.getElementById("auth-status");
  const logoutBtn = document.getElementById("btn-logout");

  if (user) {
    const label = user.displayName || user.email;
    statusEl.textContent  = `Signed in as ${label}`;
    statusEl.style.display = "block";
    logoutBtn.style.display = "block";
  } else {
    statusEl.style.display  = "none";
    logoutBtn.style.display = "none";
  }
});

// ── Wire static elements ──────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("auth-close").addEventListener("click", () => {
    _pendingCallback = null;
    authHide();
  });

  document.getElementById("auth-overlay").addEventListener("click", e => {
    if (e.target === e.currentTarget) {
      _pendingCallback = null;
      authHide();
    }
  });

  document.getElementById("btn-logout").addEventListener("click", authLogout);
});

// ── Error messages ────────────────────────────────────────────────────────────
function friendlyError(code) {
  const map = {
    "auth/email-already-in-use":    "This email is already registered. Please sign in.",
    "auth/invalid-email":           "Invalid email address.",
    "auth/weak-password":           "Password must be at least 6 characters.",
    "auth/user-not-found":          "No account found with this email.",
    "auth/wrong-password":          "Incorrect password.",
    "auth/invalid-credential":      "Incorrect email or password.",
    "auth/too-many-requests":       "Too many attempts. Please try again later.",
    "auth/network-request-failed":  "Network error. Check your connection.",
  };
  return map[code] || `Error: ${code || "unknown"}. Please try again.`;
}
