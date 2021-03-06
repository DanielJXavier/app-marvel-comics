import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import reducer from './reducers'

import App from './components/App'
import Character from './components/Character'

import './index.sass'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(reducer, enhancer)

render (
  <Provider store={store}>
    <Router>
      <main>
        <Route exact path="/" component={App} />
        <Route exact path="/character/:characterId" component={Character} />
      </main>
    </Router>
  </Provider>,
  document.getElementById('root')
)
