// src/components/DoctorCard.jsx
export default function DoctorCard({ doctor }) {
  return (
    <div className="card bg-gradient-card text-center p-3">
      <h5 className="fw-bold">{doctor.nombre}</h5>
      <p className="text-muted">{doctor.especialidad}</p>

      {/* Mostrar días disponibles */}
      {doctor.diasDisponibles.length > 0 ? (
        <p>Días: {doctor.diasDisponibles.join(", ")}</p>
      ) : (
        <p className="text-danger">Sin días disponibles</p>
      )}

      {/* Mostrar horarios */}
      {doctor.horarios.length > 0 ? (
        <p>Horarios: {doctor.horarios.join(", ")}</p>
      ) : (
        <p className="text-danger">Sin horarios asignados</p>
      )}
    </div>
  );
}