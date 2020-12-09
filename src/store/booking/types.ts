import { Booking } from '../../types';

export enum BookingActions {
  FETCH_BOOKINGS__REQUEST = '@@app/FETCH_BOOKINGS__REQUEST',
  FETCH_BOOKINGS__SUCCESS = '@@app/FETCH_BOOKINGS__SUCCESS',
  FETCH_BOOKINGS__FAIL = '@@app/FETCH_BOOKINGS__FAIL',
}

export type BookingState = {
  loading: boolean;
  bookings: Booking[];
};

type getBookingsRequestActionType = {
  type: BookingActions.FETCH_BOOKINGS__REQUEST;
};

type getBookingsSuccessActionType = {
  type: BookingActions.FETCH_BOOKINGS__SUCCESS;
  payload: Booking[];
};

type getBookingsFailActionType = {
  type: BookingActions.FETCH_BOOKINGS__FAIL;
};

export type getBookingsActionType =
  | getBookingsRequestActionType
  | getBookingsSuccessActionType
  | getBookingsFailActionType;

export type BookingActionTypes = getBookingsActionType;
