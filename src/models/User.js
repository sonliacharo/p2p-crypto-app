const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
    match: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [isEmail, 'Invalid email address'],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

userSchema.pre('save', async function(next) {
  const user = this;
  if (!user.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

const User = mongoose.model('User', userSchema);

module.exports = User;

