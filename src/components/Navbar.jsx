export default function Navbar() {
  return (
     <nav className="navbar navbar-expand-lg  navbar-dark shadow-sm border-bottom mb-4">
      <div className="container">
        <a href="/" class="navbar-brand d-flex align-items-center gap-2">
  <i class="bi-capsule logo text-primary"></i>
  <span class="fw-bold fs-5">Turnos </span>
</a>
        <a className="navbar-brand fw-semibold" href="#">
          Gestión de Turnos
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Turnos</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Pacientes</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

