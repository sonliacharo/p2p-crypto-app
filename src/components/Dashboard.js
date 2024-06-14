import React from 'react';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  min-height: 100vh;
`;

const Dashboard = () => {
  return (
    <Container>
      <h1>Dashboard</h1>
      <TransactionForm />
      <TransactionList />
    </Container>
  );
};

export default Dashboard;
