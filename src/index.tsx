import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { history } from './store';

import App from './components/App';

import 'sanitize.css/sanitize.css';
import 'sanitize.css/forms.css';

import './styles/colors.css';
import './styles/fonts.css';
import './styles/index.css';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route component={App} />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
