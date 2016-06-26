
const initialState = {
  introTitle: 'Im Julen Rojo',
  introSubTitle: 'a JavaScript functional programmer',
  cites: ['Sometimes, the elegant implementation is just a function. Not a method. Not a class. Not a framework. Just a function.'],
  downloadResume: 'Download Resume',
  hireMe: 'Hire Me'
};


// HOME REDUCER
export function _home(state = initialState, action = {}) {
  let newState = {...state };

  switch(action.type) {
    default:
      return newState;
  }
}



