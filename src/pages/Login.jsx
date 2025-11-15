// src/pages/Login.jsx
import Container from '../components/Container';
import { startOAuthFlow } from '../services/googleAuth'

export default function Login() {
  return (
    <Container>
    <div>
      <h1>Ingresar</h1>
      <button onClick={startOAuthFlow}>Conectar con Google</button>
    </div>
    
  </Container>
  )
}
