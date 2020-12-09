import React from 'react';
import { Switch, Route, useLocation } from 'react-router';

import Login from './Login';

import logo from '../../../assets/images/logo.svg';

import './Authentication.css';

function Authentication() {
  const location = useLocation();

  return (
    <div className="Authentication">
      <div className="Authentication__content">
        <img
          className="Authentication__logo"
          src={logo}
          alt="Lestaubiere logo"
          width="250px"
          height="75px"
        />
        <Switch location={location}>
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </div>
  );
}

export default Authentication;
