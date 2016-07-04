
const initialState = {
  portfolioTitle: 'Portfolio',
  projects: {
    sectionTitle: 'Projects',
    description: '',
    collection: [
      {
        title: 'Skills Builder',
        description: '',
        year: '2015',
        techs: ['JavaScript', 'React', 'Redux', 'HTML', 'CSS', 'PHP', 'Silverstripe'],
        url: 'http://www.careers.govt.nz/tools/skills-builder',
        images: {
          root: 'skillsbuilder',
          number: 1
        }
      },
      {
        title: 'Gooptika',
        description: '',
        year: '2014',
        techs: ['JavaScript', 'Angular', 'Node', 'HTML', 'CSS'],
        url : 'http://gooptika.azurewebsites.net/',
        images: {
          root: 'gooptika',
          number: 1
        }
      },
      {
        title: 'Escuvin',
        description: '',
        year: '2008',
        techs: ['JavaScript', 'PHP', 'HTML', 'CSS', 'MYSQL'],
        url: 'http://www.escuvin.es',
        images: {
          root: 'escuvin',
          number: 1
        }
      },
      {
        title: 'Cie Automotive',
        description: '',
        year: '2007',
        techs: ['JavaScript', 'PHP', 'HTML', 'CSS', 'MYSQL'],
        url : 'http://www.cieautomotive.com',
        images: {
          root: 'cieautomotive',
          number: 1
        }
      },
      {
        title: 'Cadenas de nieve',
        description: '',
        year: '2006',
        techs: ['JavaScript', 'PHP', 'HTML', 'CSS', 'MYSQL'],
        url : 'http://www.cieautomotive.com',
        images: {
          root: 'cadenasdenieve',
          number: 1
        }
      },
      {
        title: 'Bilbu',
        description: '',
        year: '2005',
        techs: ['JavaScript', 'PHP', 'HTML', 'CSS', 'MYSQL'],
        url : 'http://www.bilbu.es',
        images: {
          root: 'bilbu',
          number: 1
        }
      }
    ]
  }
};


// PORTFOLIO REDUCER
export function _portfolio(state = initialState, action = {}) {
  let newState = {...state };

  switch(action.type) {
    default:
      return newState;
  }
}



