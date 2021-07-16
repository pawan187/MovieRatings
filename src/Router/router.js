import React, { useState } from 'react';

import Home from '../components/Home';
import Login from '../components/Login';
import NavBar from '../components/navBar';
import Register from '../components/Register';
import Error from '../components/Error';
import MovieDetail from '../components/MovieDetail';
import ReactDOM from 'react-dom';
import {
  Router,
  BrowserRouter,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';

import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export default () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <NavBar />
          <Route path="/" component={Home} exact={true} />
          <Route path="/login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
};
