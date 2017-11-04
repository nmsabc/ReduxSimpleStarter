<<<<<<< HEAD

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './components/app'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'))
=======
 import React from 'react'
>>>>>>> 7ec662d1c174f9bcb39234cbffe95b72c4a13a9d
