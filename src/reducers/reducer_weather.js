import { FETCH_WEATHER } from '../actions/index'

export default function (state = [], action) {
  // used to show the middleware promise
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ]
  }
  // console.log('Action received: ', action.payload.data)
  return state
}
