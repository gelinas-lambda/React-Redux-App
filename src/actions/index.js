import axios from 'axios';

// beer action types
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

// beer action creatoros
// standard form for asyc axios call with thunk
// thunk lets us return functions as actions well as regular objects
export const fetchBeer = () => dispatch => {
    dispatch({ type: START_FETCHING });
    axios
        .get('https://api.openbrewerydb.org/breweries')
        .then(res=> dispatch({ type: FETCH_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));

};