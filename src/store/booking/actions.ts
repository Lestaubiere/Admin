import { Dispatch } from 'redux';

import { LestaubiereApi } from '../../api';
import { BookingActions, getBookingsActionType } from './types';

export const getBookings = () => async (dispatch: Dispatch<getBookingsActionType>) => {
  dispatch({ type: BookingActions.FETCH_BOOKINGS__REQUEST });

  try {
    const data = await LestaubiereApi.getInstance().getBookings();

    dispatch({ type: BookingActions.FETCH_BOOKINGS__SUCCESS, payload: data });
  } catch (exception) {
    dispatch({
      type: BookingActions.FETCH_BOOKINGS__FAIL,
    });
  }
};
