//\turnos1\src\pages\Turnos.jsx
//import { turnos } from '../data/turnos'; datos mockeados
import useTurnos from "../hooks/useTurnos"; // datos  desde API
import { useState } from "react";
import TurnoForm from "../components/TurnoForm";
import useDoctores from "../hooks/useDoctores";
import Container from "../components/Container";

export default function Turnos() {
  const { data: turnos, isLoading, isError, addTurno, updateTurno, deleteTurno } = useTurnos();
const { data: doctores } = useDoctores(); // para el select del formulario

  const [showForm, setShowForm] = useState(false);
  const [turnoEditando, setTurnoEditando] = useState(null);

  if (isLoading) return <p>Cargando turnos...</p>;
  if (isError) return <p>Error cargando turnos</p>;

  return (
    <Container>
      {/* Formulario de creación */}
      {showForm && (
        <div className="mt-4">
          <TurnoForm
            doctores={doctores || []}   // paso los doctores 
            onSubmit={(nuevo) => {
              addTurno.mutate(nuevo);
              setShowForm(false);
            }}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}

      {/* Formulario de edición */}
      {turnoEditando && (
        <div className="mt-4">
          <h3>Editar turno</h3>
          <TurnoForm
            doctores={doctores || []}   // 
            initialValues={turnoEditando}
            onSubmit={(cambios) => {
              updateTurno.mutate({ id: turnoEditando.id, cambios });
              setTurnoEditando(null);
            }}
            onCancel={() => setTurnoEditando(null)}
          />
        </div>
      )}

      {/* Título + botón */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">Turnos (modo_admin)</h2>
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "✖" : "Agregar turno"}
        </button>
      </div>

      {/* Tabla de turnos */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Doctor ID</th>
            <th>Acciones</th>
            <th className="text-secondary">Creado</th>
          </tr>
        </thead>
        <tbody>
          {turnos?.map((turno) => (
            <tr key={turno.id}>
              <td>{turno.paciente}</td>
              <td>
                {/* convertir timestamp a fecha legible */}
                {new Date(turno.fecha * 1000).toLocaleDateString()}
              </td>
              <td>{turno.hora}</td>
              <td>{turno.doctorId}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => setTurnoEditando(turno)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    const seguro = window.confirm(
                      `¿Está seguro que desea eliminar el turno de ${turno.paciente}?`
                    );
                    if (seguro) {
                      deleteTurno.mutate(turno.id);
                    }
                  }}
                >
                  Eliminar
                </button>
              </td>
              <td className="text-secondary">
                {new Date(turno.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
