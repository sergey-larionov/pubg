import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {BrowserRouter, Route} from 'react-router-dom';
import './app.css';

import reducers from './reducers';

import App from './components/app';
import Player from './containers/player';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/player/:id" component={Player}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));