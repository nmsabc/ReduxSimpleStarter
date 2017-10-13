export function selectBook (book) {
  console.log('we just selected a book from the list: ', book.title)
 // select books is an action creater and needs to retrn an object with
 // a type prototype and a payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
