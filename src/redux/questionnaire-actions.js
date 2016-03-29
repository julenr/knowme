/**
 * Created by jr1500 on 19/10/15.
 */
import axios from 'axios';
import store from './create-store';
import _ from 'lodash';


const appID = document.getElementsByTagName('body')[0].getAttribute('data-application-id');

if (__DEV__){
  var fakeData = require('./fake-data');
}

export function showVideo() {
  return {
    type: 'SHOW_VIDEO'
  }
}

export function hideVideo() {
  return {
    type: 'HIDE_VIDEO'
  }
}

export function submitChangeAnswer(questionID, response, questionType) {
  switch (questionType) {
    case 'MultipleChoice':
      if(response === undefined) {
        return responseClickedAlternativeOfMultipleChoice(questionID);
      }
      return responseClickedMultipleChoice(questionID, response);
    case 'SingleChoice':
      if(response === undefined) {
        return responseClickedAlternativeOfSingleChoice(questionID);
      }
      return responseClickedSingleChoice(questionID, response);
    case 'YesNo':
      if(response === undefined) {
        return responseClickedAlternativeOfSingleChoice(questionID);
      }
      return clickedYesNo(questionID, response);
    case 'TextInput':
      if(response === undefined) {
        return responseClickedAlternativeOfSingleChoice(questionID);
      }
      return setInputText(questionID, response);
    case 'TypeAhead':
      if(response === undefined) {
        return responseClickedAlternativeOfSingleChoice(questionID);
      }
      return setTypeAheadText(questionID, response);
    case 'TagCloud':
      return responseClickedTagCloud(questionID, response);
    //no change answer behaviour for EndForm question type
  }
}

export function responseClickedMultipleChoice(questionID, responseID) {
  return {
    type: 'RESPONSE_CLICKED_MULTIPLE_CHOICE',
    questionID,
    responseID
  }
}

export function responseClickedAlternativeOfMultipleChoice(questionID) {
  return {
    type: 'RESPONSE_CLICKED_ALTERNATIVE_OF_MULTIPLE_CHOICE',
    questionID
  }
}

export function showMoreOptions(questionID) {
  return {
    type: 'SHOW_MORE_OPTIONS',
    questionID
  }
}

export function responseClickedTagCloud(questionID, responseID) {
  return {
    type: 'RESPONSE_CLICKED_TAG_CLOUD',
    questionID,
    responseID
  }
}

export function responseClickedSingleChoice(questionID, responseID) {
  return {
    type: 'RESPONSE_CLICKED_SINGLE_CHOICE',
    questionID,
    responseID
  }
}

export function responseClickedAlternativeOfSingleChoice(questionID) {
  return {
    type: 'RESPONSE_CLICKED_ALTERNATIVE_OF_SINGLE_CHOICE',
    questionID
  }
}

export function clickedYesNo(questionID, responseID) {
  return {
    type: 'CLICKED_YES_NO',
    questionID,
    responseID
  }
}

export function closeChangeQuestionnaireModal() {
  return {
    type: 'CLOSE_QUESTIONNAIRE_MODAL'
  }
}

export function changeCurrentQuestion() {
  return {
    type: 'CHANGE_CURRENT_QUESTION'
  }
}

export function setInputText(questionID, text) {
  return {
    type: 'SET_INPUT_TEXT',
    questionID,
    text
  }
}

export function setTypeAheadText(questionID, text) {
  return {
    type: 'SET_INPUT_TYPE_AHEAD',
    questionID,
    text
  }
}

export function setFinalTypeAheadText(questionID, text) {
  return {
    type: 'SET_FINAL_INPUT_TYPE_AHEAD',
    questionID,
    text
  }
}

export function loadTypeAhead(text, endpoint) {
  return {
    types: ['DUMP_DATA_INTO_TYPE_AHEAD_REQUEST', 'DUMP_DATA_INTO_TYPE_AHEAD_SUCCESS', 'DUMP_DATA_INTO_TYPE_AHEAD_FAILURE'],
    promise: () => {
      return axios.get(`/api/skills-transition-tool/${endpoint}/${text}`)
        .then(function (response) {
          return {data: response.data.Results};
        })
        .catch(function (response) {
          console.log(response);
          if (__DEV__) {
            console.log('Using fake data for Type Ahead');
            return {data: _.clone(fakeData.typeAheadData.Results, true)};
          }
        });
    }
  }
}

export function setMemberName(name) {
  return {
    type: 'SET_MEMBER_NAME',
    name
  }
}

export function selectAllTagCloud(questionID) {
  return {
    type: 'SELECT_ALL_TAG_CLOUD',
    questionID
  }
}

export function addSkillToQuestion(questionID, value) {
  return {
    type: 'ADD_SKILLS_INTO_TAG_CLOUD',
    questionID,
    value
  }
}

