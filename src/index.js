import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import promise from 'redux-promise';

import reducers from './reducers';
import PostIndex from "./components/posts_index";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <Switch>
              <Route path="/" component={PostIndex} />
          </Switch>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
