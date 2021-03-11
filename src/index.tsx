import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { ToastContainer } from 'react-toastify';

import configureStore, { history } from './store';

import App from './components/App';

import 'sanitize.css/sanitize.css';
import 'sanitize.css/forms.css';
import 'react-toastify/dist/ReactToastify.css';

import './styles/colors.css';
import './styles/fonts.css';
import './styles/index.css';

import './styles/plugins/toastify.css';

const store = configureStore();

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer hideProgressBar closeOnClick />
      <ConnectedRouter history={history}>
        <Route component={App} />
      </ConnectedRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
