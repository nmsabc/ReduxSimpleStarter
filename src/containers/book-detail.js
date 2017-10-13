import React, { Component } from 'react'
import { connect } from 'react-redux'

export class BookDetail extends Component {
  render () {
    if (!this.props.book) {
      return <div>Please select a book to get started.</div>
    } // we need to ensure we do a return diff then null

    return (

      <div>
        <h3> Details for: </h3>
        <div><b>Book Name:</b> {this.props.book.title}</div>
        <div><b>Pages:</b> {this.props.book.pages}</div>
      </div>

    ) // return
  } // render
} // class

function mapStateToProps (state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail)
