

export const questionnaire = {
  'Application': {
    'FormID': 'ccbb12487d7d27bc3841fc7be17de1f4be95e076',
    'Endpoints': {
      'Save': 'http:\/\/careersnz.stripetheweb.com\/tools\/skills-transition-tool\/save',
      'Jobs': 'http:\/\/careersnz.stripetheweb.com\/tools\/skills-transition-tool\/jobs',
      'Skills': 'http:\/\/careersnz.stripetheweb.com\/tools\/skills-transition-tool\/skills'
    }
  },
  'Intro': {
    'FeatureType': 'Video',
    'Title': '<p><strong>Hi there, I\'m John.<\/strong> Welcome to Skills Builder!<\/p>',
    'Blurb': 'This website will help you find a course and a better job based on the skills you have and the things you want from work and study.',
    'Image': {
      'Small': {
        'Src': 'http:\/\/careersnz.stripetheweb.com\/assets\/_resampled\/SetWidth400-generalcontentimage.jpg',
        'Alt': 'assets\/generalcontentimage.jpg',
        'Width': 400,
        'Height': 226,
        'EmbedHTML': '<img src=\'http:\/\/careersnz.stripetheweb.com\/assets\/_resampled\/SetWidth400-generalcontentimage.jpg\' alt=\'SetWidth400-generalcontentimage\' \/>'
      },
      'Medium': {
        'Src': 'http:\/\/careersnz.stripetheweb.com\/assets\/_resampled\/SetWidth800-generalcontentimage.jpg',
        'Alt': 'assets\/generalcontentimage.jpg',
        'Width': 800,
        'Height': 451,
        'EmbedHTML': '<img src=\'http:\/\/careersnz.stripetheweb.com\/assets\/_resampled\/SetWidth800-generalcontentimage.jpg\' alt=\'SetWidth800-generalcontentimage\' \/>'
      },
      'Large': {
        'Src': 'http:\/\/careersnz.stripetheweb.com\/assets\/_resampled\/SetWidth959-generalcontentimage.jpg',
        'Alt': 'assets\/generalcontentimage.jpg',
        'Width': 959,
        'Height': 541,
        'EmbedHTML': '<img src=\'http:\/\/careersnz.stripetheweb.com\/assets\/_resampled\/SetWidth959-generalcontentimage.jpg\' alt=\'SetWidth959-generalcontentimage\' \/>'
      }
    },
    'Video': {
      'Title':'Top 10 Emma Stone Performances',
      'Type':'video',
      'SourceURL':'https:\/\/www.youtube.com\/watch?v=Hy59IfNzSeU',
      'Width':'480',
      'Height':'270',
      'Description':'Top 10 Emma Stone Performances',
      'ThumbURL':'https:\/\/i.ytimg.com\/vi\/Hy59IfNzSeU\/hqdefault.jpg',
      'EmbedHTML':'<div class="media"><iframe width=\'480\' height=\'270\' src=\'https:\/\/www.youtube.com\/embed\/Hy59IfNzSeU?feature=oembed&autoplay=1\' frameborder=\'0\' allowfullscreen><\/iframe><\/div>'
    }
  },
  'Member': {
    'UserID': null,
    'SessionID': 'de34dsfvm7lur0uk5psniogbr7',
    'Region': null,
    'Name': '',
    'Gender' : 'Male',
    'Ethnicity': 'Kiwi'
  },
  'ListTypes': {
    'Selected': [],
    'Current': null
  },
  'Jobs': {
    'Selected': [],
    'Current': null
  },
  'Skills': {
    'Selected': [],
    'Current': null
  },
  'Interests': {
    'Selected': [],
    'Current': null
  },
  'Qualifications': {
    'Selected': [],
    'Current': null
  },
  'VocationalPathways': {
    'Selected': [],
    'Current': null
  },
  'WorkingConditions': {
    'Selected': [],
    'Current': null
  },
  'ProgressBar': {
    'ListViewLinkText': 'Show me!',
    'ListViewLinkMinResults': 3,
    'ListViewLinkMaxResults': 24,
    'Results': 0,
    'Percentage': 0,
    'Text': 'You\'ve made the first step, you\'re here!'
  },
  'Questionnaire': [ ],
  'Questions': [
    {
      'ID': 1,
      'Text': '',
      'Description': 'First up, what is your name?',
      'QuestionType': 'TextInput',
      'QuestionResponses': [],
      'PlaceHolder': 'Optional placeholder',
      'NextQuestionID': 2,
      'HasAlternative': false,
      'AlternativeText': null,
      'AlternativeNextQuestionID': null,
      'Endpoint': 'Member.Name',
      'MilestonePercentage': 10,
      'MilestoneText': 'Good start. We just need to know a little more to make a good list for you.',
      'HintText': '',
      'HintPosition': 'Bottom'
    },
    {
      'ID': 2,
      'Text': '',
      'Description': 'YES/NO QUESTION PROTOTYPE FOR USER [name], YES selects List View type \'Job\' NO \'Course\'',
      'QuestionType': 'YesNo',
      'NextQuestionID': 3,
      'HasAlternative': true,
      'AlternativeText': 'I don\'t mind',
      'AlternativeNextQuestionID': 5,
      'Endpoint': null,
      'MilestonePercentage': 20,
      'MilestoneText': '[name]! we have a list of [results-count] job/courses, tell us a little more to narrow it down a bit.',
      'QuestionResponses': [
        {
          'ID': 0,
          'ResponseText': 'Yes',
          'NextQuestionID': 3,
          'EntityType': 'ListTypes',
          'EntityData': 'Job'
        },
        {
          'ID': 1,
          'ResponseText': 'No',
          'NextQuestionID': 3,
          'EntityType': 'ListTypes',
          'EntityData': 'Course'
        }
      ],
      'HintText': 'Hint: Think about Yes and No',
      'HintPosition': 'Top',
    },
    {
      'ID': 3,
      'Text': 'Goal',
      'Description': 'SINGLE CHOICE QUESTION PROTOTYPE',
      'QuestionType': 'SingleChoice',
      'NextQuestionID': null,
      'HasAlternative': false,
      'AlternativeText': '',
      'AlternativeNextQuestionID': null,
      'Endpoint': null,
      'MilestonePercentage': 30,
      'MilestoneText': 'That\'s better, we\'ve got it down to 23 courses.',
      'QuestionResponses': [
        {
          'ID': 0,
          'ResponseText': 'Option 1. Jumps to question prototype 1. Adds Interest: Gardening',
          'NextQuestionID': 1,
          'EntityType': 'Interests',
          'EntityData': 'Gardening'
        },
        {
          'ID': 1,
          'ResponseText': 'Option 2. Jumps to question prototype 2. Adds Job: Gardener',
          'NextQuestionID': 2,
          'EntityType': 'Jobs',
          'EntityData': 'Gardener'
        },
        {
          'ID': 2,
          'ResponseText': 'Option 3. Jumps to question prototype 4. Adds Qualification: Graduate Diploma in Professional Supervision',
          'NextQuestionID': 5,
          'EntityType': 'Qualifications',
          'EntityData': 'Graduate Diploma in Professional Supervision '
        },
        {'ID': 3,
          'ResponseText': 'Option 4. Jumps to question prototype 5. Adds Region: Wellington',
          'NextQuestionID': 5,
          'EntityType': 'WorkingConditions',
          'EntityData': 'Very hard'
        },
        {'ID': 4,
          'ResponseText': 'Option 5. Jumps to question prototype 6.',
          'NextQuestionID': 4,
          'EntityType': 'None',
          'EntityData': ''
        }
      ],
      'HintText': 'Hint: Think about making a choice',
      'HintPosition': 'Bottom',
    },
    {
      'ID': 4,
      'Text': '',
      'Description': 'First up, what is your name?',
      'QuestionType': 'TextInput',
      'QuestionResponses': [],
      'PlaceHolder': 'Optional placeholder',
      'NextQuestionID': 2,
      'HasAlternative': false,
      'AlternativeText': null,
      'AlternativeNextQuestionID': null,
      'Endpoint': 'Member.Name',
      'MilestonePercentage': 10,
      'MilestoneText': 'Good start. We just need to know a little more to make a good list for you.',
      'HintText': '',
      'HintPosition': 'Bottom'
    },
    {
      'ID': 5,
      'Text': 'Another job',
      'Description': 'MULTIPLE CHOICE QUESTION PROTOTYPE',
      'QuestionType': 'MultipleChoice',
      'NextQuestionID': 6,
      'HasAlternative': true,
      'AlternativeText': 'I don\'t mind',
      'AlternativeNextQuestionID': 6,
      'Endpoint': null,
      'Visible': 6,
      'MilestonePercentage': 40,
      'MilestoneText': 'Great, we\'ve got a nice list of 9 jobs/courses.',
      'QuestionResponses': [{
        'ID': 1,
        'ResponseText': 'Option 1. Multiple choice question prototype',
        'selected': false,
        'NextQuestionID': 6,
        'EntityType': 'Jobs',
        'EntityData': 'Software Engineer'
      }, {
        'ID': 2,
        'ResponseText': 'Option 2. Multiple choice question prototype',
        'selected': false,
        'NextQuestionID': 6,
        'EntityType': 'None',
        'EntityData': ''
      }, {
        'ID': 3,
        'ResponseText': 'Option 3. Multiple choice question prototype',
        'selected': true,
        'NextQuestionID': 6,
        'EntityType': 'None',
        'EntityData': ''
      }, {
        'ID': 4,
        'ResponseText': 'Option 4. Multiple choice question prototype',
        'selected': true,
        'NextQuestionID': 6,
        'EntityType': 'None',
        'EntityData': ''
      }, {
        'ID': 5,
        'ResponseText': 'Option 5. Multiple choice question prototype',
        'selected': true,
        'NextQuestionID': 6,
        'EntityType': 'None',
        'EntityData': ''
      }, {
        'ID': 6,
        'ResponseText': 'Option 6. Multiple choice question prototype',
        'selected': true,
        'NextQuestionID': 6,
        'EntityType': 'None',
        'EntityData': ''
      }, {
        'ID': 7,
        'ResponseText': 'Option 7. Multiple choice question prototype',
        'selected': true,
        'NextQuestionID': 6,
        'EntityType': 'None',
        'EntityData': ''
      }, {
        'ID': 8,
        'ResponseText': 'Option 8. Multiple choice question prototype',
        'selected': true,
        'NextQuestionID': 6,
        'EntityType': 'None',
        'EntityData': ''
      }],
      'HintText': 'Hint: Think about many choices...',
      'HintPosition': 'Top',
      'HasSeeMore': true,
    }, {
      'ID': 6,
      'Text': '',
      'Description': 'TYPE AHEAD  QUESTION PROTOTYPE',
      'QuestionType': 'Typeahead',
      'NextQuestionID': 7,
      'HasAlternative': true,
      'PlaceHolder' : 'Write something here',
      'AlternativeText': 'I don\'t have any other jobs to add',
      'AlternativeNextQuestionID': 8,
      'Endpoint': 'Jobs',
      'MilestonePercentage': 50,
      'MilestoneText': 'Great, we\'ve got a nice list of 5 jobs/courses.',
      'QuestionResponses': [],
      'HintText': 'Hint: Think about typeahead...',
      'HintPosition': 'Bottom',
    }, {
      'ID': 7,
      'Text': 'Skills match',
      'Description': 'TAG CLOUD QUESTION PROTOTYPE',
      'QuestionType': 'TagCloud',
      'NextQuestionID': 8,
      'HasAlternative': false,
      'AlternativeText': '',
      'AlternativeNextQuestionID': null,
      'Endpoint': null,
      'MilestonePercentage': 70,
      'MilestoneText': 'Great, we\'ve got a nice [job-title-plural] list of 3 jobs/courses.',
      'QuestionResponses': [{
        'ResponseText': 'Skill 1.',
        'EntityType': 'None',
        'EntityData': ''
      }, {
        'ResponseText': 'Skill 2.',
        'EntityType': 'None',
        'EntityData': ''
      }, {
        'ResponseText': 'Skill 3.',
        'EntityType': 'None',
        'EntityData': ''
      }, {
        'ResponseText': 'Skill 4.',
        'EntityType': 'None',
        'EntityData': ''
      }, {
        'ResponseText': 'Skill 5.',
        'EntityType': 'None',
        'EntityData': ''
      }],
      'HintText': 'Hint: Think about tagation.',
      'HintPosition': 'Top'
    }
    , {
      'ID': 8,
      'QuestionType': 'EndForm',
      'MilestonePercentage': 100,
      'MilestoneText': 'Great, you have finished.'
    }]
};


