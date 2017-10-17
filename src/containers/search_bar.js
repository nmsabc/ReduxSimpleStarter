import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {term: ''}
    this.onInputChange = this.onInputChange.bind(this)
  } // constructor

  onInputChange (event) {
    console.log('printed: ', event.target.value)
    this.setState({term: event.target.value})
  } // onInputChange

  render () {
    return (
      <div className='jumbotron' >
        <form className='input-group'>
          <input
            placeholder='Get a 5 days forecast in your fav cities'
            className='form-control'
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className='input-group-btn'>
            <button type='submit' className='btn btn-primary'>Submit</button>
          </span>
        </form>
      </div>
    ) // return
  }// render
}// class
