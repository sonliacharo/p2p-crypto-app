import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Notification from './components/Notification';
import ResetPassword from './components/ResetPassword';
import HomePage from './components/HomePage/HomePage';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route exact path="/" component={HomePage}/>
          <Route path="*">
            <h1>404 Not Found</h1>
          </Route>
        </Switch>
        <Notification />
      </Router>
    </AuthProvider>
  );
};

export default App;
