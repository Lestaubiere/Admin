import { CallHistoryMethodAction, push } from 'connected-react-router';
import { Dispatch } from 'redux';

import { LestaubiereApi } from '../../api';
import { User } from '../../types';
import {
  AppActions,
  getCurrentUserActionType,
  loginUserActionType,
  logoutUserActionType,
} from './types';

export const loginUser = (user: User): loginUserActionType => ({
  type: AppActions.LOGIN_USER,
  payload: user,
});

export const logoutUser = (user: User): logoutUserActionType => ({
  type: AppActions.LOGOUT_USER,
});

export const getCurrentUser = () => async (
  dispatch: Dispatch<getCurrentUserActionType | CallHistoryMethodAction>,
) => {
  dispatch({ type: AppActions.FETCH_CURRENT_USER__REQUEST });

  try {
    const data = await LestaubiereApi.getInstance().getCurrentUser();

    dispatch({ type: AppActions.FETCH_CURRENT_USER__SUCCESS, payload: data });
  } catch (exception) {
    dispatch({
      type: AppActions.FETCH_CURRENT_USER__FAIL,
    });

    dispatch(push('/'));
  }
};
