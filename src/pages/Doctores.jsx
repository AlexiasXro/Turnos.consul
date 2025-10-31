import { useState } from 'react';
import Container from '../components/Container';
import DoctorCard from '../components/DoctorCard';
import { doctores } from '../data/doctores';

export default function Doctores() {
  const [seleccionado, setSeleccionado] = useState(null);

  return (
    <Container>
      <h2 className="mb-4">Médicos disponibles</h2>
      <div className="row g-4">
        {doctores.map((doc) => (
          <div
            className="col-md-4"
            key={doc.id}
            onClick={() => setSeleccionado(doc)}
            style={{ cursor: 'pointer' }}
          >
            <DoctorCard doctor={doc} />
          </div>
        ))}
      </div>

      {seleccionado && (
        <div className="alert alert-info mt-4">
          <h5>Detalle del médico</h5>
          <p><strong>Nombre:</strong> {seleccionado.nombre}</p>
          <p><strong>Especialidad:</strong> {seleccionado.especialidad}</p>
         <p><strong>Días disponibles:</strong> {seleccionado.diasDisponibles?.join(", ")}</p>
<p><strong>Horarios:</strong> {seleccionado.horarios?.join(" - ")}</p>

          <button className="btn btn-primary" onClick={() => alert("Turno solicitado")}>
            Solicitar turno
          </button>
        </div>
      )}
    </Container>
  );
}
