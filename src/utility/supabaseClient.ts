import { createClient } from "@refinedev/supabase";

//const SUPABASE_URL = "https://iwdfzvfqbtokqetmbmbp.supabase.co";
//const SUPABASE_KEY =
//  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMDU2NzAxMCwiZXhwIjoxOTQ2MTQzMDEwfQ._gr6kXGkQBi9BM9dx5vKaNKYj_DJN1xlkarprGpM_fU";
const SUPABASE_URL = "https://enatdqfpzqruzxmouznn.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuYXRkcWZwenFydXp4bW91em5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxMjY0NzIsImV4cCI6MjA3MDcwMjQ3Mn0.2nLsYUQlrF-erKHQOWNUhB4Zeza0C4UJO4TRtfQA4mI";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
