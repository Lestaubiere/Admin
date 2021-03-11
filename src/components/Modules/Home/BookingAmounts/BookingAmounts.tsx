import { useSelector } from 'react-redux';

import { State } from '../../../../store';

import './BookingAmounts.css';

export function BookingAmounts() {
  const { newBookings, bookingsPreviousSeason, bookingsNextSeason, bookingsThisYear } = useSelector(
    (state: State) => ({
      newBookings: state.statisticsState.newBookings,
      bookingsPreviousSeason: state.statisticsState.bookingsPreviousSeason,
      bookingsNextSeason: state.statisticsState.bookingsNextSeason,
      bookingsThisYear: state.statisticsState.bookingsThisYear,
    }),
  );

  return (
    <div className="Home-BookingAmounts">
      <div className="Home-BookingAmounts__row">
        <div className="Home-BookingAmounts__item">
          <div className="Home-BookingAmounts__amount">{newBookings}</div>
          <div className="Home-BookingAmounts__text">Nouvelles réservations</div>
        </div>
        <div className="Home-BookingAmounts__item">
          <div className="Home-BookingAmounts__amount">{bookingsThisYear}</div>
          <div className="Home-BookingAmounts__text">Réservations cette année</div>
        </div>
      </div>
      <div className="Home-BookingAmounts__row">
        <div className="Home-BookingAmounts__item">
          <div className="Home-BookingAmounts__amount">{bookingsPreviousSeason}</div>
          <div className="Home-BookingAmounts__text">Réservations saison 2020</div>
        </div>
        <div className="Home-BookingAmounts__item">
          <div className="Home-BookingAmounts__amount">{bookingsNextSeason}</div>
          <div className="Home-BookingAmounts__text">Réservations saison 2021</div>
        </div>
      </div>
    </div>
  );
}
