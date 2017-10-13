import React, { Component } from 'react'
import { connect } from 'react-redux'
import {selectBook} from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
  renderList () {
    // const title2 = ''
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className='list-group-item' >
          {book.title}
        </li>
      )
    })
  }
  render () {
    return <ul className='list-group col-sm-4'>
      { this.renderList() }
    </ul>
  }
}

function mapStateToProps (state) {
  return {
    books: state.books
  }
} // mapStateToProps

// Anythings returned from this finction will end up as props
// on the BookList container
function mapDispatchToProps (dispatch) {
  // whenever selectBookis called, the result should be passed
  // to all of our reduceres
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// we promote BookList to from component to containter and it needs to know
// about the new dispatch method and selectBook. We make it (like so) avail.
// like a props
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
