import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import LogoPayChain from '../utils/LogoPayChain';

const DashboardContainer = styled.div`
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
  font-family: mono;
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
  font-family: mono;
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

const Footer = styled.footer`
  font-size: 0.8em;
  padding: 20px;
  background-color: #ffffff;
  color: #000000;
  text-align: center;
  width: 100%;
`;

const Dashboard = () => {
  const [formattedAmount, setFormattedAmount] = useState('R$ 0,00');

  const formik = useFormik({
    initialValues: {
      transaction: '',
      amount: ''
    },
    validationSchema: Yup.object({
      transaction: Yup.string().required('Required'),
      amount: Yup.number()
        .typeError('Deve ser um valor numérico')
        .positive('Deve ser um valor positivo')
        .required('Required')
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const formatCurrency = (value) => {
    const cleanedValue = value.replace(/[^\d]/g, '');

    const amount = parseInt(cleanedValue, 10) / 100;

    const formatted = amount.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return formatted;
  };

  const handleAmountChange = (e) => {
    let value = e.target.value;

    const formatted = formatCurrency(value);

    setFormattedAmount(formatted);

    formik.setFieldValue('amount', value);
  };

  return (
    <DashboardContainer>
      <LogoPayChain />
      <Form onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          name="transaction"
          placeholder="Digite a Chave Pix"
          onChange={formik.handleChange}
          value={formik.values.transaction}
        />
        {formik.errors.transaction && formik.touched.transaction && (
          <div>{formik.errors.transaction}</div>
        )}
        <Input
          type="text"
          name="amount"
          placeholder="R$ 0,00"
          onChange={handleAmountChange}
          value={formattedAmount}
        />
        {formik.errors.amount && formik.touched.amount && (
          <div>{formik.errors.amount}</div>
        )}
        <Button type="submit">Transferir</Button>
      </Form>
      <Footer>
        <p>🔒 Seus dados são criptografados</p>
      </Footer>
    </DashboardContainer>
  );
};

export default Dashboard;
