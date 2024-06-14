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
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  max-width: 100%; 
  margin: 0 auto;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
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

const MessageContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const StyledLink = styled(Link)`
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
      <MessageContainer>
        Esqueceu sua senha? <StyledLink to="/reset-password">Redefinir senha</StyledLink>
      </MessageContainer>
    </FormContainer>
  );
};

export default Login;

