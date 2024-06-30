import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from './AuthContext';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import LogoPayChain from '../utils/LogoPayChain';

const FormContainer = styled.div`
  font-family: mono;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff;
  color: #333333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 90%;
  margin: 0 auto;
`;

const Input = styled.input`
  font-size: 1em;
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  background-color: #f9f9f9;
  color: #333333;
`;

const Button = styled.button`
  font-size: 1.2em;
  padding: 15px;
  background-color: #008000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #006400;
  }
`;

const MessageContainerA = styled.div`
  margin-top: 20px;
  text-align: center; 
`;

const MessageContainerB = styled.div`
  margin-top: 5px;
  text-align: center; 
`;

const RegisterLink = styled(Link)`
  margin-top: 10px;
  color: #008000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = styled.footer`
  font-size: 0.8em;
  padding: 20px;
  background-color: #ffffff; /* Fundo preto */
  color: #000000; /* Cor do texto clara */
  text-align: center;
  width: 100%;
`;

const Login = () => {
  const { login } = useContext(AuthContext);
  const [logged, setLogged] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      password: Yup.string().required('Required')
    }),
    onSubmit: async (values) => {
      try {
        await login(values.username, values.password);
        setLogged(true);
      } catch (error) {
        console.error('Erro ao fazer login', error);
      } 
    },
  });

  if (logged) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <FormContainer>
      <LogoPayChain />
      <Form onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          name="username"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.errors.username && formik.touched.username && (
          <div>{formik.errors.username}</div>
        )}
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && formik.touched.password && (
          <div>{formik.errors.password}</div>
        )}
        <Button type="submit">Login</Button>
      </Form>
      <MessageContainerA>
        Não possui uma conta? <RegisterLink to="/register">Cadastre-se</RegisterLink><br />
      </MessageContainerA>
      <MessageContainerB>
        Esqueceu a senha? <RegisterLink to="/reset-password">Recuperar senha</RegisterLink>
      </MessageContainerB>
      <Footer>
        <p>🔒 Seus dados são criptografados</p>
      </Footer>
    </FormContainer>
  );
};

export default Login;
