// hooks/useAuth.js
import { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";

export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin + "/auth/callback" },
    });
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return { user, loginWithGoogle, logout };
}
