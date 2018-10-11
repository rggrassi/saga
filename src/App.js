import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'; 
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import reducers from './reducers';
import Info from './Info';
import axios from 'axios';

import { put } from 'redux-saga/effects' 
import { loadDataSuccess } from './actions'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers, 
  applyMiddleware(sagaMiddleware)
)

function *ola() {
  console.warn('hello from saga')
  const dados = yield axios.get('http://httpbin.org/ip');
  console.log(dados);
  yield put(loadDataSuccess(dados.data.ip))
}

sagaMiddleware.run(ola);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Info />
        </div>
      </Provider>
    );
  }
}

export default App;
