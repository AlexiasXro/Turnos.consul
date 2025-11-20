import { useState } from "react";
import useDoctores from "../hooks/useDoctores";
import DoctorForm from "../components/DoctorForm";
import Container from "../components/Container";

export default function Doctores() {
  const { data: doctores, isLoading, isError, addDoctor, updateDoctor, deleteDoctor } = useDoctores();

  // Estado para mostrar/ocultar el formulario de creación
  const [showForm, setShowForm] = useState(false);

  // Estado para saber si estamos editando un doctor
  const [doctorEditando, setDoctorEditando] = useState(null);

  if (isLoading) return <p>Cargando doctores...</p>;
  if (isError) return <p>Error cargando doctores</p>;

  return (
    <Container>
      {/* Formulario de creación */}
      {showForm && (
        <div className="mt-4">
          <DoctorForm
            onSubmit={(nuevo) => {
              addDoctor.mutate(nuevo);
              setShowForm(false); // cerrar al guardar
            }}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}

      {/* Formulario de edición */}
      {doctorEditando && (
        <div className="mt-4">
          <h3>Editar doctor</h3>
          <DoctorForm
            initialValues={doctorEditando}
            onSubmit={(cambios) => {
              updateDoctor.mutate({ id: doctorEditando.id, cambios });
              setDoctorEditando(null); // cerrar al guardar
            }}
            onCancel={() => setDoctorEditando(null)}
          />
        </div>
      )}

      {/*  */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">Doctores (modo_admin)</h2>
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "✖" : "Agregar doctor"}
        </button>
      </div>

      {/* Tabla de doctores */}
      <table className="table table-striped">
        <thead>
          <tr>
             
      <th>Nombre</th>
      <th>Especialidad</th>
      <th>Días disponibles</th>
      <th>Horarios</th>
      <th>Acciones</th>
      <th className="text-secondary">Creado</th>
    
          </tr>
        </thead>
        <tbody>
          {doctores?.map((doc) => (
            <tr key={doc.id}>
        <td>{doc.nombre}</td>
        <td>{doc.especialidad}</td>
        <td>{doc.diasDisponibles.join(", ") || "—"}</td>
        <td>{doc.horarios.join(", ") || "—"}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => setDoctorEditando(doc)}
                  >
                  Editar
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    const seguro = window.confirm(
                      `¿Está seguro que desea eliminar al doctor ${doc.nombre}?`
                    );
                    if (seguro) {
                      deleteDoctor.mutate(doc.id);
                    }
                  }}
                  >
                  Eliminar
                </button>
              </td>
                  <td className="text-secondary">{new Date(doc.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
