import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://wpvimonrufpndtxyitkj.supabase.co',  // Your Supabase URL
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indwdmltb25ydWZwbmR0eHlpdGtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1NTI1OTgsImV4cCI6MjA0OTEyODU5OH0.-c78Ei7OYpTgeGedQVMVcuSA9yB1quZI6i79HEkFYtQ'  // Your anon key
);

export default supabase;
