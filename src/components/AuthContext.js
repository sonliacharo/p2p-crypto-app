import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const history = useHistory();

  const login = async (username, password) => {
    try {
      const response = await axios.post('/api/login', { username, password });
      setUser(response.data);
      history.push('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const register = async (username, password) => {
    try {
      await axios.post('/api/register', { username, password });
      history.push('/login');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
