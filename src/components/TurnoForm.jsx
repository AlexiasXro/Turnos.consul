// src/components/TurnoForm.jsx
import { useState } from "react";

export default function TurnoForm({ doctores, onSubmit }) {
  const [doctorId, setDoctorId] = useState("");
  const [paciente, setPaciente] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ doctorId, paciente, fecha, hora });
    setDoctorId("");
    setPaciente("");
    setFecha("");
    setHora("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded">
      <div className="mb-3">
        <label className="form-label">Doctor</label>
        <select
          className="form-select"
          value={doctorId}
          onChange={(e) => setDoctorId(e.target.value)}
          required
        >
          <option value="">Seleccione un doctor</option>
          {Array.isArray(doctores) &&
            doctores.map((doc) => (
              <option key={doc.id} value={doc.id}>
                {doc.nombre} — {doc.especialidad}
              </option>
            ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Paciente</label>
        <input
          type="text"
          className="form-control"
          value={paciente}
          onChange={(e) => setPaciente(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Fecha</label>
        <input
          type="date"
          className="form-control"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Hora</label>
        <input
          type="time"
          className="form-control"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-success">
        Guardar turno
      </button>
    </form>
  );
}
