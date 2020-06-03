import React, { Fragment, Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../../reducers/index';
import { Map as map } from 'immutable';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/Header'
import Home from '../components/Home'
import Contact from '../components/Contact'
import NotFound from '../components/NotFound'
import Videos from './Videos'

const logger_ = ({getState, dispatch }) => next => action => {
  console.log('este es mi viejo estado', getState().toJS())
  console.log('vamos a enviar está acción', action);
  const value = next(action)
  console.log('este es mi nuevo estado', getState().toJS())
  return value
}

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    )
  )
);

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              exact
              path="/videos"
              component={Videos}
            />
            <Route
              exact
              path="/contacto"
              component={Contact}
            />
            <Redirect
              from="/v"
              to="/videos"
            />
            <Route
              path="*"
              component={NotFound}
            />
          </Switch>
        </Fragment>
      </Provider>
    )
  }
}

export default App