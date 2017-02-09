import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './container/App';

const loggerMiddleware = createLogger();
const middleware = [thunkMiddleware, loggerMiddleware];

const createStoreWithMiddleWare = applyMiddleware(...middleware)(createStore);

const store = createStoreWithMiddleWare(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
