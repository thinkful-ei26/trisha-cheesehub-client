import { API_BASE_URL } from '../config';
console.log('API_BASE_URL on client-side:', API_BASE_URL);

export const FETCH_CHEESE_REQUEST = 'FETCH_CHEESE_REQUEST';
export const fetchCheesesRequest = () => ({
  type: FETCH_CHEESE_REQUEST,
})

export const FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS';
export const fetchCheesesSuccess = (cheeses) => ({
  type: FETCH_CHEESE_SUCCESS,
  cheeses
})

export const FETCH_CHEESE_ERROR = 'FETCH_CHEESE_ERROR';
export const fetchCheesesError = (error) => ({
  type: FETCH_CHEESE_ERROR,
  error
})

export default function fetchCheeses() {
  return dispatch => {
    dispatch(fetchCheesesRequest);

    fetch(`${API_BASE_URL}/api/cheeses`)
      .then(res => {
        if(!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json()
      })
      .then( cheeses => { 
        dispatch(fetchCheesesSuccess(cheeses))
      })
      .catch( error => { dispatch(fetchCheesesError(error))
      })
  }
} 