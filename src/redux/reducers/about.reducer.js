
const initialState = {
  telephone: '+64223515860',
  telephonetxt: '+64 223 515 860',
  github: 'https://github.com/julenr',
  mail: 'julen.wellington@gmail.com',
  linkedin: 'http://www.linkedin.com/in/julenrojo'
};


// ABOUT REDUCER
export function _about(state = initialState, action = {}) {
  let newState = {...state };

  switch(action.type) {
    default:
      return newState;
  }
}



