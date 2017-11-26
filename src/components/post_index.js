import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { fetchPosts } from '../actions'

// import meteor things
// import npm packages
// import /imports/.... from imports
// import ../ relative path

class PostIndex extends Component {
  // constructor
  // lifecycle methods
  // render
  // helpers (renderPosts)
  // actions (handleClick)
  componentDidMount () {
    this.props.fetchPosts()
  }

  render () {
    return (
      <div>
        <div className='text-xs-right'>
          <Link className='btn btn-primay' to='/posts/new'>
            New Post
          </Link>
        </div>
        <h3>Posts </h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    )
  }

  renderPosts () {
    // return _.map(this.props.posts, post => (
    // <li className='lits-group-item' key={post.id}>
    //   {post.title}
    // </li>
    // ))
    return _.map(this.props.posts, post => {
      return (
        <li className='lits-group-item' key={post.id}>
          {post.title}
        </li>
      )
    })
  }
}

function mapStateToProps (state) {
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex)
