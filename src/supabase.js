import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://mjjaxbeyzxaruzimvxgf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qamF4YmV5enhhcnV6aW12eGdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MTk1MTgsImV4cCI6MjA2Mjk5NTUxOH0.6DhUpbVudGwAHGJWnm2rcCEZ3WLTHIucexwFf_HSXks';
export const supabase = createClient(supabaseUrl, supabaseKey);