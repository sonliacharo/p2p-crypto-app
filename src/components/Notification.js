import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import styled from 'styled-components';

const NotificationContainer = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const socket = io('http://localhost:3000');
    socket.on('new_transaction', (transaction) => {
      setNotifications((prev) => [...prev, transaction]);
    });
  }, []);

  return (
    <NotificationContainer>
      {notifications.map((notification, index) => (
        <div key={index}>
          New transaction: {notification.details}
        </div>
      ))}
    </NotificationContainer>
  );
};

export default Notification;
