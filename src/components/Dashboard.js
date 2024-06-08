import React from 'react';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
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
