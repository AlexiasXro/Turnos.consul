// src/pages/AuthCallback.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { exchangeCodeForToken } from "../services/googleAuth";
import { getCalendarEvents } from "../services/googleCalendar";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      exchangeCodeForToken(code).then(async (tokens) => {
        console.log("Tokens recibidos:", tokens);

        // Guardar tokens
        localStorage.setItem("google_tokens", JSON.stringify(tokens));

        // 🔥 Parte crucial: usar el access_token para pedir eventos
        const events = await getCalendarEvents(tokens.access_token);
        console.log("Eventos del calendario:", events);

        // Podés guardar los eventos en estado global, Supabase o mostrarlos en tu UI
        navigate("/"); // Redirige al home o dashboard
      });
    }
  }, [navigate]);

  return <p>Procesando inicio de sesión con Google...</p>;
}
