import 'babel-polyfill';

import React from 'react';
import { render }  from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducers';
import App from './components/App';
import '../../style/styles.scss';

const middleware = applyMiddleware(thunk);

const store = createStore(
    rootReducer,
    compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('app')
);
