/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  POSTING,
  POST_SUCCESS,
  POST_FAILURE
}
  from './actions'


/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import { combineReducers } from "redux";
import smurfsReducer from "./smurfsReducer";


const initialState = {
  smurfs: [],
  error: "",
  isLoading: false
};

function smurfsReducer(state = initialState, action) {
  switch (action.type) {
    case   FETCHING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false
      };
    }
    case FETCH_FAILURE: {
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    }
    case POSTING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case POST_SUCCESS: {
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false
      };
    }
    case POST_FAILURE: {
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    }
    default: {
      return state;
    }
  }
}

export default smurfsReducer;

export default combineReducers({
  smurfs: smurfsReducer
});
