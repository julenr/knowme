import _ from 'lodash';

const initialState = {
  loaded: false,
  loading: false,
  currentRoute: ''
};


// MAIN PAGE CONTENT REDUCER
export function _mainPage(state = initialState, action = {}) {
  let newState = {...state };

  switch (action.type) {
    case 'GET_MAIN_PAGE_REQUEST':
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case 'GET_MAIN_PAGE_SUCCESS':
      return {
        ...state,
        data: action.result.data,
        loading: false,
        loaded: true
      };
    case 'GET_MAIN_PAGE_FAILURE':
      return {
        ...state,
        loading: false,
        loaded: true
      };
    case 'SET_CURRENT_ROUTE':
      return {
        ...state,
        currentRoute: action.route
      };
    case 'GET_SAVED_STATE_SUCCESS':
      newState = action.result.data._mainPage;
      return newState;
    default:
      return state;
  }
}