export const mainContentHTML = {
  'Title': 'Demo General Content Page - with image',
  'FeatureType': 'Image',
  'Image': {
    'Medium': {
      'EmbedHTML': '<img src=\'\' \/>'
    }
  },
  'Video': {
    'Title': 'YouTube Video',
    'Type': 'video',
    'SourceURL': 'https:\/\/www.youtube.com\/watch?v=udGgFUKxokg',
    'Width': '480',
    'Height': '270',
    'Description': null,
    'ThumbURL': 'https:\/\/i.ytimg.com\/vi\/udGgFUKxokg\/hqdefault.jpg',
    'EmbedHTML': '<div class=\'media\'><iframe width=\'480\' height=\'270\' src=\'https:\/\/www.youtube.com\/embed\/udGgFUKxokg?feature=oembed\' frameborder=\'0\' allowfullscreen><\/iframe><\/div>'
  },
  'Content': '            <!-- START WYSIWYG content -->\n            <h2>Take the next step (H2)<\/h2>\n            <p>Muse about prime number venture a mote of dust suspended in a sunbeam the ash of stellar alchemy intelligent beings the sky calls to us Vangelis trillion culture, kindling the energy hidden in matter decipherment worldlets. A mote of dust suspended in a sunbeam, a still more glorious dawn awaits kindling the energy hidden in matter radio telescope.<\/p>\n            <h3>Explorations billions and billions (H3)<\/h3>\n            <p class=\'h5\'>Harvesting star light galaxies two ghostly white figures:<\/p>\n            <ul>\n              <li>in coveralls and helmets<\/li>\n              <li>are softly dancing\n                <ul>\n                  <li>extraplanetary Hypatia,<\/li>\n                  <li>courage of our questions\n                    <ul>\n                      <li>emerged into consciousness<\/li>\n                      <li>Hydrogen atoms<\/li>\n                    <\/ul>\n                  <\/li>\n                  <li>the sky calls to us!<\/li>\n                <\/ul>\n              <\/li>\n              <li>Not a sunrise but a galaxyrise.<\/li>\n            <\/ul>\n            <p class=\'h5\'>Radio telescope extraordinary claims:<\/p>\n            <ol>\n              <li>require extraordinary evidence<\/li>\n              <li>two ghostly white figures\n                <ol class=\'list-alpha\'>\n                  <li>in coveralls and helmets<\/li>\n                  <li>are softly dancing finite\n                    <ol class=\'list-roman\'>\n                      <li>but unbounded<\/li>\n                      <li>extraplanetary radio telescope<\/li>\n                    <\/ol>\n                  <\/li>\n                  <li>star stuff harvesting star light<\/li>\n                <\/ol>\n              <\/li>\n              <li>Billions upon billions upon billions upon billions upon billions upon billions upon billions?<\/li>\n            <\/ol>\n            <h4>Corpus callosum (H4)<\/h4>\n            <p>Corpus callosum. Vanquish the impossible decipherment take root and flourish! Orions sword. The sky calls to us!<\/p>\n            <blockquote>\n              <p>Orions sword from which we spring! Astonishment laws of physics bits of moving fluff, science the sky calls to us gathered by gravity, cosmic ocean. <br>\n                <cite><strong>Carl Sagan<\/strong><\/cite><\/p>\n            <\/blockquote>\n            <p>Explorations billions upon billions permanence of the stars, \'Vangelis cosmos culture colonies\' ship of the imagination of brilliant syntheses at the edge of forever a still more glorious dawn awaits extraordinary claims require extraordinary evidence tesseract gathered by gravity rich in heavy atoms. AC\/DC Drake Equation globular star cluster quasar rich in heavy atoms realm of the galaxies<\/p>\n\n            <div class=\'captionImage left\'>\n              <img src=\'..\/images\/placeholders\/placeholder-1918x1082-people.jpg\' width=\'959\' height=\'541\' alt=\'\' \/>\n              <p class=\'caption\'>Image caption Lorem ipsum dolor sit amet, <a href=\'#\'>consectetur adipiscing elit<\/a>.<\/p>\n            <\/div>\n\n            <p>Consectetur adipiscing elit. Aliquam at link style sem. Strong erat emphasis. Donec placerat nisl magna, et faucibus arcu condimentum sed.<\/p>\n                \n            <h2>Tables<\/h2>            \n            <table>\n              <caption>\n              Tables\n              <\/caption>\n              <thead>\n                <tr>\n                  <th>Table header 1<\/th>\n                  <th>Table header 2<\/th>\n                  <th>Table header 3<\/th>\n                <\/tr>\n              <\/thead>\n              <tbody>\n                <tr>\n                  <td>Lorem ipsum<\/td>\n                  <td>Lorem ipsum<\/td>\n                  <td><p>Consectetur adipiscing elit. Aliquam at link style sem. Strong erat emphasis. Donec placerat nisl magna, et faucibus arcu condimentum sed.<\/p><\/td>\n                <\/tr>\n                <tr>\n                  <td>Lorem ipsum<\/td>\n                  <td>Lorem ipsum<\/td>\n                  <td><p>Consectetur adipiscing elit. Aliquam at link style sem. Strong erat emphasis. Donec placerat nisl magna, et faucibus arcu condimentum sed.<\/p><\/td>\n                <\/tr>\n                <tr>\n                  <td>Lorem ipsum<\/td>\n                  <td>Lorem ipsum<\/td>\n                  <td><p>Consectetur adipiscing elit. Aliquam at link style sem. Strong erat emphasis. Donec placerat nisl magna, et faucibus arcu condimentum sed.<\/p><\/td>\n                <\/tr>\n              <\/tbody>\n            <\/table>\n            <h2>Video<\/h2>\n            <div class=\'capionImage video\'>\n              <iframe width=\'730\' height=\'411\' src=\'https:\/\/www.youtube.com\/embed\/oZal3m3JOkk?rel=0&amp;showinfo=0\' frameborder=\'0\' allowfullscreen><\/iframe>\n              <p class=\'caption\'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.<\/p>\n            <\/div>\n            <!-- END WYSIWYG content -->',
};

