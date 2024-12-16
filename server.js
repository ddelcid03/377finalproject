const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const app = express();

app.use(cors());
app.use(express.json());

// Use API Routes
app.use('/api', apiRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
