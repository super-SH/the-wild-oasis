import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://mudxaylkckisstqaxtis.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11ZHhheWxrY2tpc3N0cWF4dGlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0MzM5ODUsImV4cCI6MjAxNjAwOTk4NX0.pnzROQdqJ5UOg2Yf7_39pRmuWgJc5AvjWXn2fjQLxmg';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
