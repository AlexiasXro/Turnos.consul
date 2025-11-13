// src/pages/Login.jsx
import { startOAuthFlow } from '../services/googleAuth'

export default function Login() {
  return (
    <div>
      <h1>Ingresar</h1>
      <button onClick={startOAuthFlow}>Conectar con Google</button>
    </div>
  )
}

// src/pages/AuthCallback.jsx
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { exchangeCodeForToken } from '../services/googleAuth'

export default function AuthCallback() {
  const navigate = useNavigate()

  useEffect(() => {
    const run = async () => {
      const params = new URLSearchParams(window.location.search)
      const code = params.get('code')
      if (!code) return navigate('/login')

      const tokens = await exchangeCodeForToken(code)
      // Guarda el access_token (y refresh_token si llega) de forma segura
      sessionStorage.setItem('google_access_token', tokens.access_token)
      navigate('/turnos')
    }
    run()
  }, [navigate])

  return <p>Procesando autenticación...</p>
}
