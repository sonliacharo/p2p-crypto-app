import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
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

const TransactionForm = () => {
  const formik = useFormik({
    initialValues: { to: '', details: '', amount: '' },
    validationSchema: Yup.object({
      to: Yup.string().required('Required'),
      details: Yup.string().required('Required'),
      amount: Yup.number().required('Required'),
    }),
    onSubmit: async (values) => {
      await axios.post('/api/transactions', values);
      formik.resetForm();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        type="text"
        name="to"
        placeholder="Recipient Address"
        onChange={formik.handleChange}
        value={formik.values.to}
      />
      <Input
        type="text"
        name="details"
        placeholder="Transaction Details"
        onChange={formik.handleChange}
        value={formik.values.details}
      />
      <Input
        type="number"
        name="amount"
        placeholder="Amount"
        onChange={formik.handleChange}
        value={formik.values.amount}
      />
      <Button type="submit">Create Transaction</Button>
    </Form>
  );
};

export default TransactionForm;
