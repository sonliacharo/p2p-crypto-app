import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import App from './App';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
