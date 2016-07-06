
const initialState = {
  aboutTitle: 'me',
  aboutIntro: [
    `
    I’m Julen Rojo, a Spanish Creative Full Stack Developer and UI Designer based in Windy Wellington, New Zealand.
    I passionately move pixels and lines of code to craft clean, responsive,
    and user-friendly websites. My current weapons of choice are JavaScript, React, Angular and Node.
    `
    ,
    `
    I love working with all types of clients, from start-ups businesses to global brands,
    and in the short time since my establishment, I have worked at Solnet Solutions for ACC, Careers NZ and Chrometoaster.
    `
    ,
    `
    Above everything else, I believe that all design, from its inception to the final product should have an element of joy about it.
    After all, design is an escape from the futility of modern life, not an endorsement of it.
    `
    ,
    `
    Being both an engineer and designer, I help clients bring their ideas into reality.
    If you like what I do, and think we could work together, then get in touch.
    `
  ]
};


// ABOUT REDUCER
export function _about(state = initialState, action = {}) {
  let newState = {...state };

  switch(action.type) {
    default:
      return newState;
  }
}



