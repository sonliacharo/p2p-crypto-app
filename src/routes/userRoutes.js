const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const { firstName, lastName, cpf, username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username já está em uso' });
    }

    const newUser = new User({
      firstName,
      lastName,
      cpf,
      username,
      password,
    });

    await newUser.save();

    res.status(201).json({
      message: 'Usuário registrado com sucesso',
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar usuário', error });
  }
});

module.exports = router;

