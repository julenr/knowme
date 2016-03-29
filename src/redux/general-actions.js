import _ from 'lodash';

if (__DEV__){
  var fakeData = require('./fake-data');
}

export function closeCheckSkillsModal() {
  return {
    type: 'CLOSE_CHECK_SKILLS_MODAL'
  }
}
