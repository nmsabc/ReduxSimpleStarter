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
      <div className='search-bar'>
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />

      </div>
    )// return
  }// render

  onInputChange (term) {
    this.setState({term})
    this.props.onSearchTermChange(term)
  }

  // onInputChange (event) {
  //   console.log(event.target.value)
  // }// onInputChange
}// class SearchBar

export default SearchBar
