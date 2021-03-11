import { ClientActions, ClientState, ClientActionTypes } from './types';

const initialState: ClientState = {
  initialLoading: true,
  loading: false,
  clients: [],
  meta: undefined,
};

export function clientReducer(state = initialState, action: ClientActionTypes): ClientState {
  switch (action.type) {
    case ClientActions.FETCH_CLIENTS__REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ClientActions.FETCH_CLIENTS__SUCCESS:
      return {
        ...state,
        initialLoading: false,
        loading: false,
        clients: action.payload.data,
        meta: action.payload.meta,
      };

    case ClientActions.FETCH_CLIENTS__FAIL:
      return {
        ...state,
        initialLoading: false,
        loading: false,
      };

    default:
      return state;
  }
}
