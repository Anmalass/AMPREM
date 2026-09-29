const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Integrasi API Routes
const apiRoutes = require('./app/api');
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server ANMA Reverse berjalan di http://localhost:${PORT}`);
});