export const footerData = {
  'Regions': [
    'Auckland',
    'Waikato',
    'Bay Of Plenty',
    'Gisborne',
    'Hawkes Bay',
    'Taranaki',
    'Manawatu / Wanganui',
    'Wellington',
    'Nelson / Tasman',
    'Marlborough',
    'West Coast',
    'Canterbury',
    'Otago',
    'Southland',
    'Northland'
  ],
  'ResetModal': {
    'Title': 'Reset Skills Builder',
    'Content':'<p>Resetting Skills Builder will remove all your personal information, skills, preferences and your action plan. You will start again at the beginning answering questions about yourself.<\/p><p><strong>Are you sure you want to reset Skills Builder?</strong></p>'
  },
  'VocationalPathways': {
    'Services industries': 'blue',
    'Primary industries': 'green',
    'Manufacturing and technology': 'red',
    'Construction and infrastructure': 'orange',
    'Creative industries': 'yellow',
    'Social and community services': 'purple'
  },
  'VocationalPathwaysModal': {
    'Title': 'CMS Vocational Pathways',
    'Content': '<p>CMS The Vocational Pathways help student students see how their learning and achievement is valued in the \'real world\' by aligning the NCEA level 2 Assessment Standards including specific \'sector-related\' standards with six industries:<\/p>'
  },
  'Tooltips': {
    'JobCardVocationalPathways': 'Here is a tooltip for Vocational Pathways.',
    'ListViewPreferences': 'Here is a tooltip for List View preferences.',
    'CourseDetailsLevel': 'Here is a tooltip for Course Datail Level.',
    'CourseDetailsVocationalPathways': 'Here is a tooltip For Course Detail Vocational Pathways.',
    'QualificationCardLevel': 'Here is a tooltip For Qualification Card Level.'
  },
  'Footer': {
    'Text': 'Here is some text, it does not have any HTML in it',
    'Menu': [
      {
        'Link': 'http:\/\/careers.local\/tools\/skills-transition-tool\/demo-general-content-page-with-image\/',
        'URLSegment': 'demo-general-content-page-with-image',
        'Title': 'Demo General Content Page - with image'
      }, {
        'Link': 'http:\/\/careers.local\/tools\/skills-transition-tool\/demo-general-content-page-with-video\/',
        'URLSegment': 'demo-general-content-page-with-video',
        'Title': 'Demo General Content Page - with video'
      }
    ]
  },
  'PopularJobs': {
    'Jobs': ['Landscape Gardener', 'Child care', 'Aborist', 'Software Architect', 'Teacher', 'Warden',
      'Landscape Gardener', 'Child care', 'Aborist', 'Software Architect', 'Teacher', 'Warden',
      'Landscape Gardener', 'Child care', 'Aborist', 'Software Architect', 'Teacher', 'Warden'],
    'Visible': 5
  },
  'HelpPopup': {
    'HelpText': '<p>If you get stuck or want to talk about your options don\'t hesitate to get in touch by clicking here.<p><br><p><strong>Got it, thanks.<\/strong><\/p>',
    'Link1Text': '0800 222 733',
    'Link1Link': 'tel:0800222733',
    'Link1OpenInNewTab': false,
    'Link2Text': 'Chat online',
    'Link2Link': '#',
    'Link2OpenInNewTab': false,
    'Link3Text': 'Read online help',
    'Link3Link': 'http:\/\/www.careers.govt.nz\/tools\/skills-transition-tool\/help',
    'Link3OpenInNewTab': false
  },
  'LoginForm': {
    'Action': 'http:\/\/careers.local\/api\/skills-transition-tool\/login',
    'Method': 'post',
    'Fields': [
      {
        'Name': 'AuthenticationMethod',
        'HTML': '<input type=\'hidden\' name=\'AuthenticationMethod\' value=\'MCPMemberAuthenticator\' class=\'hidden\' id=\'MCPLoginForm_login_AuthenticationMethod\' \/>\n'
      },
      {
        'Name': 'Email',
        'HTML': '<input type=\'text\' name=\'Email\' class=\'text\' id=\'MCPLoginForm_login_Email\' required=\'required\' aria-required=\'true\' \/>'
      },
      {
        'Name': 'Password',
        'HTML': '<input type=\'password\' name=\'Password\' class=\'text password\' id=\'MCPLoginForm_login_Password\' required=\'required\' aria-required=\'true\' \/>'
      },
      {
        'Name': 'Remember',
        'HTML': '<input type=\'checkbox\' name=\'Remember\' value=\'1\' class=\'checkbox\' id=\'MCPLoginForm_login_Remember\' \/>'
      }
    ],
    'Actions': [
      {
        'Name': 'action_dologin',
        'HTML': '\n\t<input type=\'submit\' name=\'action_dologin\' value=\'Log in\' class=\'action\' id=\'MCPLoginForm_login_action_dologin\' \/>\n\n'
      }
    ],
    'RegisterLink': 'http:\/\/careers.local\/my-career-portfolio\/signup\/',
    'LostPasswordLink': 'http:\/\/careers.local\/Security\/lostpassword\/'
  },
  'LogoutForm': {
    'Action': 'http:\/\/careers.local\/Security\/logout\/',
    'Method': 'get',
    'AccountLink': 'http:\/\/careers.local\/my-career-portfolio\/account-settings\/'
  },
  'Survey': {
    'Text': 'Take our Survey',
    'Link': 'http:\/\/surveymonkey.com\/r\/ZD2VTVG',
    'Target': '_blank'
  }
};


