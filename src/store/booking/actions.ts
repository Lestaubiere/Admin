import { Dispatch } from 'redux';
import { toast } from 'react-toastify';

import { Booking, BookingFilters, Pagination } from '../../types';
import { LestaubiereApi } from '../../api';
import { BookingActions, getBookingsActionType, setBookingActionType } from './types';
import { push, RouterAction } from 'connected-react-router';

export const getBookings = (filters?: BookingFilters, pagination?: Pagination) => async (
  dispatch: Dispatch<getBookingsActionType>,
) => {
  dispatch({ type: BookingActions.FETCH_BOOKINGS__REQUEST });

  try {
    const data = await LestaubiereApi.getInstance().getBookings(filters, pagination);

    dispatch({ type: BookingActions.FETCH_BOOKINGS__SUCCESS, payload: data });
  } catch (exception) {
    dispatch({
      type: BookingActions.FETCH_BOOKINGS__FAIL,
    });
  }
};

export const notifyBooking = (booking: Booking) => async (dispatch: Dispatch<RouterAction>) => {
  toast.info("Une nouvelle réservation a été reçue. Cliquez ici pour l'afficher", {
    toastId: booking.id,
    onClick: () => {
      dispatch(push(`/gestion-clients/reservations/${booking.id}`));
    },
  });
};

export const setBooking = (id: number | string, booking: Booking): setBookingActionType => ({
  type: BookingActions.SET_BOOKING,
  payload: { id, booking },
});
