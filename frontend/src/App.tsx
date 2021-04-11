import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Index from './pages/Index';
import Result from './pages/Result';
import Questions from './pages/Questions';
import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/result' component={Result} />
        <Route path={['/question', '/portfolio:@question_id']} component={Questions} />
      </Switch>
    </>
  );
}

export default App;
