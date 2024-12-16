const { supabase } = require('../supabase');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { title, url } = req.body;

    if (!title || !url) {
      return res.status(400).json({ error: 'Title and URL are required' });
    }

    const { data, error } = await supabase
      .from('articles')  
      .insert([{ title, url }]);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(201).json(data);  
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
};
