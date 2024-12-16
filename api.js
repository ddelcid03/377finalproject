const express = require('express');
const { supabase } = require('../config/supabase');
const router = express.Router();

router.get('/saved-articles', async (req, res) => {
  const { data, error } = await supabase.from('articles').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data); 
});


router.post('/save-article', async (req, res) => {
  const { title, url, description } = req.body; 
  const { data, error } = await supabase.from('Articles').insert([{ title, url, description }]);
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

module.exports = router;

