import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

export class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {term: ''}
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  } // constructor

  onInputChange (event) {
    console.log('printed: ', event.target.value)
    this.setState({term: event.target.value})
  } // onInputChange

  onFormSubmit (event) {
    event.preventDefault()

    // we fetch adta for a given city:
    this.props.fetchWeather(this.state.term, 'ro')
    this.setState({ term: '' }) // set term to empty string
  } // onFormSubmit

  render () {
    return (
      <div
        onSubmit={this.onFormSubmit}
        className='jumbotron'
        >
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

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
