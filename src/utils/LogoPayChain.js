import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoContainer = styled(Link)`
  font-family: mono;
  padding: 20px 20px;
  font-size: 3em;
  font-weight: bold;
  color: #333333;
  text-decoration: none;
`;

const LogoPayChain = () => {
  return <LogoContainer to="/">PayChain</LogoContainer>;
};

export default LogoPayChain;
