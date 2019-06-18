import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1
        case 'DECREMENT': return state === 0 ? state : state - 1
        default: return state
    }
}

const storeCounter = createStore(counter)

ReactDOM.render(
    <Provider store={ storeCounter }>
        <App />
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();
