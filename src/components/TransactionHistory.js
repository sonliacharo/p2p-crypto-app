// src/components/TransactionHistory.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #f4f4f4;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('/api/transactions');
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };
    fetchTransactions();
  }, []);

  return (
    <Container>
      <h2>Transaction History</h2>
      <Table>
        <thead>
          <tr>
            <Th>Date</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <Td>{transaction.date}</Td>
              <Td>{transaction.amount}</Td>
              <Td>{transaction.status}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TransactionHistory;
