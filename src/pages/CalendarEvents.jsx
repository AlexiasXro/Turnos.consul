// src/pages/CalendarEvents.jsx
import { useCalendarEvents } from "../hooks/useCalendarEvents";

export default function CalendarEvents() {
  const { events, loading, error } = useCalendarEvents();

  if (loading) return <p>Cargando eventos...</p>;
  if (error) return <p>Error al cargar eventos</p>;
  if (events.length === 0) return <p>No hay eventos disponibles</p>;

  return (
    <ul>
      {events.map(ev => (
        <li key={ev.id}>
          <strong>{ev.summary}</strong> <br />
          {ev.start?.dateTime || ev.start?.date} → {ev.end?.dateTime || ev.end?.date}
        </li>
      ))}
    </ul>
  );
}