export const listViewData = {
  'ListType': '',
  'UndoPanel':
  {
    'Closed': false,
    'Text': 'No shift work'
  },
  'HiddenPanel':
  {
    'Closed': true,
  }
  ,
  'HelpPanels': [
    {
      'Closed': false,
      'Text': 'Here\u0027s a couple of tips to get you started',
      'Tips': '<p><strong>First tip</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.</p><p><strong>Second tip</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.</p><p><strong>Third tip</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.</p>',
      'Image': '../src/assets/images/placeholders/helppanel.png'
    }
  ],
  'Filters': {
    'JobCards': [],
    'JobCardsFiltered': 0,
    'QualificationCards': [],
    'QualificationCardsFiltered': 0,
    'ShowAddPreferenceModal': false,
    'Region': 'Anywhere'
  },
  'ActionPlanDrawer': {
    'SuggestedActions': [
      {
        'ActionID': 1,
        'Title': '<p>0 Eam in novum adipisci. Cum meis legimus elaboraret ea <a href="www.google.co.nz"> look at google</a></p>',
        'IsInActionPlan': true
      },
      {
        'ActionID': 2,
        'Title': '<p>1 Mea justo tractatos no, quidam fabulas consulatu id cum, eu insolens legendos electram ius. Mollis patrioque qui in, his at legendos tacimates.</p>',
        'IsInActionPlan': false
      },
      {
        'ActionID': 3,
        'Title': '<p>2 Eam in novum adipisci. Cum meis legimus elaboraret ea</p>',
        'IsInActionPlan': true
      },
      {
        'ActionID': 4,
        'Title': '<p>3 Mea ei eros aliquam, est feugiat evertitur neglegentur ad, vis ea vidisse scripta vivendum.</p>',
        'IsInActionPlan': true
      },
      {
        'ActionID': 5,
        'Title': '<p>4 His ea malis docendi delicata. Ea epicuri corrumpit vulputate pri, nec erant perpetua repudiandae cu.</p>',
        'IsInActionPlan': false
      }
    ],
    'Courses': [
    ],
    'NoResultsTitle':'Your actions',
    'NoResultsText':'<p><strong>To add an action:</strong><br>Find a course you\'re insterested in and click or tap the "add" button next to the action you want to take.',

  },
  'JobsCards': [
    {
      'SubJobID': 1,
      'Closed': false,
      'Filtered': false,
      'Flipped': false,
      'Title': '1 Civil Engineering Technician/Draughtsperson',
      'MaoriTitle' : 'Kaihangarau/Kaihoahoa Mataaro Metarahi',
      'Description': 'Civil engineering technicians/draughtspeople plan and draw the technical details for building and repairing roads, bridges, buildings and other structures.',
      'Interests': ['Gardening', 'Helping people',  'Cars'],
      'WorkConditions': ['Flexible hours', 'Business', 'hours', 'Inside', 'Outside', 'Regular hours'],
      'VocationalPathways': ['Social and community services', 'Manufacturing and technology'],
      'Image': '../src/assets/images/placeholders/software-engineer.jpg',
      'SkillsMatch': 82,
      'Interest': 74,
      'Demand': 23,
      'Pay': '$40K–$170K',
      'PerTime': 'per year',
      'Skills': [
        'Examine characteristics or behavior of living organisms.',
        'Research methods to improve food products.',
        'Test quality of materials or finished products.',
        'Evaluate quality of materials or products.',
        'Analyze chemical compounds or substances.',
        'Clean objects.',
        'Prepare biological samples for testing or analysis.'
      ]
    },{
      'SubJobID': 2,
      'Closed': false,
      'Filtered': false,
      'Flipped': false,
      'Title': '2 Agricultural/Horticultural Consultant',
      'MaoriTitle' : 'Kaitohutohu Ahuwhenua',
      'Description': 'Agricultural/horticultural consultants advise and educate farmers and growers on how to improve the quality and yield of crops and livestock. They also help develop financial and business plans to increase profitability and growth.',
      'Interests': ['Gardening', 'Helping people',  'Cars'],
      'WorkConditions': ['Flexible hours', 'Business', 'hours', 'Inside', 'Outside', 'Regular hours'],
      'VocationalPathways': ['Social and community services', 'Manufacturing and technology'],
      'Image': '../src/assets/images/placeholders/software-engineer.jpg',
      'SkillsMatch': 82,
      'Interest': 74,
      'Demand': 23,
      'Pay': '$40K–$170K',
      'PerTime': 'per year',
      'Skills': [
        'Examine characteristics or behavior of living organisms.',
        'Research methods to improve food products.',
        'Test quality of materials or finished products.',
        'Evaluate quality of materials or products.',
        'Analyze chemical compounds or substances.',
        'Clean objects.',
        'Prepare biological samples for testing or analysis.'
      ]
    },{
      'SubJobID': 3,
      'Closed': false,
      'Filtered': false,
      'Flipped': false,
      'Title': 'Building Inspector tutors teach a specific ',
      'MaoriTitle' : 'Mataaro Metarahi',
      'Description': 'Civil engineers design, plan, organise and oversee the building of structures such as dams, bridges, gas and water supply systems, sewerage systems and roads. They analyse the way these structures are likely to behave once they\'re built, and choose the best materials and construction methods for each design.',
      'Interests': ['Gardening', 'Helping people',  'Cars'],
      'WorkConditions': ['Flexible hours', 'Business', 'hours', 'Inside', 'Outside', 'Regular hours'],
      'VocationalPathways': ['Social and community services', 'Manufacturing and technology'],
      'Image': '../src/assets/images/placeholders/software-engineer.jpg',
      'SkillsMatch': 82,
      'Interest': 74,
      'Demand': 23,
      'Pay': '$40K–$170K',
      'PerTime': 'per year',
      'Skills': [
        'Examine characteristics or behavior of living organisms.',
        'Research methods to improve food products.',
        'Test quality of materials or finished products.',
        'Evaluate quality of materials or products.',
        'Analyze chemical compounds or substances.',
        'Clean objects.',
        'Prepare biological samples for testing or analysis.'
      ]
    },{
      'SubJobID': 4,
      'Closed': false,
      'Filtered': false,
      'Flipped': false,
      'Title': '4 Science Technician',
      'MaoriTitle' : 'Kaihangarau/Kaihoahoa Mataaro Metarahi',
      'Description': 'Researches, designs, develops and maintains software systems along with hardware development for medical, scientific, and industrial purposes.',
      'Interests': ['Gardening', 'Helping people',  'Cars'],
      'WorkConditions': ['Flexible hours', 'Business', 'hours', 'Inside', 'Outside', 'Regular hours'],
      'VocationalPathways': ['Social and community services', 'Manufacturing and technology'],
      'Image': '../src/assets/images/placeholders/software-engineer.jpg',
      'SkillsMatch': 82,
      'Interest': 74,
      'Demand': 23,
      'Pay': '$40K–$70K',
      'PerTime': '',
      'Skills': [
        'Examine characteristics or behavior of living organisms.',
        'Research methods to improve food products.',
        'Test quality of materials or finished products.',
        'Evaluate quality of materials or products.',
        'Analyze chemical compounds or substances.',
        'Clean objects.',
        'Prepare biological samples for testing or analysis.'
      ]
    },{
      'SubJobID': 5,
      'Closed': false,
      'Filtered': false,
      'Flipped': false,
      'Title': '5 Mechanical Engineering Technician',
      'MaoriTitle' : 'Kaihangarau/Kaihoahoa Mataaro Metarahi',
      'Description': 'Researches, designs, develops and maintains software systems along with hardware development for medical, scientific, and industrial purposes.',
      'Interests': ['Gardening', 'Helping people',  'Cars'],
      'WorkConditions': ['Flexible hours', 'Business', 'hours', 'Inside', 'Outside', 'Regular hours'],
      'VocationalPathways': ['Social and community services', 'Manufacturing and technology'],
      'Image': '../src/assets/images/placeholders/software-engineer.jpg',
      'SkillsMatch': 82,
      'Interest': 74,
      'Demand': 23,
      'Pay': '$40K–$70K',
      'PerTime': 'per year',
      'Skills': [
        'Examine characteristics or behavior of living organisms.',
        'Research methods to improve food products.',
        'Test quality of materials or finished products.',
        'Evaluate quality of materials or products.',
        'Analyze chemical compounds or substances.',
        'Clean objects.',
        'Prepare biological samples for testing or analysis.'
      ]
    },{
      'SubJobID': 6,
      'Closed': false,
      'Filtered': false,
      'Flipped': false,
      'Title': '6 Outdoor Recreation Guide Instructor',
      'MaoriTitle' : 'Kaihangarau/Kaihoahoa Mataaro Metarahi',
      'Description': 'Researches, designs, develops and maintains software systems along with hardware development for medical, scientific, and industrial purposes.',
      'Interests': ['Gardening', 'Helping people',  'Cars'],
      'WorkConditions': ['Flexible hours', 'Business', 'hours', 'Inside', 'Outside', 'Regular hours'],
      'VocationalPathways': ['Social and community services', 'Manufacturing and technology'],
      'Image': '../src/assets/images/placeholders/software-engineer.jpg',
      'SkillsMatch': 82,
      'Interest': 74,
      'Demand': 23,
      'Pay': '$40K–$70K',
      'PerTime': 'per year',
      'Skills': [
        'Examine characteristics or behavior of living organisms.',
        'Research methods to improve food products.',
        'Test quality of materials or finished products.',
        'Evaluate quality of materials or products.',
        'Analyze chemical compounds or substances.',
        'Clean objects.',
        'Prepare biological samples for testing or analysis.'
      ]
    },{
      'SubJobID': 7,
      'Closed': false,
      'Filtered': false,
      'Flipped': false,
      'Title': '7 Police Officer',
      'MaoriTitle' : 'Kaihangarau/Kaihoahoa Mataaro Metarahi',
      'Description': 'Researches, designs, develops and maintains software systems along with hardware development for medical, scientific, and industrial purposes.',
      'Interests': ['Gardening', 'Helping people',  'Cars'],
      'WorkConditions': ['Flexible hours', 'Business', 'hours', 'Inside', 'Outside', 'Regular hours'],
      'VocationalPathways': ['Social and community services', 'Manufacturing and technology'],
      'Image': '../src/assets/images/placeholders/software-engineer.jpg',
      'SkillsMatch': 82,
      'Interest': 74,
      'Demand': 23,
      'Pay': '$150K–$400K',
      'PerTime': 'per year',
      'Skills': [
        'Examine characteristics or behavior of living organisms.',
        'Research methods to improve food products.',
        'Test quality of materials or finished products.',
        'Evaluate quality of materials or products.',
        'Analyze chemical compounds or substances.',
        'Clean objects.',
        'Prepare biological samples for testing or analysis.'
      ]
    },{
      'SubJobID': 8,
      'Closed': false,
      'Filtered': false,
      'Flipped': false,
      'Title': '8 Software Engineer',
      'MaoriTitle' : 'Kaihangarau/Kaihoahoa Mataaro Metarahi',
      'Description': 'Researches, designs, develops and maintains software systems along with hardware development for medical, scientific, and industrial purposes.',
      'Interests': ['Gardening', 'Helping people',  'Cars'],
      'WorkConditions': ['Flexible hours', 'Business', 'hours', 'Inside', 'Outside', 'Regular hours'],
      'VocationalPathways': ['Social and community services', 'Manufacturing and technology'],
      'Image': '../src/assets/images/placeholders/software-engineer.jpg',
      'SkillsMatch': 82,
      'Interest': 74,
      'Demand': 23,
      'Pay': '$40K–$70K',
      'PerTime': 'per year',
      'Skills': [
        'Examine characteristics or behavior of living organisms.',
        'Research methods to improve food products.',
        'Test quality of materials or finished products.',
        'Evaluate quality of materials or products.',
        'Analyze chemical compounds or substances.',
        'Clean objects.',
        'Prepare biological samples for testing or analysis.'
      ]
    },{
      'SubJobID': 9,
      'Closed': false,
      'Filtered': false,
      'Flipped': false,
      'Title': '9 Software Engineer',
      'MaoriTitle' : 'Kaihangarau/Kaihoahoa Mataaro Metarahi',
      'Description': 'Researches, designs, develops and maintains software systems along with hardware development for medical, scientific, and industrial purposes.',
      'Interests': ['Gardening', 'Helping people',  'Cars'],
      'WorkConditions': ['Flexible hours', 'Business', 'hours', 'Inside', 'Outside', 'Regular hours'],
      'VocationalPathways': ['Social and community services', 'Manufacturing and technology'],
      'Image': '../src/assets/images/placeholders/software-engineer.jpg',
      'SkillsMatch': 82,
      'Interest': 74,
      'Demand': 23,
      'Pay': '$40K–$70K',
      'PerTime': 'per year',
      'Skills': [
        'Examine characteristics or behavior of living organisms.',
        'Research methods to improve food products.',
        'Test quality of materials or finished products.',
        'Evaluate quality of materials or products.',
        'Analyze chemical compounds or substances.',
        'Clean objects.',
        'Prepare biological samples for testing or analysis.'
      ]
    },{
      'SubJobID': 10,
      'Closed': false,
      'Filtered': false,
      'Flipped': false,
      'Title': '10 Software Engineer',
      'MaoriTitle' : 'Kaihangarau/Kaihoahoa Mataaro Metarahi',
      'Description': 'Researches, designs, develops and maintains software systems along with hardware development for medical, scientific, and industrial purposes.',
      'Interests': ['Gardening', 'Helping people',  'Cars'],
      'WorkConditions': ['Flexible hours', 'Business', 'hours', 'Inside', 'Outside', 'Regular hours'],
      'VocationalPathways': ['Social and community services', 'Manufacturing and technology'],
      'Image': '../src/assets/images/placeholders/software-engineer.jpg',
      'SkillsMatch': 82,
      'Interest': 74,
      'Demand': 23,
      'Pay': '$40K–$70K',
      'PerTime': 'per year',
      'Skills': [
        'Examine characteristics or behavior of living organisms.',
        'Research methods to improve food products.',
        'Test quality of materials or finished products.',
        'Evaluate quality of materials or products.',
        'Analyze chemical compounds or substances.',
        'Clean objects.',
        'Prepare biological samples for testing or analysis.'
      ]
    },
    {
      'SubJobID': 11,
      'Closed': false,
      'Filtered': false,
      'Flipped': true,
      'Title': 'Human Resources',
      'MaoriTitle' : 'Kaihangarau/Kaihoahoa Mataaro Metarahi',
      'Description': 'Plans, directs, and/or coordinates all human resource activities and staff of an organization.',
      'Interests': ['Gardening', 'Helping people',  'Cars'],
      'WorkConditions': ['Flexible hours', 'hours', 'Outside', ],
      'VocationalPathways': ['Social and community services', 'Manufacturing and technology'],
      'Image': '../src/assets/images/placeholders/human-resources.jpg',
      'SkillsMatch': 10,
      'Interest': 40,
      'Demand': 30,
      'Pay': '$40K–$70K',
      'PerTime': 'per year',
      'Skills': [
        'Examine characteristics or behavior of living organisms.',
        'Research methods to improve food products.',
        'Test quality of materials or finished products.',
        'Evaluate quality of materials or products.',
        'Analyze chemical compounds or substances.',
        'Clean objects.',
        'Prepare biological samples for testing or analysis.'
      ]
    },
    {
      'SubJobID': 12,
      'Closed': false,
      'Filtered': false,
      'Flipped': false,
      'Title': 'Dental Hygienist',
      'MaoriTitle' : 'Kaihangarau/Kaihoahoa Mataaro Metarahi',
      'Description': 'Assists dentists in diagnostic and therapeutic aspects of a group or private dental practice.',
      'Interests': ['Helping people'],
      'WorkConditions': ['Flexible hours', 'hours', 'Inside', 'Regular hours'],
      'VocationalPathways': ['Social and community services', 'Manufacturing and technology'],
      'Image': '../src/assets/images/placeholders/dental-hygienist.jpg',
      'SkillsMatch': 100,
      'Interest': 60,
      'Demand': 90,
      'Pay': '$140K–$170K',
      'PerTime': 'per year',
      'Skills': [
        'Examine characteristics or behavior of living organisms.',
        'Research methods to improve food products.',
        'Test quality of materials or finished products.',
        'Evaluate quality of materials or products.',
        'Analyze chemical compounds or substances.',
        'Clean objects.',
        'Prepare biological samples for testing or analysis.'
      ]
    },
    {
      'SubJobID': 13,
      'Closed': false,
      'Filtered': false,
      'Flipped': false,
      'Title': 'Landscape gardener',
      'MaoriTitle' : 'Kaihangarau/Kaihoahoa Mataaro Metarahi',
      'Description': 'Landscape gardeners design, develop, maintain and remodel gardens and landscapes.',
      'Interests': ['Helping people',  'Cars'],
      'WorkConditions': ['Flexible hours', 'Business'],
      'VocationalPathways':  ['Social and community services'],
      'Image': '../src/assets/images/placeholders/placeholder-630x399-job.jpg',
      'SkillsMatch': 80,
      'Interest': 30,
      'Demand': 20,
      'Pay': '$40K–$70K',
      'PerTime': 'per year',
      'Skills': [
        'Evaluate reports or designs to determine work needs.',
        'Prepare chemicals for work application.',
        'Clean facilities or sites.',
        'Dispose of trash or waste materials.',
        'Remove debris from work sites.',
        'Plant greenery to improve landscape appearance.',
        'Cultivate lawns, turf, or gardens.',
        'Irrigate lawns, trees, or plants.',
        'Install equipment to protect or support trees.'
      ]
    },
    {
      'SubJobID': 14,
      'Closed': false,
      'Filtered': false,
      'Flipped': false,
      'Title': 'Financial Planner',
      'MaoriTitle' : 'Kaihangarau/Kaihoahoa Mataaro Metarahi',
      'Description': 'Related to careers in portfolio management, the financial planner offers a broad range of services aimed at assisting individuals in managing and planning their financial future.',
      'Interests': ['Gardening'],
      'WorkConditions': ['hours', 'Regular hours'],
      'VocationalPathways':  ['Manufacturing and technology'],
      'Image': '../src/assets/images/placeholders/financial-planner.jpg',
      'SkillsMatch': 20,
      'Interest': 50,
      'Demand': 90,
      'Pay': '$40K–$70K',
      'PerTime': 'per year',
      'Skills': [
        'Examine characteristics or behavior of living organisms.',
        'Research methods to improve food products.',
        'Test quality of materials or finished products.',
        'Evaluate quality of materials or products.',
        'Analyze chemical compounds or substances.',
        'Clean objects.',
        'Prepare biological samples for testing or analysis.'
      ]
    }
  ],
  'QualificationCards': [
    {
      'Closed': false,
      'Flipped': false,
      'Filtered': false,
      'Title': 'Information and Communication Technology Manager',
      'Institutions': ['International College of New Zealand Limited', 'Victoria University'],
      'Regions': ['Otago', 'Wellington'],
      'DescriptionText': '1 Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem',
      'Description': '2 Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem',
      'VocationalPathways': [
        'Social and community services',
        'Manufacturing and technology',
        'Construction and infrastructure'
      ],
      'Level': '1',
      'LeadsTo': 'Groundsperson; Another job title; Job three, Human Resources Adviser; Procurement Manager; Office Manager; Managing Director/Chief Executive; Advertising, Sales and Marketing Manager; Secretary (General); Secretary',
      'CourseID': 1
    },
    {
      'Closed': false,
      'Flipped': false,
      'Filtered': false,
      'Title': '2 Bachelor of Information Technology',
      'Institutions': ['International College of New Zealand Limited'],
      'Regions': ['Otago', 'Wellington'],
      'DescriptionText': '1 Descriptive text lorem ipsutive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam am dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem',
      'Description': '2 Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem',
      'VocationalPathways': [
        'Social and community services',
        'Manufacturing and technology'
      ],
      'Level': '3',
      'LeadsTo': 'Groundsperson; Another job title; Job three',
      'CourseID': 2
    },
    {
      'Closed': false,
      'Flipped': true,
      'Filtered': false,
      'Title': '3 Bachelor of Applied Information Systems',
      'Institutions': ['International College of New Zealand Limited', 'Victoria University'],
      'Regions': ['Otago', 'Wellington'],
      'DescriptionText': 'Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem…',
      'Description': 'Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem…',
      'VocationalPathways': [
        'Social and community services',
        'Manufacturing and technology'
      ],
      'Level': '5',
      'LeadsTo': 'Groundsperson; Another job title; Job three; Job four; Job five; Job six; Job seven; Job that will go on and on and a bit longer until there isnt any more room',
      'CourseID': 3
    },
    {
      'Closed': false,
      'Flipped': false,
      'Filtered': false,
      'Title': '4 Graduate Diploma in Professional Supervision (Biculturalism in Practice)',
      'Institutions': ['International College of New Zealand Limited'],
      'Regions': ['Otago', 'Wellington'],
            'DescriptionText': '1 Descriptive text lorem ipsutive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam am dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem',
      'Description': '2 Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem',
      'VocationalPathways': [
        'Social and community services',
        'Manufacturing and technology',
        'Construction and infrastructure'
      ],
      'Level': '5',
      'LeadsTo': 'Groundsperson; Another job title; Job three',
      'CourseID': 4
    },
    {
      'Closed': false,
      'Flipped': false,
      'Filtered': false,
      'Title': '5 Graduate Diploma in Professional Supervision (Biculturalism in Practice) with longer',
      'Institutions': ['International College of New Zealand Limited'],
      'Regions': ['Otago', 'Wellington'],
            'DescriptionText': '1 Descriptive text lorem ipsutive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam am dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem',
      'Description': '2 Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem',
      'VocationalPathways': [
        'Social and community services',
        'Manufacturing and technology'
      ],
      'Level': '5',
      'LeadsTo': 'Groundsperson; Another job title; Job three; Job four; Job five; Job six; Job seven; Job that will go on and on and a bit longer until there isnt any more room',
      'CourseID': 5
    },
    {
      'Closed': false,
      'Flipped': false,
      'Filtered': false,
      'Title': '6 Graduate Diploma in Professional Supervision (Biculturalism in Practice) with even longer text that goes on',
      'Institutions': ['International College of New Zealand Limited'],
      'Regions': ['Otago', 'Wellington'],
      'DescriptionText': 'Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem',
      'Description': 'Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem',
      'VocationalPathways': [
        'Social and community services',
        'Manufacturing and technology',
        'Construction and infrastructure'
      ],
      'Level': '5',
      'LeadsTo': 'Groundsperson; Another job title; Job three',
      'CourseID': 6
    },
    {
      'Closed': false,
      'Flipped': false,
      'Filtered': false,
      'Title': '7 Graduate Diploma in Professional Supervision (Biculturalism in Practice)',
      'Institutions': ['International College of New Zealand Limited'],
      'Regions': ['Otago', 'Wellington'],
      'DescriptionText': 'Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem',
      'Description': 'Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem',
      'VocationalPathways': [
        'Social and community services',
        'Manufacturing and technology'
      ],
      'Level': '5',
      'LeadsTo': 'Groundsperson; Another job title; Job three; Job four; Job five; Job six; Job seven; Job that will go on and on and a bit longer until there isnt any more room',
      'CourseID': 7
    },
    {
      'Closed': false,
      'Flipped': false,
      'Filtered': false,
      'Title': '8 Graduate Diploma in Professional Supervision (Biculturalism in Practice)',
      'Institutions': ['International College of New Zealand Limited'],
      'Regions': ['Otago', 'Wellington'],
            'DescriptionText': '1 Descriptive text lorem ipsutive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam am dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem',
      'Description': '2 Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem',
      'VocationalPathways': [
        'Social and community services',
        'Manufacturing and technology',
        'Construction and infrastructure'
      ],
      'Level': '5',
      'LeadsTo': 'Groundsperson; Another job title; Job three',
      'CourseID': 8
    },
    {
      'Closed': false,
      'Flipped': false,
      'Filtered': false,
      'Title': '9 Graduate Diploma in Professional Supervision (Biculturalism in Practice)',
      'Institutions': ['International College of New Zealand Limited'],
      'Regions': ['Otago', 'Wellington'],
            'DescriptionText': '1 Descriptive text lorem ipsutive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam am dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem',
      'Description': '2 Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem',
      'VocationalPathways': [
        'Social and community services',
        'Manufacturing and technology'
      ],
      'Level': '5',
      'LeadsTo': 'Groundsperson; Another job title; Job three; Job four; Job five; Job six; Job seven; Job that will go on and on and a bit longer until there isnt any more room',
      'CourseID': 9
    },
    {
      'Closed': false,
      'Flipped': false,
      'Filtered': false,
      'Title': '10 Graduate Diploma in Professional Supervision (Biculturalism in Practice)',
      'Institutions': ['International College of New Zealand Limited'],
      'Regions': ['Otago', 'Wellington'],
            'DescriptionText': '1 Descriptive text lorem ipsutive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam am dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem',
      'Description': '2 Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem',
      'VocationalPathways': [
        'Social and community services',
        'Manufacturing and technology',
        'Construction and infrastructure'
      ],
      'Level': '5',
      'LeadsTo': 'Groundsperson; Another job title; Job three',
      'CourseID': 10
    },
    {
      'Closed': false,
      'Flipped': false,
      'Filtered': false,
      'Title': '11 Graduate Diploma in Professional Supervision (Biculturalism in Practice)',
      'Institutions': ['International College of New Zealand Limited'],
      'Regions': ['Otago', 'Wellington'],
            'DescriptionText': '1 Descriptive text lorem ipsutive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam am dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem',
      'Description': '2 Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ative text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem',
      'VocationalPathways': [
        'Social and community services',
        'Manufacturing and technology'
      ],
      'Level': '5',
      'LeadsTo': 'Groundsperson; Another job title; Job three; Job four; Job five; Job six; Job seven; Job that will go on and on and a bit longer until there isnt any more room',
      'CourseID': 11
    },
    {
      'Closed': false,
      'Flipped': false,
      'Filtered': false,
      'Title': '12 Graduate Diploma in Professional Supervision (Biculturalism in Practice)',
      'Institutions': ['International College of New Zealand Limited'],
      'Regions': ['Otago', 'Wellington'],
      'DescriptionText': 'Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem…',
      'Description': 'Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem…',
      'VocationalPathways': [
        'Social and community services',
        'Manufacturing and technology'
      ],
      'Level': '5',
      'LeadsTo': 'Groundsperson; Another job title; Job three',
      'CourseID': 12
    },
    {
      'Closed': false,
      'Flipped': false,
      'Filtered': false,
      'Title': '13 Graduate Diploma in Professional Supervision (Biculturalism in Practice)',
      'Institutions': ['International College of New Zealand Limited'],
      'Regions': ['Otago', 'Wellington'],
      'DescriptionText': 'Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem…',
      'Description': 'Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem…',
      'VocationalPathways': [
        'Social and community services',
        'Manufacturing and technology'
      ],
      'Level': '5',
      'LeadsTo': 'Groundsperson; Another job title; Job three',
      'CourseID': 13
    }
  ],
  'QualificationsPanel':
  {
    'NoResultsMessage': 'Sorry, there are no courses to show in the region you have set. Please choose a different one.',
    'FilteredResultsMessage': 'Sorry, there are no courses to show in the region you have set. Please choose a different one.',
    'Title': 'Which course suits you best?',
    'EntryRequirements': '<p>There are no specific entry requirements to become a painter and decorator because you learn skills on the job. However, you can improve your job prospects and earning potential by doing an apprenticeship and gaining a National Certificate. <\/p>',
    'EntryRequirementsSummary': '<p>There are no specific entry requirements to become a painter and decorator because you learn skills on the job. However, you can improve your job prospects and earning potential by doing an apprenticeship and gaining a National Certificate.<\/p>\n<p>Apprentices must do between 5,000 and 6,000 hours (three to four years) of on-the-job training, attend block courses and complete workbooks for assessment.<\/p>\n<p>You can do an apprenticeship through the New Zealand Apprenticeships scheme. Pre-employment courses in painting and decorating are available for those who are interested in taking up an apprenticeship.<\/p>\n<ul class=\"arrow-blue\">\n<li><a href=\"http:\/\/www.careers.govt.nz\/education-and-training\/workplace-training-and-apprenticeships\/new-zealand-apprenticeships\/\">Find out more about New Zealand Apprenticeships<\/a><\/li>\n<li><a href=\"http:\/\/www.bcito.org.nz\/get-career\/career-options\" target=\"_blank\">Building and Construction Industry Training Organisation (BCITO) - information on apprenticeships<\/a><\/li>\n<li><a class=\"external\" href=\"http:\/\/www.masterpainters.co.nz\/careers\/\" target=\"_blank\">Master Painters website - information on pre-trade courses, apprenticeships and career pathways<\/a><\/li>\n<\/ul>',
    'Courses': [
      {
        'Closed': false,
        'Flipped': false,
        'Filtered': false,
        'Title': 'Graduate Diploma in Professional Supervision (Biculturalism in Practice)',
        'Institutions': ['International College of New Zealand Limited', 'Victoria University'],
        'Regions': ['Otago', 'Wellington'],
        'DescriptionText': 'Descriptive <strong>text</strong> lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive 6 text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive 7 text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem…',
        'Description': 'Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive 6 text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive 7 text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem…',
        'VocationalPathways': [
          'Social and community services',
          'Manufacturing and technology'
        ],
        'Level': '1',
        'LeadsTo': 'Groundsperson; Another job title; Job three, Human Resources Adviser; Procurement Manager; Office Manager; Managing Director/Chief Executive; Advertising, Sales and Marketing Manager; Secretary (General); Secretary'
      },
      {
        'Closed': false,
        'Flipped': false,
        'Filtered': false,
        'Title': 'Graduate Diploma in Professional Supervision (Biculturalism in Practice)',
        'Institutions': ['International College of New Zealand Limited'],
        'Regions': ['Otago', 'Wellington'],
        'DescriptionText': 'Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem…',
        'Description': 'Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem…',
        'VocationalPathways': [
          'Social and community services',
          'Manufacturing and technology'
        ],
        'Level': '3',
        'LeadsTo': 'Groundsperson; Another job title; Job three'
      },
      {
        'Closed': false,
        'Flipped': false,
        'Filtered': false,
        'Title': 'Graduate Diploma in Professional Supervision (Biculturalism in Practice)',
        'Institutions': ['International College of New Zealand Limited'],
        'Regions': ['Otago', 'Wellington'],
        'DescriptionText': 'Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem…',
        'Description': 'Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem…',
        'VocationalPathways': [
          'Social and community services',
          'Manufacturing and technology'
        ],
        'Level': '5',
        'LeadsTo': 'Groundsperson; Another job title; Job three'
      },
      {
        'Closed': false,
        'Flipped': false,
        'Filtered': false,
        'Title': 'Graduate Diploma in Professional Supervision (Biculturalism in Practice)',
        'Institutions': ['International College of New Zealand Limited', 'Victoria University'],
        'Regions': ['Otago', 'Wellington'],
        'DescriptionText': 'Descriptive <strong>text</strong> lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive 6 text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive 7 text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem…',
        'Description': 'Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive 6 text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive 7 text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem… Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem…',
        'VocationalPathways': [
          'Social and community services',
          'Manufacturing and technology'
        ],
        'Level': '1',
        'LeadsTo': 'Groundsperson; Another job title; Job three, Human Resources Adviser; Procurement Manager; Office Manager; Managing Director/Chief Executive; Advertising, Sales and Marketing Manager; Secretary (General); Secretary'
      },
      {
        'Closed': false,
        'Flipped': false,
        'Filtered': false,
        'Title': 'Graduate Diploma in Professional Supervision (Biculturalism in Practice)',
        'Institutions': ['International College of New Zealand Limited'],
        'Regions': ['Otago', 'Wellington'],
        'DescriptionText': 'Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem…',
        'Description': 'Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem…',
        'VocationalPathways': [
          'Social and community services',
          'Manufacturing and technology'
        ],
        'Level': '3',
        'LeadsTo': 'Groundsperson; Another job title; Job three'
      },
      {
        'Closed': false,
        'Flipped': false,
        'Filtered': false,
        'Title': 'Graduate Diploma in Professional Supervision (Biculturalism in Practice)',
        'Institutions': ['International College of New Zealand Limited'],
        'Regions': ['Otago', 'Wellington'],
        'DescriptionText': 'Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem…',
        'Description': 'Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem…',
        'VocationalPathways': [
          'Social and community services',
          'Manufacturing and technology'
        ],
        'Level': '5',
        'LeadsTo': 'Groundsperson; Another job title; Job three'
      }
    ]
  },
  'InstitutionsPanel':
  {
    'Text': 'Where would you like to study?',
    'Region': 'Northland',
    'CourseCards': [
      {
        'CourseID': 1,
        'Closed': false,
        'Title': 'Auckland University of Technology',
        'Location': 'Otago',
        'LocationName': 'Otago'
      },
      {
        'CourseID': 2,
        'Closed': false,
        'Title': 'University of Canterbury',
        'LocationName': 'Houghton Bay',
        'Location': 'Wellington'
      },
      {
        'CourseID': 3,
        'Closed': false,
        'Title': 'University of Otago',
        'LocationName': 'Dunedin',
        'Location': 'Dunedin'
      }
    ]
  },
  'DebugExplain': 'Debug info from the server required by the client'
};

