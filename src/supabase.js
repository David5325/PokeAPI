import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gidueaiilxufxthtzabx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpZHVlYWlpbHh1Znh0aHR6YWJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1Njk0MDYsImV4cCI6MjA2NDE0NTQwNn0.nS_2_cI0agveKqQYBAbj5VMtS-gXrESoSC4tTvdb0no';

export const supabase = createClient(supabaseUrl, supabaseKey);
