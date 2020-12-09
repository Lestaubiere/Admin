import { User } from '../../types';

export enum AppActions {
  LOGIN_USER = '@@app/LOGIN_USER',
  LOGOUT_USER = '@@app/LOGOUT_USER',

  FETCH_CURRENT_USER__REQUEST = '@@app/FETCH_CURRENT_USER__REQUEST',
  FETCH_CURRENT_USER__SUCCESS = '@@app/FETCH_CURRENT_USER__SUCCESS',
  FETCH_CURRENT_USER__FAIL = '@@app/FETCH_CURRENT_USER__FAIL',
}

export type AppState = {
  loading: boolean;
  isAuthenticated: boolean;
  user?: User;
};

type getCurrentUserRequestActionType = {
  type: AppActions.FETCH_CURRENT_USER__REQUEST;
};

type getCurrentUserSuccessActionType = {
  type: AppActions.FETCH_CURRENT_USER__SUCCESS;
  payload: User;
};

type getCurrentUserFailActionType = {
  type: AppActions.FETCH_CURRENT_USER__FAIL;
};

export type loginUserActionType = { type: AppActions.LOGIN_USER; payload: User };

export type logoutUserActionType = { type: AppActions.LOGOUT_USER };

export type getCurrentUserActionType =
  | getCurrentUserRequestActionType
  | getCurrentUserSuccessActionType
  | getCurrentUserFailActionType;

export type AppActionTypes = loginUserActionType | logoutUserActionType | getCurrentUserActionType;
