import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyAzigPkoUft3TckvvF0JCvpfFIxkLgeRxQ'

class App extends Component { // ES6
  constructor (props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    YTSearch({key: API_KEY, term: 'react redux meteor'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    }) // YTSearch
  }// constructor

  render () {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} />
      </div>
    )// return
  } // render
}// class App

ReactDOM.render(<App />, document.querySelector('.container'))
