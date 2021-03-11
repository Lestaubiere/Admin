import { createStore, applyMiddleware, compose, combineReducers, Store } from 'redux';
import { routerMiddleware, connectRouter, RouterState, RouterAction } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

import { AppState, appReducer, AppActionTypes } from './app';
import { StatisticsState, statisticsReducer, StatisticsActionTypes } from './statistics';
import { BookingState, bookingReducer, BookingActionTypes } from './booking';
import { ClientState, clientReducer, ClientActionTypes } from './client';
import { NavigationState, navigationReducer, NavigationActionTypes } from './navigation';

export type State = {
  router: RouterState;
  appState: AppState;
  statisticsState: StatisticsState;
  bookingState: BookingState;
  clientState: ClientState;
  navigationState: NavigationState;
};

export type Action =
  | RouterAction
  | AppActionTypes
  | StatisticsActionTypes
  | BookingActionTypes
  | ClientActionTypes
  | NavigationActionTypes;

export const history = createBrowserHistory();

export default function configureStore(): Store<State, Action> {
  const middlewares = [thunk, routerMiddleware(history)];

  const rootReducer = combineReducers<State>({
    router: connectRouter(history),
    appState: appReducer,
    statisticsState: statisticsReducer,
    bookingState: bookingReducer,
    clientState: clientReducer,
    navigationState: navigationReducer,
  });

  const enhancers: any[] = [];

  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  return createStore(
    rootReducer,
    undefined,
    compose(applyMiddleware(...middlewares), ...enhancers),
  );
}
