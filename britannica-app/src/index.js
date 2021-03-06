import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import reducer from './store/reducer';
import {createStore, compose} from 'redux';
import {loadState, saveState} from './store/localStorage'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();

const store = createStore(
    reducer,
    persistedState,
    composeEnhancers()
);

store.subscribe(() => {
    saveState(store.getState());
})

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>  
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
