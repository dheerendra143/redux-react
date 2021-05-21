import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import Form from "./Form";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/form' component={Form} />
                <Route path='/' component={App} />
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));
