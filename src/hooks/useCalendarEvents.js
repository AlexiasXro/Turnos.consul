// hooks/useCalendarEvents.js
import { useEffect, useState } from "react";
import { getCalendarEvents } from "../services/googleCalendar";

export function useCalendarEvents(calendarId = "primary") {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const tokens = JSON.parse(localStorage.getItem("google_tokens"));
    if (tokens?.access_token) {
      getCalendarEvents(tokens.access_token, calendarId)
        .then(setEvents)
        .catch(setError)
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [calendarId]);

  return { events, loading, error };
}
