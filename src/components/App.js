import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import NotFounded from './NotFound';
import About from './About';
import UserDetails from './UserDetails';
import Alert from './Alert';
import GithubState from '../context/github/githubState';
import AlertState from '../context/alert/alertState';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar title="Github Finder" icon="fab fa-github" />
          <Alert />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/user/:login" component={UserDetails} />
            <Route component={NotFounded} />
          </Switch>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};

export default App;
