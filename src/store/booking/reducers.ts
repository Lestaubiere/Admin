import { BookingActions, BookingState, BookingActionTypes } from './types';

const initialState: BookingState = {
  loading: false,
  bookings: [],
};

export function bookingReducer(state = initialState, action: BookingActionTypes): BookingState {
  switch (action.type) {
    case BookingActions.FETCH_BOOKINGS__REQUEST:
      return {
        ...state,
        loading: true,
      };

    case BookingActions.FETCH_BOOKINGS__SUCCESS:
      return {
        ...state,
        loading: false,
        bookings: action.payload,
      };

    case BookingActions.FETCH_BOOKINGS__FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
