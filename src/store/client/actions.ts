import { Dispatch } from 'redux';

import { ClientFilters, Pagination } from '../../types';
import { LestaubiereApi } from '../../api';
import { ClientActions, getClientsActionType } from './types';

export const getClients = (filters?: ClientFilters, pagination?: Pagination) => async (
  dispatch: Dispatch<getClientsActionType>,
) => {
  dispatch({ type: ClientActions.FETCH_CLIENTS__REQUEST });

  try {
    const data = await LestaubiereApi.getInstance().getClients(filters, pagination);

    dispatch({ type: ClientActions.FETCH_CLIENTS__SUCCESS, payload: data });
  } catch (exception) {
    dispatch({
      type: ClientActions.FETCH_CLIENTS__FAIL,
    });
  }
};
