// src/components/Profile.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
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

const Profile = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters'),
    }),
    onSubmit: (values) => {
      // Handle profile update logic here
      console.log(values);
    },
  });

  return (
    <Container>
      <h2>Profile</h2>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.errors.firstName && <div>{formik.errors.firstName}</div>}
        <Input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.errors.lastName && <div>{formik.errors.lastName}</div>}
        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && <div>{formik.errors.email}</div>}
        <Input
          type="password"
          name="password"
          placeholder="New Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && <div>{formik.errors.password}</div>}
        <Button type="submit">Update Profile</Button>
      </Form>
    </Container>
  );
};

export default Profile;
