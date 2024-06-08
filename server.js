// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

let users = [];
let transactions = [];

// Register route
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  users.push({ username, password });
  res.status(200).send('User registered');
});

// Login route
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// Get transactions
app.get('/api/transactions', (req, res) => {
  res.status(200).json(transactions);
});

// Create transaction
app.post('/api/transactions', (req, res) => {
  const { to, details, amount } = req.body;
  const transaction = { _id: Date.now().toString(), to, details, amount, status: 'pending' };
  transactions.push(transaction);
  res.status(201).json(transaction);
});

// Accept transaction
app.post('/api/transactions/accept', (req, res) => {
  const { transactionId } = req.body;
  transactions = transactions.map(tx =>
    tx._id === transactionId ? { ...tx, status: 'accepted' } : tx
  );
  res.status(200).send('Transaction accepted');
});

// Reject transaction
app.post('/api/transactions/reject', (req, res) => {
  const { transactionId } = req.body;
  transactions = transactions.map(tx =>
    tx._id === transactionId ? { ...tx, status: 'rejected' } : tx
  );
  res.status(200).send('Transaction rejected');
});

app.get('/dashboard', (req, res) => {
  res.send('Dashboard route is working');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