export const jobSkills = {
  'Query': 'gardener',
  'Pagination':
    {
      'TotalItems': 17,
      'Start': 0,
      'Limit': 10,
      'CurrentPage': 1,
      'TotalPages': 2,
      'FirstItem': 1,
      'LastItem': 10
    },
  'Results': [
    {
      'SkillID': 16,
      'Title': 'Evaluate reports or designs to determine work needs.'
    }, {'SkillID': 372, 'Title': 'Prepare chemicals for work application.'}, {
      'SkillID': 390,
      'Title': 'Clean facilities or sites.'
    }, {'SkillID': 402, 'Title': 'Remove snow.'}, {
      'SkillID': 412,
      'Title': 'Dispose of trash or waste materials.'
    }, {'SkillID': 408, 'Title': 'Remove debris from work sites.'}, {
      'SkillID': 936,
      'Title': 'Plant greenery to improve landscape appearance.'
    }, {'SkillID': 934, 'Title': 'Cultivate lawns, turf, or gardens.'}, {
      'SkillID': 939,
      'Title': 'Irrigate lawns, trees, or plants.'
    }, {'SkillID': 957, 'Title': 'Install equipment to protect or support trees.'}
  ]
};


export const typeAheadData = {
  'Query': 'fake',
  'Pagination':
  {
    'TotalItems': 17,
    'Start': 0,
    'Limit': 10,
    'CurrentPage': 1,
    'TotalPages': 2,
    'FirstItem': 1,
    'LastItem': 10
  },
  'Results': [
    {
      'SkillID': 16,
      'Title': 'Evaluate reports or designs to determine work needs.'
    }, {'SkillID': 372, 'Title': 'Prepare chemicals for work application.'}, {
      'SkillID': 390,
      'Title': 'Clean facilities or sites.'
    }, {'SkillID': 402, 'Title': 'Remove snow.'}, {
      'SkillID': 412,
      'Title': 'Dispose of trash or waste materials.'
    }, {'SkillID': 408, 'Title': 'Remove debris from work sites.'}, {
      'SkillID': 936,
      'Title': 'Plant greenery to improve landscape appearance.'
    }, {'SkillID': 934, 'Title': 'Cultivate lawns, turf, or gardens.'}, {
      'SkillID': 939,
      'Title': 'Irrigate lawns, trees, or plants.'
    }, {'SkillID': 957, 'Title': 'Install equipment to protect or support trees.'}
  ]
};


