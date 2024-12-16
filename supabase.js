const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://knujfdbbotdwjlfnkqwn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtudWpmZGJib3Rkd2psZm5rcXduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQyOTEyNTYsImV4cCI6MjA0OTg2NzI1Nn0.D1er46F35cVz2_T6gZFrXoX2ouDTlrbKJy9xjdU56CA';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

module.exports = { supabase };