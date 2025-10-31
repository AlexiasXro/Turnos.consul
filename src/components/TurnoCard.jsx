export default function TurnoCard({ turno }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h3>{turno.nombre}</h3>
      <p>Fecha: {turno.fecha}</p>
      <p>Hora: {turno.hora}</p>
    </div>
  );
}
