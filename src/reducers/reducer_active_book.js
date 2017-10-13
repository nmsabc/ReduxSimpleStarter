// state is not application state!! only a small component
// state is responsible for the state coresponding only to this reducer

// in the app boot up we have no BOOK_SELECED therefore we must
// push null on initial state; else undefined is returned, not allowed by redux

export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload
  }
  return state
} // function
