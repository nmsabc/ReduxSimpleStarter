import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { createPost } from '../actions'

// create -> POST /posts/new              PostsNew.js
// read  ->  GET /posts/:id               PostsShow.js
//       -> GET /posts                    Posts.js
// update -> POST/PATCH /posts/:id/edit   PostsEdit.js
// delete -> DELETE /posts/:id            PostDelete.js

// ...field.input gives the input the changes coming from the field & is simpler than:
// onChange={field.input.onChange}
// onFocus={field.input.onFocus}
// onBlur={field.input.onBlur}

class PostsNew extends Component {
  renderField (field) {
    const { meta: { touched, error } } = field
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <label htmlFor='label'>{field.label}</label>
        <input
          className='form-control'
          type='text'
          {...field.input}
        />
        <div className='text-help'>
          {touched && error}
        </div>
      </div>
    )
  } // renderTitleField

  onSubmit (values) {
    this.props.createPost(values, () => {
      this.props.history.push('/')
    })
  }

  render () {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label='Title for your post'
          id='title'
          name='title'
          component={this.renderField}
        />
        <Field
          label='Categories your post belongs to'
          id='categories'
          name='categories'
          component={this.renderField}
        />
        <Field
          label='Post content'
          id='content'
          name='content'
          component={this.renderField}
        />
        <button type='submit' className='btn btn-primay'>Submit</button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
      </form>
    )
  } // render
}

function validate (values) {
  console.log(values)
  const errors = {}

  // validate inputs from values
  if (!values.title || values.title.length < 3) {
    errors.title = 'Please enter a title for your post longer than 3 chars please'
  }
  if (!values.categories) {
    errors.categories = 'Please enter one or more categories for your post'
  }
  if (!values.content) {
    errors.content = 'Please enter some content for your post'
  }
  // if errors is NIL - form is fine, can submit
  // if errors has *any* proprierties, redux form assumes form is invladi
  console.log(errors)
  return errors
}

export default reduxForm({
  validate,
  form: 'PostsNewForm' // must be unique across app & give me an ID for the form I'm defining
})(
  connect(null, { createPost })(PostsNew)
)
