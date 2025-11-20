// src/hooks/useDoctores.js
// src/hooks/useDoctores.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { API_URL } from "../services/api";

export default function useDoctores() {
  const client = useQueryClient();

   // Lectura de doctores
  const doctoresQuery = useQuery({
    queryKey: ["doctores"],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/doctores`);
      if (!res.ok) throw new Error("Error cargando doctores");
      return res.json();
    },
  });

  // Crear doctor
  const addDoctor = useMutation({
    mutationFn: async (nuevo) => {
      const res = await fetch(`${API_URL}/doctores`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevo),
      });
      if (!res.ok) throw new Error("Error creando doctor");
      return res.json();
    },
    onSuccess: () => client.invalidateQueries(["doctores"]),
  });

  // Actualizar doctor
  const updateDoctor = useMutation({
    mutationFn: async ({ id, cambios }) => {
      const res = await fetch(`${API_URL}/doctores/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cambios),
      });
      if (!res.ok) throw new Error("Error actualizando doctor");
      return res.json();
    },
    onSuccess: () => client.invalidateQueries(["doctores"]),
  });

  // Eliminar doctor
  const deleteDoctor = useMutation({
    mutationFn: async (id) => {
      const res = await fetch(`${API_URL}/doctores/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Error eliminando doctor");
      return res.json();
    },
    onSuccess: () => client.invalidateQueries(["doctores"]),
  });

  return { ...doctoresQuery, addDoctor, updateDoctor, deleteDoctor };
}

