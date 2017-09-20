import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
const API_KEY = 'AIzaSyAzigPkoUft3TckvvF0JCvpfFIxkLgeRxQ'

class App extends Component { // ES6
  constructor (props) {
    super(props)

    this.state = { videos: [] }

    YTSearch({key: API_KEY, term: 'react redux meteor'}, (videos) => {
      this.setState({ videos })
    }) // YTSearch
  }// constructor

  render () {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    )// return
  } // render
}// class App

ReactDOM.render(<App />, document.querySelector('.container'))
