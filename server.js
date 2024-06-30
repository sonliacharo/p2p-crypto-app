const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./src/config/db');
const userRoutes = require('./src/routes/userRoutes');
const loginRoute = require('./src/routes/loginRoute')

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type, Authorization',
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api', loginRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
