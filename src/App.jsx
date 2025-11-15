import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Login from './pages/Login'
import AuthCallback from './pages/AuthCallback'

import Turnos from './pages/Turnos';
import Doctores from './pages/Doctores';

import './App.css';
import './index.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/turnos" element={<Turnos />} />
        <Route path="/doctores" element={<Doctores />} />
        {/* <Route path="/pacientes" element={<Pacientes />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
