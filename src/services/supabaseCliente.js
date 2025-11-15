// src/services/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://exanezyivhgnouivfihw.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4YW5lenlpdmhnbm91aXZmaWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwNDA2NjIsImV4cCI6MjA3ODYxNjY2Mn0.ZdoUMZqGhJfFnhFXguxVgEjG5oVuCBDKHma4retvL8o'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Usarlo asi en cada componente
// import { supabase } from '../services/supabaseClient'
//punto de entrada