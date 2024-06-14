import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
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

const ResetPasswordSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  newPassword: Yup.string().required('Required').min(6, 'Password must be at least 6 characters'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Required')
});

const ResetPassword = () => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      username: '',
      newPassword: '',
      passwordConfirmation: ''
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: async (values) => {
      try {
        await axios.post('/api/update-password', {
          username: values.username,
          newPassword: values.newPassword
        });
        alert('Password updated successfully');
        history.push('/login');
      } catch (error) {
        console.error('Error updating password:', error);
        alert('Failed to update password');
      }
    }
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
        {formik.errors.username && formik.touched.username && (
          <div>{formik.errors.username}</div>
        )}
        <Input
          type="password"
          name="newPassword"
          placeholder="Nova senha"
          onChange={formik.handleChange}
          value={formik.values.newPassword}
        />
        {formik.errors.newPassword && formik.touched.newPassword && (
          <div>{formik.errors.newPassword}</div>
        )}
        <Input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirmar nova senha"
          onChange={formik.handleChange}
          value={formik.values.passwordConfirmation}
        />
        {formik.errors.passwordConfirmation && formik.touched.passwordConfirmation && (
          <div>{formik.errors.passwordConfirmation}</div>
        )}
        <Button type="submit">Redefinir Senha</Button>
      </Form>
      <MessageContainer>
        Lembrou sua senha? <LoginLink to="/login">Faça login</LoginLink>
      </MessageContainer>
    </FormContainer>
  );
};

export default ResetPassword;
