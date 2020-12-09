import { AppActions, AppActionTypes, AppState } from './types';

const initialState: AppState = {
  loading: false,
  isAuthenticated: false,
  user: undefined,
};

export function appReducer(state = initialState, action: AppActionTypes): AppState {
  switch (action.type) {
    case AppActions.LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };

    case AppActions.LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: undefined,
      };

    case AppActions.FETCH_CURRENT_USER__REQUEST:
      return {
        ...state,
        loading: true,
      };

    case AppActions.FETCH_CURRENT_USER__SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case AppActions.FETCH_CURRENT_USER__FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: undefined,
      };

    default:
      return state;
  }
}
