import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import classNames from 'classnames';

import { State } from '../../../../../store';

import { Booking, Header, Loading } from '.';

import './List.css';

export function List() {
  const { id } = useParams<{ id?: string }>();

  const { initialLoading, loading, bookings } = useSelector((state: State) => ({
    initialLoading: state.bookingState.initialLoading,
    loading: state.bookingState.loading,
    bookings: state.bookingState.bookings,
  }));

  function renderContent() {
    if (bookings.length > 0) {
      return bookings.map((booking) => (
        <Booking key={booking.id} booking={booking} isVisible={booking.id.toString() === id} />
      ));
    }

    return (
      <div className="CM-BookingsList__empty">Aucune réservation correspond à la recherche.</div>
    );
  }

  if (initialLoading) {
    return <Loading />;
  }

  const classes = classNames('CM-BookingsList', {
    'CM-BookingsList--loading': loading,
  });

  return (
    <div className={classes}>
      <Header />
      <div className="CM-BookingsList__content">{renderContent()}</div>
    </div>
  );
}
