/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from 'axios';

export const FETCHING = "FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const POSTING = "POSTING";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";
export const DELETING = "DELETING";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

const initialState = {
  addSmurf: '',
  getSmurfs: null,
  updateSmurf: null,
  deleteSmurf: null,
  error: '',
  isLoading: false
};

export const getSmurfs = () => {
  const promise = axios.get(`http://localhost:3333/smurfs`);
  return dispatch=>{
    dispatch({type: FETCHING});
    promise
      .then(response=>{

        dispatch({type:FETCH_SUCCESS, payload: response.data})
      })
      .catch(err=>{console.log(err);
      dispatch({type:POST_FAILURE})})
  }
}

export const addSmurf = (smurf) =>{
  const promise = axios.post(`http://localhost:3333/smurfs`, smurf);
  return dispatch =>{
    dispatch({type:POSTING})
    promise
      .then(response=>{
        dispatch({type:POST_SUCCESS, payload: response.data})
      })
      .catch(err=>{console.log(err);
        dispatch({type:POST_FAILURE})
      })
  }
}
