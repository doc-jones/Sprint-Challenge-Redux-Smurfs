import {
    FETCHING,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    POSTING,
    POST_SUCCESS,
    POST_FAILURE,
    DELETING,
    DELETE_SUCCESS,
    DELETE_FAILURE
  }
    from '../actions';

    const initialState = {
        smurfs: [],
        error: "",
        isLoading: false
      };
      
      function smurfsReducer(state = initialState, action) {
        switch (action.type) {
          case FETCHING: {
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
          case DELETING: {
            return {
              ...state,
              isLoading: true
            };
          }
          case DELETE_SUCCESS: {
            return {
              ...state,
              smurfs: action.payload,
              isLoading: false
            };
          }
          case DELETE_FAILURE: {
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