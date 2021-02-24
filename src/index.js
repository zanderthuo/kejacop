import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { AuthContext } from "./context/auth";

import App from './App/index';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducer';
// import rootReducer from './store/reducers/rootReducer'
import config from './config';
// import thunk from 'redux-thunk'

// const store = createStore(rootReducer, applyMiddleware(thunk));
const store = createStore(reducer);
const existingTokens = JSON.parse(localStorage.getItem("tokens"))
// const [authTokens, setAuthTokens] = useState(existingTokens);

// const setTokens = (data) => {
//   localStorage.setItem("tokens", JSON.stringify(data));
//   setAuthTokens(data);
// }

const app = (
    <Provider store={store} value={false}>
        <BrowserRouter basename={config.basename}>
            {/* basename="/datta-able" */}
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
