const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./src/config/db');
const userRoutes = require('./src/routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use('/socket.io', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://p2p-crypto-app.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  next();
});

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
