import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext, useState } from 'react';
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

const MessageContainer = styled.div`
  font-size: 1em;
  margin-top: 20px;
  text-align: center; 
`;

const LoginLink = styled(Link)`
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

const Register = () => {
  const { register } = useContext(AuthContext);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registered, setRegistered] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      cpf: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Obrigatório'),
      lastName: Yup.string().required('Obrigatório'),
      cpf: Yup.string()
        .required('Obrigatório')
        .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'Formato de CPF inválido (###.###.###-##)'),
      email: Yup.string().email('Email inválido').required('Obrigatório'),
      password: Yup.string().required('Obrigatório').min(6, 'A senha deve ter pelo menos 6 caracteres'),
      passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais')
        .required('Obrigatório')
    }),
    onSubmit: async (values) => {
      try {
        await register(values.firstName, values.lastName, values.cpf, values.email, values.password);
        setRegistrationSuccess(true);
        setRegistered(true);
      } catch (error) {
        console.error('Erro ao registrar usuário', error);
      }
    },
  });

  if (registered) {
    return <Redirect to="/login" />;
  }

  return (
    <FormContainer>
      <LogoPayChain />
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
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && (
          <div>{formik.errors.email}</div>
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
      <Footer>
        <p>🔒 Seus dados são criptografados</p>
      </Footer>
      {registrationSuccess && <p>Usuário cadastrado com sucesso!</p>}
    </FormContainer>
  );
};

export default Register;
