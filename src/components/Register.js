// src/components/Register.js
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

const LoginLink = styled(Link)`
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Register = () => {
  const { register } = React.useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      cpf: '',
      username: '',
      password: '',
      passwordConfirmation: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      cpf: Yup.string()
        .required('Required')
        .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'Invalid CPF format (###.###.###-##)'),
      username: Yup.string().required('Required'),
      password: Yup.string().required('Required').min(6, 'Password must be at least 6 characters'),
      passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required')
    }),
    onSubmit: (values) => {
      register(values.firstName, values.lastName, values.cpf, values.username, values.password, values.passwordConfirmation)
    },
  });

  return (
    <FormContainer>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          name="firstName"
          placeholder="Nome"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.errors.firstName && formik.touched.firstName && (
          <div>{formik.errors.firstName}</div>
        )}
        <Input
          type="text"
          name="lastName"
          placeholder="Sobrenome"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.errors.lastName && formik.touched.lastName && (
          <div>{formik.errors.lastName}</div>
        )}
        <Input
          type="text"
          name="cpf"
          placeholder="CPF (###.###.###-##)"
          onChange={formik.handleChange}
          value={formik.values.cpf}
        />
        {formik.errors.cpf && formik.touched.cpf && (
          <div>{formik.errors.cpf}</div>
        )}
        <Input
          type="text"
          name="username"
          placeholder="Nome de usuário"
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
        <Input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirmar senha"
          onChange={formik.handleChange}
          value={formik.values.passwordConfirmation}
        />
        {formik.errors.passwordConfirmation && formik.touched.passwordConfirmation && (
          <div>{formik.errors.passwordConfirmation}</div>
        )}
        <Button type="submit">Cadastrar</Button>
      </Form>
      <MessageContainer>
        Já possui uma conta? <LoginLink to="/login">Faça login</LoginLink>
      </MessageContainer>
    </FormContainer>
  );
};

export default Register;

