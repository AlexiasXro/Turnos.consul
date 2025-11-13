// src/hooks/useTurnos.js
import { useQuery } from '@tanstack/react-query'

async function fetchEvents(calendarId) {
  const accessToken = sessionStorage.getItem('google_access_token')
  if (!accessToken) throw new Error('No autenticado')
  const params = new URLSearchParams({
    singleEvents: 'true',
    orderBy: 'startTime',
    timeMin: new Date().toISOString()
  })
  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?${params.toString()}`,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  )
  if (!res.ok) throw new Error('Error al obtener eventos')
  const data = await res.json()
  return data.items || []
}

export function useTurnos(calendarId) {
  return useQuery({
    queryKey: ['turnos', calendarId],
    queryFn: () => fetchEvents(calendarId),
    staleTime: 60_000
  })
}
