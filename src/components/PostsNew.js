import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

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
  renderTitleField (field) {
    return (
      <div>
        <input
          type = "text"
          {...field.input}
        />
      </div>
    )
  } // renderTitleField

  render () {
    return (
      <form>
        <Field
          name='title'
          component={this.renderTitleField}
        />
      </form>
    )
  } // render
}

export default reduxForm({
  form: 'PostsNewForm' // must be unique across app & give me an ID for the form I'm defining
})(PostsNew)
