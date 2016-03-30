
const initialState = {
  burgerButton: false
};


// APP REDUCER
export function _app(state = initialState, action = {}) {
  let newState = {...state };

  switch(action.type) {
    case 'MENU_BUTTON_CLICK':
      newState.burgerButton = !newState.burgerButton
      return newState;
    default:
      return state;
  }
}