export function dumpSkillsIntoTagCloud() {
  return {
    types: ['DUMP_SKILLS_INTO_TAG_CLOUD_REQUEST', 'DUMP_SKILLS_INTO_TAG_CLOUD_SUCCESS', 'DUMP_SKILLS_INTO_TAG_CLOUD_FAILURE'],
    promise: () => {
      let state = store.getState();
      return new Promise((resolve, reject) => {
        // Just check where the skills are loaded and then copy them into tag cloud
        const interval = setInterval(() => {
          if(!state._questionnaire.data.Skills.Loading) {
            clearInterval(interval);
            resolve();
          }
        }, 50);
      });
    }
  }
}

export function firstQuestion() {
  return {
    type: 'FIRST_QUESTION',
  }
}

export function setNextQuestionId(nextQuestionId) {
  return {
    type: 'SET_NEXT_QUESTION_ID',
    ID: nextQuestionId
  }
}

export function nextQuestion(questionID, nextQuestionID) {
  return {
    types: ['NEXT_QUESTION', 'JOBS_COUNT_SUCCESS', 'JOBS_COUNT_FAILURE'],
    promise: () => {
      let state = store.getState();
      let listType = state._questionnaire.data.ListTypes.Current;
      if(listType) {
        return axios.post(`/api/skills-transition-tool/listcount/${appID}/${listType}`, state._questionnaire.data)
          .then(function (response) {
            return {count: response.data.Count};
          })
          .catch(function (response) {
            console.log(response);
            if (__DEV__) {
              console.log('Using fake data');
              return {count: 10};
            }
          });
      }
      else {
        return new Promise(() => true).then( () => {return {count:0}} ).catch(() => {return {count:0}});
      }
    },
    questionID,
    nextQuestionID
  }
}

export function getListViewData() {
  return {
    types: ['GET_JOBS_REQUEST', 'GET_JOBS_SUCCESS', 'GET_JOBS_FAILURE'],
    promise: () => {
      let state = store.getState();
      let listType = state._questionnaire.data.ListTypes.Current;
      return axios.post(`/api/skills-transition-tool/listview/${appID}/${listType}`, state._questionnaire.data)
        .then(function (response) {
          response.data.Filters = _.clone(state._listViewData.data.Filters, true); //Keep the original Filters

          //TODO: This line needs to be removed when Darren fix it changing Institutions for CourseCards !!!!
          response.data.InstitutionsPanel.CourseCards = [];

          response.data.Filters.Region = (state._questionnaire.data.Regions.Current === null) ? 'Anywhere': state._questionnaire.data.Regions.Current;
          return {data: response.data};
        })
        .catch(function (response) {
          console.log(response);
          if (__DEV__) {
            console.log('Using fake data');
            fakeData.listViewData.ListType = listType;
            fakeData.listViewData.Filters = _.clone(state._listViewData.data.Filters, true); //Keep the original Filters
            return {data: _.clone(fakeData.listViewData, true)};
          }
        });
    }
  }
}

export function setListViewType(listType) {
  return {
    type: 'SET_LIST_VIEW_TYPE',
    listType
  }
}

export function logIn(Email, Password, Remember) {
  return {
    types: ['AUTHENTICATION_REQUEST', 'AUTHENTICATION_SUCCESS', 'AUTHENTICATION_FAILURE'],
    promise: () => {
      const postData = {
        AuthenticationMethod: 'MCPMemberAuthenticator',
        Email, Password, Remember
      }
      return axios.post(`/api/skills-transition-tool/login/${appID}`, postData)
        .then(function (response) {
          return {data: response.data.Member};
        })
        .catch(function (response) {
          console.log(response);
          if (__DEV__) {
            if(Email === 'admin@admin.com' && Password === 'admin') {
              return {
                data:{
                  UserID:119,
                  SessionID: 'nc7gphup5f4g0mkneni59sk6e1',
                  Region: null,
                  Name: 'Bob',
                  Gender: '',
                  Ethnicity: ''
                }
              };
            } else {
              throw error('Authentication failed');
            }
          } else {
            throw error(response.Error);
          }
        });
    }
  }
}

export function logOut() {
  return {
    types: ['LOGOUT_REQUEST', 'LOGOUT_SUCCESS', 'LOGOUT_FAILURE'],
    promise: () => {
      return axios.post(`/api/skills-transition-tool/logout`)
        .then(function (response) {
          return {data: 'ok'};
        })
        .catch(function (response) {
          console.log(response);
          if (__DEV__) {
            return {true};
          } else {
            throw error(response);
          }
        });
    }
  }
}

export function closeLoginModal() {
  return {
    type: 'CLOSE_LOGIN_MODAL'
  }
}
export function resetLoginUserID() {
  return {
    type: 'RESET_USER_LOGIN_ID'
  }
}