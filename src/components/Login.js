import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from './AuthContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f7f7;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const RegisterLink = styled(Link)`
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  const { login } = React.useContext(AuthContext);

  const formik = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      login(values.username, values.password);
    },
  });

  return (
    <FormContainer>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          name="username"
          placeholder="Nome de usuário"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Button type="submit">Login</Button>
      </Form>
      <RegisterLink to="/register">Não possui uma conta? Cadastre-se</RegisterLink>
    </FormContainer>
  );
};

export default Login;

