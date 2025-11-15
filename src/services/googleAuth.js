// src/services/googleAuth.js

// Client ID de Google Cloud
const clientId = "456156238746-9putf9jimin4k3o46qfe2fstffijeed4.apps.googleusercontent.com";

// elegimos el redirect_uri según el entorno
const redirectUri =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5173/auth/callback"   // Dev
    : "https://turnoz.netlify.app/auth/callback"; // Producción

// Scopes que pedís (ejemplo: acceso a Google Calendar)
const scopes = "https://www.googleapis.com/auth/calendar";

// --- PKCE helpers ---
function base64urlencode(str) {
  return btoa(String.fromCharCode.apply(null, new Uint8Array(str)))
    .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function sha256Plain(input) {
  const enc = new TextEncoder().encode(input);
  return await crypto.subtle.digest("SHA-256", enc);
}

export async function createPkce() {
  const verifier = base64urlencode(crypto.getRandomValues(new Uint8Array(32)));
  const hashed = await sha256Plain(verifier);
  const challenge = base64urlencode(hashed);
  return { verifier, challenge };
}

// --- Iniciar flujo OAuth con PKCE ---
export async function startOAuthFlow() {
  const { verifier, challenge } = await createPkce();

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri, // 👈 usa la constante con dev/prod
    response_type: "code",
    scope: scopes,
    code_challenge: challenge,
    code_challenge_method: "S256",
    access_type: "offline",
    prompt: "consent",
  });

  // Guarda el verifier para el intercambio del token
  sessionStorage.setItem("pkce_verifier", verifier);

  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
}

// --- Intercambiar el "code" por access token ---
export async function exchangeCodeForToken(code) {
  const verifier = sessionStorage.getItem("pkce_verifier");

  const body = new URLSearchParams({
    code,
    client_id: clientId,
    redirect_uri: redirectUri, // 👈 usa la constante con dev/prod
    grant_type: "authorization_code",
    code_verifier: verifier,
  });

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  const tokens = await res.json();
  // tokens: { access_token, expires_in, refresh_token?, scope, token_type }
  return tokens;
}