import { Booking, Meta } from '../../types';

export enum BookingActions {
  FETCH_BOOKINGS__REQUEST = '@@booking/FETCH_BOOKINGS__REQUEST',
  FETCH_BOOKINGS__SUCCESS = '@@booking/FETCH_BOOKINGS__SUCCESS',
  FETCH_BOOKINGS__FAIL = '@@booking/FETCH_BOOKINGS__FAIL',

  SET_BOOKING = '@@booking/SET_BOOKING',
}

export type BookingState = {
  initialLoading: boolean;
  loading: boolean;
  bookings: Booking[];
  meta?: Meta;
};

type getBookingsRequestActionType = {
  type: BookingActions.FETCH_BOOKINGS__REQUEST;
};

type getBookingsSuccessActionType = {
  type: BookingActions.FETCH_BOOKINGS__SUCCESS;
  payload: { data: Booking[]; meta: Meta };
};

type getBookingsFailActionType = {
  type: BookingActions.FETCH_BOOKINGS__FAIL;
};

export type getBookingsActionType =
  | getBookingsRequestActionType
  | getBookingsSuccessActionType
  | getBookingsFailActionType;

export type setBookingActionType = {
  type: BookingActions.SET_BOOKING;
  payload: { id: string | number; booking: Booking };
};

export type BookingActionTypes = getBookingsActionType | setBookingActionType;
