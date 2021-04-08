import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

import Result from './pages/Result';

function App() {
  return (
    <>
      <Switch>
        <Route path="/result" component={Result} />
      </Switch>
    </>
  );
}

export default App;