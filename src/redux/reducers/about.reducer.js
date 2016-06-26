
const initialState = {
  aboutTitle: 'Hi',
  aboutIntro: `I\'m Julen Rojo, a Spanish Creative Developer based in Windy Wellington, New Zealand.
                I passionately move pixels and lines of code to craft clean, responsive,
                and user-friendly websites. My current weapons of choice are JavaScript, React,
                Angular and Node.
                Being both an engineer and designer, I help clients bring their ideas into reality.
                Contact me today and I would love to hear about your business`
};


// ABOUT REDUCER
export function _about(state = initialState, action = {}) {
  let newState = {...state };

  switch(action.type) {
    default:
      return newState;
  }
}