export const courseDetail = {
  'CourseDetails': {
    'CourseID':225,
    'CourseTitle': 'Certificate of Professional Cookery',
    'ProviderName': 'Whitireia Polytechnic',
    'Intro': '<p>Intro goes here ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>',
    'Blurb': '<h2>Body heading style what can I learn during this course?</h2>\n<p>Style for body copy is like this. Food safety and hygiene, first aid, theory of catering principles, practical applications of cooking.</p>\n<h2>What can I expect out of this course?</h2>\n<p>Graduates will have the necessary knowledge, skills and the internationally recognised City and Guilds International Certificate and Diploma in Cookery, to secure employment in the hospitality industry.</p>\n<p>Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href=\'javscript:void: 0\'>More about this course</a>.</p>',
    'Summary': {
      'Level': '4',
      'Location': 'Porirua',
      'VocationalPathways': [
      'Construction and infrastructure',
      'Manufacturing and technology'
      ]
    },
    'Link': 'http:\/\/careers.local\/qualifications\/view\/MN4430\/6010'
  },
  'NextSteps': {
    'Title': 'Take the next step',
    'Actions': [
      {
        'ActionID': 900,
        'Title': 'Action 1',
        'IsInActionPlan': false
      },
      {
        'ActionID': 901,
        'Title': 'Action 2',
        'IsInActionPlan': false
      },
      {
        'ActionID': 902,
        'Title': 'Action 3',
        'IsInActionPlan': false
      }
    ]
  },
  'BarriersPanel': {
    'Title': 'Worried about something?',
    'Barriers': [
      {
        'Title': 'Barrier 1',
        'Summary': '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>',
        'Actions': [
          {
            'ActionID': 218,
            'Title': 'Something I have to do to get started',
            'IsInActionPlan': false
          },
          {
            'ActionID': 219,
            'Title': 'Something I have to do to get started',
            'IsInActionPlan': false
          }
        ]
      },
      {
        'Title': 'Barrier 2',
        'Summary': '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>',
        'Actions': [
          {
            'ActionID': 228,
            'Title': 'Something I have to do to get started',
            'IsInActionPlan': false
          },
          {
            'ActionID': 229,
            'Title': 'Something I have to do to get started',
            'IsInActionPlan': false
          }
        ]
      },
      {
        'Title': 'Barrier 3',
        'Summary': '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>',
        'Actions': [
          {
            'ActionID': 238,
            'Title': 'Something I have to do to get started',
            'IsInActionPlan': false
          },
          {
            'ActionID': 239,
            'Title': 'Something I have to do to get started',
            'IsInActionPlan': false
          }
        ]
      }
    ]
  },
  'Jobs': {
    'Title': 'This course can help you get these jobs:',
    'JobsCards': [
      {
        'JobID': 4,
        'Closed': false,
        'Flipped': false,
        'Filtered': false,
        'Title': 'Software Engineer',
        'Description': 'Researches, designs, develops and maintains software systems along with hardware development for medical, scientific, and industrial purposes.',
        'Interests': [
          'Gardening',
          'Helping people',
          'Cars'
        ],
        'WorkConditions': [
          'Flexible hours',
          'Business hours',
          'Inside',
          'Outside',
          'Regular hours'
        ],
        'VocationalPathways': [
          'Social and community services',
          'Manufacturing and technology'
        ],
        'Regions': [
          'Auckland',
          'Canterbury',
          'Nelson',
        ],
        'Image': '../src/assets/images/placeholders/software-engineer.jpg',
        'SkillsMatch': 80,
        'Interest': 70,
        'Demand': 20,
        'Pay': '$15–$40',
        'PerTime': 'per year',
        'Skills': [
          'Examine characteristics or behavior of living organisms.',
          'Research methods to improve food products.',
          'Test quality of materials or finished products.',
          'Evaluate quality of materials or products.',
          'Analyze chemical compounds or substances.',
          'Clean objects.',
          'Prepare biological samples for testing or analysis.'
        ]
      },
      {
        'JobID': 5,
        'Closed': false,
        'Flipped': true,
        'Filtered': false,
        'Title': 'Human Resources',
        'Description': 'Plans, directs, and/or coordinates all human resource activities and staff of an organization.',
        'Interests': [
          'Gardening',
          'Helping people',
          'Cars'
        ],
        'WorkConditions': [
          'Flexible hours',
          'Business hours',
          'Inside',
          'Outside',
          'Regular hours'
        ],
        'VocationalPathways': [
          'Social and community services',
          'Manufacturing and technology'
        ],
        'Regions': [
          'Auckland',
          'Nelson'
        ],
        'Image': '../src/assets/images/placeholders/human-resources.jpg',
        'SkillsMatch': 10,
        'Interest': 40,
        'Demand': 30,
        'Pay': '$120–$140',
        'PerTime': 'per year',
        'Skills': [
          'Monitor operational procedures in technical environments to ensure conformance to standards.',
          'Interpret research or operational data.',
          'Collect biological specimens.',
          'Set up laboratory or field equipment.',
          'Care for plants or animals.'
        ]
      },
      {
        'JobID': 6,
        'Closed': false,
        'Flipped': false,
        'Filtered': false,
        'Title': 'Dental Hygienist',
        'Description': 'Assists dentists in diagnostic and therapeutic aspects of a group or private dental practice.',
        'Interests': [
          'Gardening',
          'Helping people',
          'Cars'
        ],
        'WorkConditions': [
          'Flexible hours',
          'Business hours',
          'Inside',
          'Outside',
          'Regular hours'
        ],
        'VocationalPathways': [
          'Social and community services',
          'Manufacturing and technology'
        ],
        'Region': [
          'Auckland',
          'Bay of Plenty'
        ],
        'Image': '../src/assets/images/placeholders/dental-hygienist.jpg',
        'SkillsMatch': 100,
        'Interest': 60,
        'Demand': 90,
        'Pay': '$180–$340',
        'PerTime': 'per year',
        'Skills': []
      }
    ]
  },
  'Courses': {
    'Title': 'Other providers who offer this course:',
      'Institutions':[
      {
        'CourseID':12,
        'Closed':false,
        'Title':'Golden Bay Work Centre Trust',
        'Location':'Canterbury'
      },
      {
        'CourseID':13,
        'Closed':false,
        'Title':'Skills Update Training Institute',
        'Location':'Taupo'
      },
      {
        'CourseID':14,
        'Closed':false,
        'Title':'Turanga Ararau',
        'Location':'Wellington'
      }
    ]
  }
}

