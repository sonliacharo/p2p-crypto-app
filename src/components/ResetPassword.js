import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoPayChain from '../utils/LogoPayChain';

const FormContainer = styled.div`
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
  padding: 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
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

const ResetPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required')
    }),
    onSubmit: (values) => {
      // Handle password reset logic
      console.log(values);
    },
  });

  return (
    <FormContainer>
      <LogoPayChain />
      <Form onSubmit={formik.handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && (
          <div>{formik.errors.email}</div>
        )}
        <Button type="submit">Resetar Senha</Button>
      </Form>
      <MessageContainer>
        Lembrou sua senha? <LoginLink to="/login">Faça login</LoginLink>
      </MessageContainer>
    </FormContainer>
  );
};

export default ResetPassword;
