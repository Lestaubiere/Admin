import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router';

import { Booking } from '../../../types';
import { LestaubiereApi } from '../../../api';
import { getStatistics } from '../../../store/statistics';
import { notifyBooking, setBooking } from '../../../store/booking';

import { Home, ClientManagement } from '..';
import PrimaryNavigation from './PrimaryNavigation';

import './Dashboard.css';

function Dashboard() {
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    LestaubiereApi.getSocket().on('booking:new', (booking: Booking) => {
      dispatch(notifyBooking(booking));
    });

    return () => {
      LestaubiereApi.getSocket().off('booking:new');
    };
  }, [dispatch]);

  useEffect(() => {
    LestaubiereApi.getSocket().on('booking:update', (booking: Booking) => {
      dispatch(setBooking(booking.id, booking));
    });

    return () => {
      LestaubiereApi.getSocket().off('booking:update');
    };
  }, [dispatch]);

  useEffect(() => {
    LestaubiereApi.getSocket().on('statistics:update', () => {
      dispatch(getStatistics());
    });

    return () => {
      LestaubiereApi.getSocket().off('statistics:update');
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getStatistics());
  }, [dispatch]);

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
