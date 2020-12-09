import React from 'react';
import { Route, Switch, useLocation } from 'react-router';

import { Home, ClientManagement } from '..';
import PrimaryNavigation from './PrimaryNavigation';

import './Dashboard.css';

function Dashboard() {
  const location = useLocation();

  return (
    <div className="Dashboard">
      <PrimaryNavigation />
      <div className="Dashboard__content">
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route path="/gestion-clients" component={ClientManagement} />
        </Switch>
      </div>
    </div>
  );
}

export default Dashboard;
