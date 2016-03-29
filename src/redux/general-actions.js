import axios from 'axios';
import _ from 'lodash';

const appID = document.getElementsByTagName('body')[0].getAttribute('data-application-id');

if (__DEV__){
  var fakeData = require('./fake-data');
}

export function getQuestionnaire() {
  return {
    types: ['GET_QUESTIONNAIRE_REQUEST', 'GET_QUESTIONNAIRE_SUCCESS', 'GET_QUESTIONNAIRE_FAILURE'],
    promise: () => {
      return axios.get(`/api/skills-transition-tool/form/${appID}`)
        .then(function (response) {
          response.data.Skills.Loading = false;
          response.data.Skills.SkillsTags = [];
          return {data: response.data};
        })
        .catch(function (response) {
          console.log(response);
          if (__DEV__) {
            console.log('Using fake data');
            let data = _.clone(fakeData.questionnaire, true);
            data.Skills.Loading = false;
            data.Skills.SkillsTags = [];
            return {data: data};
          } else {
            throw error(response);
          }
        });
    }
  }
}

export function loadSavedState() {
  return {
    types: ['GET_SAVED_STATE_REQUEST', 'GET_SAVED_STATE_SUCCESS', 'GET_SAVED_STATE_FAILURE'],
    promise: () => {
      return axios.get(`/api/skills-transition-tool/load/${appID}`)
        .then(function (response) {
          return response;
        })
        .catch(function (response) {
          console.log(response);
          throw error(response);
        });
    }
  }
}

export function closeDetailsSavedModal() {
  return {
    type: 'CLOSE_DETAILS_SAVED_MODAL'
  }
}

export function getLinkedPagesHTML(URLSegment) {
  return {
    types: ['GET_MAIN_PAGE_REQUEST', 'GET_MAIN_PAGE_SUCCESS', 'GET_MAIN_PAGE_FAILURE'],
    promise: () => {
      return axios.get(`/api/skills-transition-tool/content/${appID}/${URLSegment}`)
        .then(function (response) {
          return {data: response.data};
        })
        .catch(function (response) {
          console.log(response);
          if (__DEV__) {
            console.log('Using fake data');
            return {data: _.clone(fakeData.mainContentHTML, true)};
          } else {
            throw error(response);
          }
        });
    }
  }
}

export function getFooterData() {
  return {
    types: ['GET_FOOTER_DATA_REQUEST', 'GET_FOOTER_DATA_SUCCESS', 'GET_FOOTER_DATA_FAILURE'],
    promise: () => {
      return axios.get(`/api/skills-transition-tool/container/${appID}`)
        .then(function (response) {
          return {data: response.data};
        })
        .catch(function (response) {
          console.log(response);
          if (__DEV__) {
            console.log('Using fake data');
            return {data: _.clone(fakeData.footerData, true)};
          } else {
            throw error(response);
          }
        });
    }
  }
}

export function currentJobChanged(newJob) {
  return {
    types: ['GET_JOB_SKILLS_REQUEST', 'GET_JOB_SKILLS_SUCCESS', 'GET_JOB_SKILLS_FAILURE'],
    promise: () => {
      return axios.get(`/api/skills-transition-tool/job-skills/${newJob}`)
        .then(function (response) {
          return {data: response.data.Results};
        })
        .catch(function (response) {
          console.log(response);
          if (__DEV__) {
            console.log('Using fake data');
            return {data: _.clone(fakeData.jobSkills.Results, true)};
          } else {
            throw error(response);
          }
        });
    }
  }
}

export function openSkillsModal() {
  return {
    type: 'SHOW_SKILLS_MODAL'
  }
}

export function closeSkillsModal() {
  return {
    type: 'CLOSE_SKILLS_MODAL'
  }
}

export function openLoginModal() {
  return {
    type: 'SHOW_LOGIN_MODAL'
  }
}

export function openAddSkillsModal(questionID) {
  return {
    type: 'SHOW_ADD_SKILLS_MODAL',
    questionID
  }
}

export function addSkillToTag() {
  return {
    type: ''
  }
}

export function closeAddSkillsModal() {
  return {
    type: 'CLOSE_ADD_SKILLS_MODAL'
  }
}

export function showMoreAddSkillsModal() {
  return {
    type: 'SHOW_MORE_OPTIONS_ADD_SKILLS_MODAL'
  }
}

export function getJobSkills(jobSelected) {
  return {
    types: ['GET_JOB_SKILLS_CHECK_MODAL_REQUEST', 'GET_JOB_SKILLS_CHECK_MODAL_SUCCESS', 'GET_JOB_SKILLS_CHECK_MODAL_FAILURE'],
    promise: () => {
      return axios.get(`/api/skills-transition-tool/job-skills/${jobSelected}`)
        .then(function (response) {
          return {data: response.data.Results};
        })
        .catch(function (response) {
          console.log(response);
          if (__DEV__) {
            console.log('Using fake data');
            return {data: _.clone(fakeData.jobSkills.Results.slice(), true)};
          } else {
            throw error(response);
          }
        });
    },
    jobSelected
  }
}

export function loadTypeAheadModal(text) {
  return {
    types: ['DUMP_DATA_INTO_TYPE_AHEAD_REQUEST', 'DUMP_DATA_INTO_TYPE_AHEAD_SUCCESS', 'DUMP_DATA_INTO_TYPE_AHEAD_FAILURE'],
    promise: () => {
      return axios.get(`/api/skills-transition-tool/skills/${text}`)
        .then(function (response) {
          return {data: response.data.Results};
        })
        .catch(function (response) {
          console.log(response);
          if (__DEV__) {
            console.log('Using fake data for Type Ahead');
            return {data: _.clone(fakeData.typeAheadData.Results, true)};
          } else {
            throw error(response);
          }
        });
    }
  }
}

export function openCheckSkillsModal() {
  return {
    type: 'SHOW_CHECK_SKILLS_MODAL'
  }
}

export function closeCheckSkillsModal() {
  return {
    type: 'CLOSE_CHECK_SKILLS_MODAL'
  }
}

export function CheckJobPopularSkill(idxSkill) {
  return {
    type: 'CHECK_JOB_POPULAR_SKILL',
    idxSkill
  }
}

export function addCheckedSkills() {
  return {
    type: 'ADD_CHECKED_SKILLS'
  }
}

export function removeSelectedSkill(skill) {
  return {
    type: 'REMOVE_SKILL_FROM_SELECTED',
    skill
  }
}

export function backupSkills() {
  return {
    type: 'BACKUP_SKILLS'
  }
}

export function restoreSkills() {
  return {
    type: 'RESTORE_SKILLS'
  }
}

export function setCurrentRoute(route) {
  return {
    type: 'SET_CURRENT_ROUTE',
    route
  }
}

export function openResetToolModal() {
  return {
    type: 'OPEN_RESET_TOOL_MODAL'
  }
}

export function closeResetToolModal() {
  return {
    type: 'CLOSE_RESET_TOOL_MODAL'
  }
}

export function resetTool() {
  return {
    type: 'RESET_TOOL'
  }
}

export function closeVocationalPathwaysModal() {
  return {
    type: 'CLOSE_VOCATIONAL_PATHWAYS_MODAL'
  }
}
