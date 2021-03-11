import { BookingActions, BookingState, BookingActionTypes } from './types';

const initialState: BookingState = {
  initialLoading: true,
  loading: false,
  bookings: [],
  meta: undefined,
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
        initialLoading: false,
        loading: false,
        bookings: action.payload.data,
        meta: action.payload.meta,
      };

    case BookingActions.FETCH_BOOKINGS__FAIL:
      return {
        ...state,
        initialLoading: false,
        loading: false,
      };

    case BookingActions.SET_BOOKING:
      return {
        ...state,
        bookings: state.bookings.map((booking) => {
          if (booking.id === action.payload.id) {
            return action.payload.booking;
          }

          return booking;
        }),
      };

    default:
      return state;
  }
}
