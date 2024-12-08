import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  '*****',  // Your Supabase URL
  '****'  // Your anon key
);

export default supabase;
