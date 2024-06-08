import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from './AuthContext';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
`;

const Button = styled.button`
  margin-top: 10px;
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
    <Form onSubmit={formik.handleSubmit}>
      <Input
        type="text"
        name="username"
        placeholder="Username"
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default Login;
