// import * as actions from '../actions';
import { FETCH_CHEESE_REQUEST, FETCH_CHEESE_SUCCESS, FETCH_CHEESE_ERROR } from '../actions';

const initialState = {
  cheeses: [
    // "Bath Blue",
    // "Barkham Blue",
    // "Buxton Blue"
  ],
  loading: false,
  error: null
}

export const cheeseReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_CHEESE_REQUEST : 
    return Object.assign({}, state, { loading: true })

    case FETCH_CHEESE_SUCCESS :
    return Object.assign({}, state, { 
      loading: false, 
      cheeses: action.cheeses, 
      error: null
    })

    case FETCH_CHEESE_ERROR :
    return Object.assign({}, state, { 
      loading: true,
      error: action.error
    })

    default: return state
  }
}

export default cheeseReducer;