export default function TurnoCard({ turno }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title text-primary fw-semibold">{turno.nombre}</h5>
        <p className="card-text mb-1">Fecha: {turno.fecha}</p>
        <p className="card-text">Hora: {turno.hora}</p>
      </div>
    </div>
  );
}
