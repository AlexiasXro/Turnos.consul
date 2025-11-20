// src/hooks/useTurnos.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { API_URL } from "../services/api"; // api v25-turnos

export default function useTurnos() {
  const client = useQueryClient();

  // Lectura de turnos
  const turnosQuery = useQuery({
    queryKey: ["turnos"],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/Turnos`);
      if (!res.ok) throw new Error("Error cargando turnos");
      return res.json();
    },
  });

  const addTurno = useMutation({
    mutationFn: async (nuevo) => {
      const res = await fetch(`${API_URL}/Turnos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevo),
      });
      if (!res.ok) throw new Error("Error creando turno");
      return res.json();
    },
    onSuccess: () => client.invalidateQueries(["turnos"]),
  });

  const updateTurno = useMutation({
    mutationFn: async ({ id, cambios }) => {
      const res = await fetch(`${API_URL}/Turnos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cambios),
      });
      if (!res.ok) throw new Error("Error actualizando turno");
      return res.json();
    },
    onSuccess: () => client.invalidateQueries(["turnos"]),
  });

  const deleteTurno = useMutation({
    mutationFn: async (id) => {
      const res = await fetch(`${API_URL}/Turnos/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Error eliminando turno");
      return res.json();
    },
    onSuccess: () => client.invalidateQueries(["turnos"]),
  });

  return { ...turnosQuery, addTurno, updateTurno, deleteTurno };
}
