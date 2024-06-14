// src/components/Dashboard.js
import React from 'react';
import TransactionList from './TransactionList';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TransactionForm from './TransactionForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const MessageContainer = styled.div`
  text-align: center; 
`;

const RegisterLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Dashboard = () => {
  return (
    <Container>
      <h1>Nova Transação</h1>
        <TransactionForm/>
        <TransactionList />
        <MessageContainer>
          Não tem uma conta? <RegisterLink to="/register">Criar conta</RegisterLink>
        </MessageContainer>
    </Container>
  );
};

export default Dashboard;
