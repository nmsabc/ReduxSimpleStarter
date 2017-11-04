
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './components/app'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)

class Salut extends React.Component {
  render () {
    return <div> Hi there! </div>
  }
}
class By extends React.Component {
  render () {
    return <div> La revedere! </div>
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        HEADER
        <Route path='/hi' component={Salut} />
        <Route path='/by' component={By} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'))
