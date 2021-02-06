import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //Provider give access to use store anywhere in app
import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './index.module.css';

import App from './App';
import reducers from './Memories_Store/reducers';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

//setup a store
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root')
);