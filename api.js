const express = require('express');
const { supabase } = require('../config/supabase');
const router = express.Router();

// Endpoint: Fetch saved articles from the database
router.get('/saved-articles', async (req, res) => {
  const { data, error } = await supabase.from('articles').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Endpoint: Save an article to the database
router.post('/save-article', async (req, res) => {
  const { title, url } = req.body;
  const { data, error } = await supabase.from('articles').insert([{ title, url }]);
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

module.exports = router;