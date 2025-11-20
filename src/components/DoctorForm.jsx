import { useState, useEffect } from "react";

export default function DoctorForm({ onSubmit, onCancel, initialValues }) {
  const [nombre, setNombre] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [diasDisponibles, setDiasDisponibles] = useState([]);
  const [horarios, setHorarios] = useState([]);

  // Si hay valores iniciales (modo edición), los cargamos
  useEffect(() => {
    if (initialValues) {
      setNombre(initialValues.nombre || "");
      setEspecialidad(initialValues.especialidad || "");
      setDiasDisponibles(initialValues.diasDisponibles || []);
      setHorarios(initialValues.horarios || []);
    }
  }, [initialValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nombre, especialidad, diasDisponibles, horarios });
    setNombre("");
    setEspecialidad("");
    setDiasDisponibles([]);
    setHorarios([]);
  };

  const handleCancel = () => {
    setNombre("");
    setEspecialidad("");
    setDiasDisponibles([]);
    setHorarios([]);
    if (onCancel) onCancel();
  };

  // Manejo de checkboxes para días
  const toggleDia = (dia) => {
    setDiasDisponibles((prev) =>
      prev.includes(dia) ? prev.filter((d) => d !== dia) : [...prev, dia]
    );
  };

  // Manejo de horarios (simplemente separados por coma)
  const handleHorariosChange = (e) => {
    setHorarios(e.target.value.split(",").map((h) => h.trim()));
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded">
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Especialidad</label>
        <input
          type="text"
          className="form-control"
          value={especialidad}
          onChange={(e) => setEspecialidad(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Días disponibles</label>
        <div className="d-flex gap-2 flex-wrap">
          {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"].map((dia) => (
            <div key={dia} className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={diasDisponibles.includes(dia)}
                onChange={() => toggleDia(dia)}
              />
              <label className="form-check-label">{dia}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Horarios (separados por coma)</label>
        <input
          type="text"
          className="form-control text-secondary"
          value={horarios.join(", ")}
          onChange={handleHorariosChange}
          placeholder="Ejemplo: 08:00, 10:30, 15:00"
        />
      </div>

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-primary">
          {initialValues ? "Actualizar" : "Guardar"}
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleCancel}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
