import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosInstance from '../AxiosConfig';

const AuthContext = createContext();
const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000'

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const history = useHistory();

  const register = async (firstName, lastName, cpf, email, password) => {
    try {
      const response = await axiosInstance.post(`${apiUrl}/api/users/register`, { firstName, lastName, cpf, email, password });
      console.log('Usuário cadastrado com sucesso:', response.data);
      history.push('/login');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axiosInstance.post(`${apiUrl}/api/login`, { email, password });
      setUser(response.data);
      history.push('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
