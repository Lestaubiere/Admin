import { NavigationActions, NavigationActionTypes, NavigationState } from './types';

const initialState: NavigationState = {
  breadcrumbs: [],
  title: 'Bienvenue',
};

export function navigationReducer(
  state = initialState,
  action: NavigationActionTypes,
): NavigationState {
  switch (action.type) {
    case NavigationActions.SET_BREADCRUMBS:
      return {
        ...state,
        breadcrumbs: action.payload,
      };

    case NavigationActions.SET_TITLE:
      return {
        ...state,
        title: action.payload,
      };

    default:
      return state;
  }
}
