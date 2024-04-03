import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ybnmqwbzhlnouojwyyus.supabase.co";
const supabaseKey = "your_supabase_key";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
