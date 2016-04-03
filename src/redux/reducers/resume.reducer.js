
const initialState = {
  education: [
    {
      institution: 'EOI Getxo',
      place: 'Basque Country, Spain',
      title: 'C1 Effective operational proficiency, English language',
      date: '2013-2014',
      description: 'I studied relevant grammar and vocabulary topics at each level. At certain levels, I complemented my studies with electives. The focus of all elective classes was to have practice in different skill areas - for example, my Speaking Elective focuses on speaking fluency and Reading and Writing focus on the skills required for business. My core class teacher was an expert in English language teaching.'
    },
    {
      institution: 'Viva College',
      place: 'Brisbane, Australia',
      title: 'General English',
      date: '2013',
      description: 'Develop all areas of English through core and elective classes. The core classes cover each aspect of the language while the electives focus on particular areas to improve.'
    },
    {
      institution: 'Castilla-La Mancha University',
      place: 'Spain',
      title: 'Associate Degree, Computer Systems Engineering',
      date: '1992-1996',
      description: ''
    },
    {
      institution: 'IEFPS Tartanga Erandio',
      place: 'Basque Country, Spain',
      title: 'Certificate IV, Electronic & Computer Technology',
      date: '1988-1991',
      description: ''
    }
  ],
  experience: [
    {
      company: 'IN3',
      place: 'Madrid, Spain',
      title: 'Developer',
      date: '1991-1993',
      description: 'Developing Multimedia applications in C and Assembly'
    },
    {
      company: 'Morganite Espanola',
      place: 'Basque Country, Spain',
      title: 'Analyst Developer',
      date: '1993-1995',
      description: 'Developing desktop aplications with Microsoft Visual Basic'
    },
    {
      company: 'Inco Systems',
      place: 'Basque Country, Spain',
      title: 'Analyst Developer',
      date: '1995-1999',
      description: 'Developing desktop account aplications with Microsoft Visual Basic'
    },
    {
      company: 'ERAE',
      place: 'Madrid, Spain',
      title: 'Web Developer',
      date: '1999-2001',
      description: 'Developing Web aplications in DHTML'
    },
    {
      company: 'MNEMO Evolution & Integration Services',
      place: 'Madrid, Spain',
      title: 'Web Developer',
      date: '2001-2002',
      description: 'Developing Web aplications in DHTML and Microsoft ASP'
    },
    {
      company: 'Drudei Web Design',
      place: 'Basque Country, Spain',
      title: 'Manager and Co Founder',
      date: '2002-2006',
      description: 'Developing Web aplications in DHTML, PHP and MySQL '
    },
    {
      company: 'Laluca Design Agency',
      place: 'Basque Country, Spain',
      title: 'Web Developer',
      date: '2006-2009',
      description: 'Developing Web aplications in DHTML, Adobe Flash, PHP and MySQL '
    },
    {
      company: 'Freelancing',
      place: 'Basque Country, Spain',
      title: 'Web Developer',
      date: '2010-2015',
      description: 'Developing Web aplications in DHTML, Adobe Flash, PHP, MySQL, Node '
    },
    {
      company: 'Solnet Solutions',
      place: 'Wellington, New Zealand',
      title: 'JavaScript Developer',
      date: '2015-Today',
      description: 'Developing modern Web aplications in Node, React and AngularJS'
    }
  ]
};


// RESUME REDUCER
export function _resume(state = initialState, action = {}) {
  let newState = {...state };

  switch(action.type) {
    default:
      return newState;
  }
}



