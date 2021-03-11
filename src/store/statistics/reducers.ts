import { StatisticsActions, StatisticsActionTypes, StatisticsState } from './types';

const initialState: StatisticsState = {
  loading: false,
  newBookings: 0,
  bookingsPreviousSeason: 0,
  bookingsNextSeason: 0,
  bookingsThisYear: 0,
  bookingsByMonth: [],
};

export function statisticsReducer(
  state = initialState,
  action: StatisticsActionTypes,
): StatisticsState {
  switch (action.type) {
    case StatisticsActions.FETCH_STATISTICS__REQUEST:
      return {
        ...state,
        loading: true,
      };

    case StatisticsActions.FETCH_STATISTICS__SUCCESS:
      return {
        ...state,
        loading: false,
        newBookings: action.payload.newBookings,
        bookingsPreviousSeason: action.payload.bookingsPreviousSeason,
        bookingsNextSeason: action.payload.bookingsNextSeason,
        bookingsThisYear: action.payload.bookingsThisYear,
        bookingsByMonth: action.payload.bookingsByMonth,
      };

    case StatisticsActions.FETCH_STATISTICS__FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
