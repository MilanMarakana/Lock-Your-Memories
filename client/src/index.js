import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //Provider give access to use store anywhere in app
import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import reducers from './Memories_Store/reducers';

//setup a store
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root')
);