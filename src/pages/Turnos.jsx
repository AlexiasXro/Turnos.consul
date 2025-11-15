import Container from '../components/Container';
import TurnoCard from '../components/TurnoCard';
// src/pages/Turnos.jsx
import { useTurnos } from '../hooks/useTurnos'

const CALENDAR_ID = '456156238746-9putf9jimin4k3o46qfe2fstffijeed4.apps.googleusercontent.com' // o el ID específico del calendario

export default function Turnos() {
  const { data, isLoading, isError } = useTurnos(CALENDAR_ID)

  // Cargando turnos
  // Error al cargar
  // No hay turnos disponibles
  if (isLoading) return <p>Cargando turnos...</p>
  if (isError) return <p>Error al cargar turnos</p>
  if (!data || data.length === 0) return <p>No hay turnos disponibles</p>

  return (
    <ul>
      {data.map((ev) => {
        const start = ev.start?.dateTime || ev.start?.date
        const end = ev.end?.dateTime || ev.end?.date
        return (
          <li key={ev.id}>
            {ev.summary || 'Sin título'} — {start} → {end}
          </li>
        )
      })}
    </ul>
  )
}

