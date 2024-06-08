import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  margin-left: 10px;
`;

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await axios.get('/api/transactions');
      setTransactions(response.data);
    };

    fetchTransactions();
  }, []);

  const handleAccept = async (transactionId) => {
    await axios.post(`/api/transactions/accept`, { transactionId });
    setTransactions(transactions.filter(tx => tx._id !== transactionId));
  };

  const handleReject = async (transactionId) => {
    await axios.post(`/api/transactions/reject`, { transactionId });
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
