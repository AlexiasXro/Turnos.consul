// src/components/TurnoForm.jsx
import { useState, useEffect } from "react";

export default function TurnoForm({ onSubmit, onCancel, initialValues }) {
  const [paciente, setPaciente] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [doctorId, setDoctorId] = useState("");

  useEffect(() => {
    if (initialValues) {
      setPaciente(initialValues.paciente || "");
      // convertir timestamp a input date
      setFecha(initialValues.fecha ? new Date(initialValues.fecha * 1000).toISOString().slice(0,10) : "");
      setHora(initialValues.hora || "");
      setDoctorId(initialValues.doctorId || "");
    }
  }, [initialValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // convertir fecha a timestamp para MockAPI
    const timestamp = fecha ? Math.floor(new Date(fecha).getTime() / 1000) : null;
    onSubmit({ paciente, fecha: timestamp, hora, doctorId });
    setPaciente("");
    setFecha("");
    setHora("");
    setDoctorId("");
  };

  const handleCancel = () => {
    setPaciente("");
    setFecha("");
    setHora("");
    setDoctorId("");
    if (onCancel) onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded">
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

      <div className="mb-3">
        <label className="form-label">Doctor ID</label>
        <input
          type="number"
          className="form-control"
          value={doctorId}
          onChange={(e) => setDoctorId(e.target.value)}
          required
        />
      </div>

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-primary">
          {initialValues ? "Actualizar" : "Guardar"}
        </button>
        <button type="button" className="btn btn-secondary" onClick={handleCancel}>
          Cancelar
        </button>
      </div>
    </form>
  );
}
