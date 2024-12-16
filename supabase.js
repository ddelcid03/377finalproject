const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://your-supabase-url.supabase.co';
const SUPABASE_KEY = 'your-anon-key';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

module.exports = { supabase };