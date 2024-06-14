import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const apiUrl = process.env.REACT_APP_API_URL;

const TransactionForm = () => {
  const formik = useFormik({
    initialValues: { to: '', details: '', amount: '' },
    validationSchema: Yup.object({
      to: Yup.string().required('Required'),
      details: Yup.string().required('Required'),
      amount: Yup.number().required('Required'),
    }),
    onSubmit: async (values) => {
      await axios.post(`${apiUrl}/api/transactions`, values);
      formik.resetForm();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        type="text"
        name="to"
        placeholder="Endereço de destino"
        onChange={formik.handleChange}
        value={formik.values.to}
      />
      <Input
        type="text"
        name="details"
        placeholder="Detalhes da transação"
        onChange={formik.handleChange}
        value={formik.values.details}
      />
      <Input
        type="number"
        name="amount"
        placeholder="Valor em BRL"
        onChange={formik.handleChange}
        value={formik.values.amount}
      />
      <Button type="submit">Criar transação</Button>
    </Form>
  );
};

export default TransactionForm;
