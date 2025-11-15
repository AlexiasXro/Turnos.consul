// src/services/googleCalendar.js

// Obtener eventos del calendario principal del usuario
//reemplaza datos hardcodeados por eventos reales del calendario del usuario.
export async function getCalendarEvents(accessToken) {
  const response = await fetch(
    "https://www.googleapis.com/calendar/v3/calendars/primary/events",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`, // token en el header
      },
    }
  );

  if (!response.ok) {
    throw new Error("Error al obtener eventos de Google Calendar");
  }

  const data = await response.json();
  return data.items; // Array de eventos
}
