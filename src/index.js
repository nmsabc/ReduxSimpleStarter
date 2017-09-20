import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyAzigPkoUft3TckvvF0JCvpfFIxkLgeRxQ'

YTSearch({key: API_KEY, term: 'react redux meteor'}, function (data) {
  console.log(data)
})

// desc:
// 1. create a new component this will produce some html

// const App = function () {
// step 1.
const AppZero = () => {
  return <div>Hi there!</div>
}
// what is the purpose of JSX?!
// make the writing simpler
// http://babeljs.io/
// const App = function () {
//   return <div>Hi there!</div>
// }
//
// const App2 = function () {
//   return <ol>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
//     </ol>
// }

const App = () => { // ES6
  return (
    <div>
      <SearchBar />
    </div>
  )// return
}

// 2. take the components' generated html and put it on the page (in the DOM)

ReactDOM.render(<AppZero />, document.querySelector('.container')) // this requires import React and ReactDOM
ReactDOM.render(<App />, document.querySelector('.container')) // this requires import React and ReactDOM
// ReactDOM.render(<App />, document.getElementById('container')) // this requires import React and ReactDOM
