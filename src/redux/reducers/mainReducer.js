
const initialState = {
  loaded: false,
  loading: false,
  currentRoute: ''
};


// MAIN PAGE CONTENT REDUCER
export function _mainPage(state = initialState, action = {}) {
  //let newState = {...state };

  switch(action.type) {
    case 'CLOSE_CHECK_SKILLS_MODAL':
      return {
        //...state,
        loading: true,
        loaded: false
      };
    default:
      return state;
  }
}



