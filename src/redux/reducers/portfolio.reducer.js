
const initialState = {
  portfolioTitle: 'Portfolio',
  projects: {
    sectionTitle: 'Here’s a selection of some of the projects I’ve lovingly crafted over the last few years',
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
        title: 'Star Wars Universe',
        description: '',
        year: '2015',
        techs: ['JavaScript', 'React', 'Redux', 'NodeJS', 'HTML', 'CSS'],
        url: 'http://swu.julen.kiwi',
        images: {
          root: 'swu',
          number: 1,
          format: 'png'
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
        url: 'http://www.escuvin.com',
        images: {
          root: 'escuvin',
          number: 1
        }
      },
      {
        title: 'FotonHC',
        description: '',
        year: '2007',
        techs: ['JavaScript', 'Flash', 'HTML', 'CSS', 'MYSQL'],
        url : 'http://www.fotonhc.com/',
        images: {
          root: 'fotonhc',
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
          number: 1,
          format: 'gif'
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
      },
      {
        title: 'IDELT',
        description: '',
        year: '2005',
        techs: ['JavaScript', 'PHP', 'HTML', 'CSS', 'MYSQL'],
        url : 'http://www.idelt.com',
        images: {
          root: 'idelt',
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
