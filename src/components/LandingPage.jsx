import { funcionalidades } from '../data/funcionalidades';

export default function LandingPage() {
  return (
    <div>
      {/*1️ Header| hero */}
      <header className=" bg-primary text-light py-5 text-center">
        <div className="container">
          <h1 className="display-4 fw-bold">Centro Salud</h1>
          <p className="lead">Gestión de turnos simple, rápida y segura</p>
          <div className="mt-4">
            <button className="btn btn-dark me-2">Ingresar al sistema</button>
            <button className="btn btn-outline-dark">Solicitar turno</button>
          </div>
        </div>
      </header>

      {/* 2 Sección de funcionalidades*/}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Funcionalidades</h2>
          <div className="row g-4">
            {funcionalidades.map((f, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 shadow-sm text-center p-3">
                  <i className={`bi ${f.icono} display-4 text-primary mb-3`}></i>
                  <h5 className="card-title fw-bold">{f.nombre}</h5>
                  <p className="card-text">{f.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️ Acerca del sistema*/}
      <section className="py-5 bg-dark text-light text-center">
        <div className="container">
          <h2>Acerca del sistema</h2>
          <p className="lead mt-3">
            Gestión de turnos creada para clínicas y consultorios. Ahorro de tiempo, control total de la agenda y prevención de errores.
          </p>
          <p className="fw-semibold mt-2">Más de 1000 turnos gestionados sin errores</p>
        </div>
      </section>

      {/* 4️ Footer*/}
      <footer className="py-4 bg-secondary text-light text-center">
        <div className="container">
          <p>Contacto: contacto@clinicaabba.com | Tel: 011-1234-5678</p>
          <p>
            <a href="#" className="text-light me-3">Política de privacidad</a>
            <a href="#" className="text-light">Términos y condiciones</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
