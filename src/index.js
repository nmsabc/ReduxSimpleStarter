import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'

import reducers from './reducers'
import PostIndex from './components/post_index'
import PostsNew from './components/PostsNew'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={PostIndex} />
        <Route exact path='/posts/new' component={PostsNew} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'))
