import { supabase } from "./supabaseClient";

export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:5173/auth/callback", // en dev
      // en producción: "https://turnoz.netlify.app/auth/callback"
      scopes: "https://www.googleapis.com/auth/calendar.readonly",
    },
  });

  if (error) {
    console.error("Error en login con Google:", error);
  }
}

//definís el redirectTo y los scopes.