import React from 'react';

import Home from '../components/Home';
import Login from '../components/Login';
import NavBar from '../components/navBar';

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

export default () => (
  <Router history={history}>
    <div>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </div>
  </Router>
);
