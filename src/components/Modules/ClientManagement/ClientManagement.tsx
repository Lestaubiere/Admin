import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch, useLocation } from 'react-router';

import { getBookings } from '../../../store/booking';

import { TopNavigation, TopNavigationLink } from '../../Blocks';
import { Header } from '..';
import Bookings from './Bookings';
import Clients from './Clients';

import { Home } from '../../Icons';

import './ClientManagement.css';

function ClientManagement() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookings());
  }, [dispatch]);

  return (
    <div className="ClientManagement">
      <Header>
        <TopNavigation>
          <TopNavigationLink
            label="Réservations"
            icon={<Home />}
            to="/gestion-clients/reservations"
            count={2}
            hasAlert
          />
          <TopNavigationLink label="Clients" icon={<Home />} to="/gestion-clients/clients" />
        </TopNavigation>
      </Header>
      <div className="ClientManagement__content">
        <Switch location={location}>
          <Redirect exact path="/gestion-clients" to="/gestion-clients/reservations" />
          <Route path="/gestion-clients/reservations" component={Bookings} />
          <Route path="/gestion-clients/clients" component={Clients} />
        </Switch>
      </div>
    </div>
  );
}

export default ClientManagement;
