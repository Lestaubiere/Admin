import { Dispatch } from 'redux';

import { LestaubiereApi } from '../../api';
import { StatisticsActions, getStatisticsActionType } from './types';

export const getStatistics = () => async (dispatch: Dispatch<getStatisticsActionType>) => {
  dispatch({ type: StatisticsActions.FETCH_STATISTICS__REQUEST });

  try {
    const data = await LestaubiereApi.getInstance().getStatistics();

    dispatch({ type: StatisticsActions.FETCH_STATISTICS__SUCCESS, payload: data });
  } catch (exception) {
    dispatch({
      type: StatisticsActions.FETCH_STATISTICS__FAIL,
    });
  }
};
