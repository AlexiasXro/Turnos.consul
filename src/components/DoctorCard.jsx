export default function DoctorCard({ doctor }) {
  return (
    <div className="card text-center p-3">

      <i className={`bi ${doctor.icono} display-4 text-primary mb-3`}></i>
      <h5 className="fw-bold">{doctor.nombre}</h5>
      <p className="text-muted">{doctor.especialidad}</p>
    </div>
  );
}
