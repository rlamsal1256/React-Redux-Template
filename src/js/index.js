import 'babel-polyfill';

import React from 'react';
import { render }  from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducers';
import App from './components/App';
import '../../style/styles.scss';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
));

render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('app')
);
