const express = require('express');
const cors = require('cors');
const apiRoutes = require('./api');
const app = express();

app.use(cors());
app.use(express.json());

// Use API Routes
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;  // Use the environment's PORT or 3000 as a fallback
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
