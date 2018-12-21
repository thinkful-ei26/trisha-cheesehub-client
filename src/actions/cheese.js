import { API_BASE_URL } from '../config';

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

    fetch(`${API_BASE_URL}/cheeses`)
      .then(res => {
        if(!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json()
      })
      .then( cheese => { 
        dispatch(fetchCheesesSuccess(cheese))
      })
      .catch( error => { dispatch(fetchCheesesError(error))
      })
  }
} 