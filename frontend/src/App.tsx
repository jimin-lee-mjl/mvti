import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

import Index from './pages/Index';

function App() {
  return (
    <>
      <Route exact path="/index" component={Index} />
    </>
  );
}

export default App;