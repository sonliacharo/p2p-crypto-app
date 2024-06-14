import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
  width: 100%; /* Ocupa toda a largura disponível */
`;

const ListItem = styled.li`
  margin: 10px 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const apiUrl = process.env.REACT_APP_API_URL;

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await axios.get(`${apiUrl}/api/transactions`);
      setTransactions(response.data);
    };

    fetchTransactions();
  }, []);

  const handleAccept = async (transactionId) => {
    await axios.post(`${apiUrl}/api/transactions/accept`, { transactionId });
    setTransactions(transactions.filter(tx => tx._id !== transactionId));
  };

  const handleReject = async (transactionId) => {
    await axios.post(`${apiUrl}/api/transactions/reject`, { transactionId });
    setTransactions(transactions.filter(tx => tx._id !== transactionId));
  };

  return (
    <List>
      {transactions.map(tx => (
        <ListItem key={tx._id}>
          {tx.details}
          <div>
            <Button onClick={() => handleAccept(tx._id)}>Accept</Button>
            <Button onClick={() => handleReject(tx._id)}>Reject</Button>
          </div>
        </ListItem>
      ))}
    </List>
  );
};

export default TransactionList;

