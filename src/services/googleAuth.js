// src/services/googleAuth.js
const CLIENT_ID = 'TU_CLIENT_ID.apps.googleusercontent.com'
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly'

// Genera un code_verifier y code_challenge (PKCE)
function base64urlencode(str) {
  return btoa(String.fromCharCode.apply(null, new Uint8Array(str)))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

async function sha256Plain(input) {
  const enc = new TextEncoder().encode(input)
  return await crypto.subtle.digest('SHA-256', enc)
}

export async function createPkce() {
  const verifier = base64urlencode(crypto.getRandomValues(new Uint8Array(32)))
  const hashed = await sha256Plain(verifier)
  const challenge = base64urlencode(hashed)
  return { verifier, challenge }
}

// Iniciar el flujo OAuth (authorization code + PKCE)
export async function startOAuthFlow() {
  const { verifier, challenge } = await createPkce()
  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: window.location.origin + '/auth/callback',
    response_type: 'code',
    scope: SCOPES,
    code_challenge: challenge,
    code_challenge_method: 'S256',
    access_type: 'offline',
    prompt: 'consent'
  })
  // Guarda el verifier para el intercambio del token
  sessionStorage.setItem('pkce_verifier', verifier)
  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`
}

// Intercambiar el "code" por access token
export async function exchangeCodeForToken(code) {
  const verifier = sessionStorage.getItem('pkce_verifier')
  const body = new URLSearchParams({
    code,
    client_id: CLIENT_ID,
    redirect_uri: window.location.origin + '/auth/callback',
    grant_type: 'authorization_code',
    code_verifier: verifier,
  })
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body
  })
  const tokens = await res.json()
  // tokens: { access_token, expires_in, refresh_token?, scope, token_type }
  return tokens
}
