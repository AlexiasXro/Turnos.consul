// import Doctores from './pages/Doctores';

// <Route path="/doctores" element={<Doctores />} />


// import Doctores from './pages/Turnos';
// <Route path="/turnos" element={<Turnos />} />

// src/Routes.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import AuthCallback from './pages/AuthCallback'
import Turnos from './pages/Turnos'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/turnos" element={<Turnos />} />
      </Routes>
    </Router>
  )
}
