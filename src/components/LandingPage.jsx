import { funcionalidades } from '../data/funcionalidades';

export default function LandingPage() {
  return (
    <div>
      {/*1️ Header| hero */}
      <header className=" bg-gradient-header text-light py-5 text-center">
        <div className="container">
          <h1 className="display-4 fw-bold">Centro Salud</h1>
          <p className="lead">Gestión de turnos simple, rápida y segura</p>
          <div className="mt-4">
            <button className="btn btn-dark me-2" to="/login" >Ingresar al sistema</button>
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
      
    <footer className="py-4 bg-secondary text-dark text-center">
  <div className="container">
    <p>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github me-2" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5a1.5 1.5 0 0 0 -.5 -1.2c3.5 -.4 7 -1.7 7 -7.5a5.4 5.4 0 0 0 -1.5 -3.8a5.1 5.1 0 0 0 -.1 -3.8s-1.3 -.4 -4.3 1.6a14.8 14.8 0 0 0 -7.8 0c-3 -2 -4.3 -1.6 -4.3 -1.6a5.1 5.1 0 0 0 -.1 3.8a5.4 5.4 0 0 0 -1.5 3.8c0 5.8 3.5 7.1 7 7.5a1.5 1.5 0 0 0 -.5 1.2v3.5" />
      </svg>
      <a href="https://github.com/AlexiasXro/Turnos.consul" className="text-dark">
        github.com/AlexiasXro/Turnos.consul
      </a>
    </p>
    <p>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-laptop me-2" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10h-18z" />
        <path d="M3 17h18" />
        <path d="M8 21h8" />
      </svg>
      Desarrolladora de software | Alejandra Romina Cáceres
    </p>
    <p>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail me-2" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 7l9 6l9 -6" />
        <path d="M21 7v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
      </svg>
      cacere299romina@gmail.com
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone ms-3 me-2" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 4h5l2 5l-2 2a11 11 0 0 0 5 5l2 -2l5 2v5a2 2 0 0 1 -2 2a16 16 0 0 1 -16 -16a2 2 0 0 1 2 -2" />
      </svg>
      Tel: 03644454650
    </p>
    <p>
      <a href="#" className="text-light me-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shield me-1" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 3c.132 0 .263 .005 .393 .014a9 9 0 0 1 8.607 8.607a9 9 0 0 1 -8.607 8.607a9 9 0 0 1 -8.607 -8.607a9 9 0 0 1 8.607 -8.607z" />
        </svg>
        Política de privacidad
      </a>
      <a href="#" className="text-light">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-text me-1" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h6l6 6v10a2 2 0 0 1 -2 2z" />
          <path d="M9 9h1" />
          <path d="M9 13h6" />
          <path d="M9 17h6" />
        </svg>
        Términos y condiciones
      </a>
    </p>
  </div>
</footer>



    </div>
  );
}
