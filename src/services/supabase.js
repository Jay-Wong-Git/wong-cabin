import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ybnmqwbzhlnouojwyyus.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlibm1xd2J6aGxub3Vvand5eXVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEyMDYxODMsImV4cCI6MjAyNjc4MjE4M30.I8i5-JOoFNRdF9VQPoxR1wnyTJ7hNKgauSO79JdFFcM";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
