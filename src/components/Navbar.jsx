import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand shadow-sm border-bottom ">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
  <i className="logo text-primary d-flex align-items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icon-tabler-medical-cross"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13 3a1 1 0 0 1 1 1v4.535l3.928 -2.267a1 1 0 0 1 1.366 .366l1 1.732a1 1 0 0 1 -.366 1.366l-3.927 2.268l3.927 2.269a1 1 0 0 1 .366 1.366l-1 1.732a1 1 0 0 1 -1.366 .366l-3.928 -2.269v4.536a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-4.536l-3.928 2.268a1 1 0 0 1 -1.366 -.366l-1 -1.732a1 1 0 0 1 .366 -1.366l3.927 -2.268l-3.927 -2.268a1 1 0 0 1 -.366 -1.366l1 -1.732a1 1 0 0 1 1.366 -.366l3.928 2.267v-4.535a1 1 0 0 1 1 -1h2z" />
    </svg>
  </i>
  <span className="fw-bold  text-primary">Turnitos</span>
</Link>

        <div className="collapse navbar-collapse">

          <p>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler bg-light icon-tabler-brand-github me-2" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5a1.5 1.5 0 0 0 -.5 -1.2c3.5 -.4 7 -1.7 7 -7.5a5.4 5.4 0 0 0 -1.5 -3.8a5.1 5.1 0 0 0 -.1 -3.8s-1.3 -.4 -4.3 1.6a14.8 14.8 0 0 0 -7.8 0c-3 -2 -4.3 -1.6 -4.3 -1.6a5.1 5.1 0 0 0 -.1 3.8a5.4 5.4 0 0 0 -1.5 3.8c0 5.8 3.5 7.1 7 7.5a1.5 1.5 0 0 0 -.5 1.2v3.5" />
      </svg>
      <a href="https://github.com/AlexiasXro/Turnos.consul" className="text-light">
        github.com/AlexiasXro/Turnos.consul
      </a>
    </p>
    
          <ul className="navbar-nav ms-auto">
            
            <li className="nav-item"><Link className="nav-link link-animado" to="/doctores">Doctores</Link></li>
            <li className="nav-item"><Link className="nav-link " to="/">Inicio</Link></li>
            <li className="nav-item"><Link className="nav-link link-animado" to="/turnos">Turnos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/pacientes">Pacientes</Link></li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

