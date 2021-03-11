import { useCallback, useEffect, useState } from 'react';
import { LestaubiereApi } from '../../../../../../../api';
import { Booking as IBooking, Client } from '../../../../../../../types';
import { Header, Booking } from '../../../../Bookings';

import './Details.css';

interface Props {
  client: Client;
  isVisible?: boolean;
}

export function Details(props: Props) {
  const [bookings, setBookings] = useState<IBooking[] | undefined>(undefined);

  const getClient = useCallback(async () => {
    try {
      const client = await LestaubiereApi.getInstance().getClient(props.client.id);

      setBookings(client.bookings);
    } catch {}
  }, [props.client.id]);

  useEffect(() => {
    if (props.isVisible && !bookings) {
      getClient();
    }
  }, [props.isVisible, bookings, getClient]);

  return (
    <div className="CM-ClientDetails">
      <div className="CM-ClientDetails__row">
        <div className="CM-ClientDetails__field">
          <div className="CM-ClientDetails__label">Adresse</div>
          <div className="CM-ClientDetails__value">{props.client.address}</div>
        </div>
        <div className="CM-ClientDetails__field">
          <div className="CM-ClientDetails__label">Code postal</div>
          <div className="CM-ClientDetails__value">{props.client.zipCode}</div>
        </div>
        <div className="CM-ClientDetails__field">
          <div className="CM-ClientDetails__label">Ville</div>
          <div className="CM-ClientDetails__value">{props.client.city}</div>
        </div>
        <div className="CM-ClientDetails__field">
          <div className="CM-ClientDetails__label">Pays</div>
          <div className="CM-ClientDetails__value">{props.client.country}</div>
        </div>
      </div>
      {bookings && bookings.length > 0 && (
        <div className="CM-ClientDetails__bookings">
          <div className="CM-ClientDetails__label">Réservations</div>
          <div className="CM-ClientDetails__list">
            <Header />
            {bookings.map((booking) => (
              <Booking key={booking.id} booking={booking} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
