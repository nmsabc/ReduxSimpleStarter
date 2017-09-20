import React, { Component } from 'react'

// const SearchBar = () => {
//   return <input />
// }// SearchBar

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {term: 'searching for a video?'}
  }
  render () {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.setState({term: event.target.value})} />

      </div>
    )// return
  }// render

  // onInputChange (event) {
  //   console.log(event.target.value)
  // }// onInputChange
}// class SearchBar

export default SearchBar
