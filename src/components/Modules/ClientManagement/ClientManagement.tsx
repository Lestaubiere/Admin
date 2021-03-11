import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch, useLocation } from 'react-router';

import { Statuses } from '../../../types';
import { State } from '../../../store';

import { TopNavigation, TopNavigationLink } from '../../Blocks';
import { Header } from '..';
import { Bookings } from './Bookings';
import Clients from './Clients';

import { Home } from '../../Icons';

import './ClientManagement.css';

function ClientManagement() {
  const { newBookings } = useSelector((state: State) => ({
    newBookings: state.statisticsState.newBookings,
  }));

  const location = useLocation();

  return (
    <div className="ClientManagement">
      <Header>
        <TopNavigation>
          <TopNavigationLink
            label="Réservations"
            icon={<Home />}
            to="/gestion-clients/reservations"
            count={newBookings}
            hasAlert={newBookings > 0}
          />
          <TopNavigationLink label="Clients" icon={<Home />} to="/gestion-clients/clients" />
        </TopNavigation>
      </Header>
      <div className="ClientManagement__content">
        <Switch location={location}>
          <Redirect exact path="/gestion-clients" to="/gestion-clients/reservations" />
          <Route exact path="/gestion-clients/reservations" component={Bookings} />
          <Route path="/gestion-clients/reservations/:id" component={Bookings} />
          <Route exact path="/gestion-clients/clients" component={Clients} />
          <Route path="/gestion-clients/clients/:id" component={Clients} />
        </Switch>
      </div>
    </div>
  );
}

export default ClientManagement;
