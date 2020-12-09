import { createStore, applyMiddleware, compose, combineReducers, Store } from 'redux';
import { routerMiddleware, connectRouter, RouterState, RouterAction } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

import { AppState, appReducer, AppActionTypes } from './app';
import { BookingState, bookingReducer, BookingActionTypes } from './booking';

export type State = {
  router: RouterState;
  appState: AppState;
  bookingState: BookingState;
};

export type Action = RouterAction | AppActionTypes | BookingActionTypes;

export const history = createBrowserHistory();

export default function configureStore(): Store<State, Action> {
  const middlewares = [thunk, routerMiddleware(history)];

  const rootReducer = combineReducers<State>({
    router: connectRouter(history),
    appState: appReducer,
    bookingState: bookingReducer,
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
