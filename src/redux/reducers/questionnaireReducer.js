/**
 * Created by jr1500 on 7/11/15.
 */

import _ from 'lodash';
import uuid from 'node-uuid';
import { replaceStrValues } from '../../libs/helpers';

const initialData = {
  loaded: false,
  ShowLoginModal: false,
  showDetailsSavedModal: false,
  History: [],
  ChangeQuestionnaireModal: false,
  TypeAheadItemsContainer: [],
  data: {
    Jobs: {Current: null},
    Member: {UserID: null},
    Questionnaire: [],
    Questions: [],
    refresh: false,
    Skills: {
      Selected: [],
      Current: []
    },
    'ProgressBar': {
      'Results': 0,
      'ListViewLinkText': 'Show me!',
      'ListViewLinkMinResults': 3,
      'ListViewLinkMaxResults': 24
    }
  }
}

// QUESTIONNAIRE REDUCER
export function _questionnaire(state = initialData, action = {}) {
  let newState = {...state };

  // Check if the user is modifying a previous question
  if(action.type !== 'NEXT_QUESTION' &&
    (action.questionID < newState.data.Questionnaire.length-1 &&
    ( action.type !== 'JOBS_COUNT_SUCCESS' && action.type !== 'JOBS_COUNT_FAILURE'))
  ) {
      newState.ToChangeQuestionID = action.questionID;
      if(action.hasOwnProperty('responseID')) {
        newState.ToChangeResponse = action.responseID;
      } else if(action.hasOwnProperty('text')) {
        newState.ToChangeResponse = action.text;
      } else {
        newState.ToChangeResponse = undefined;
      }
      newState.ChangeQuestionnaireModal = true;
      return newState;
  }

  switch (action.type) {
    case 'CLOSE_QUESTIONNAIRE_MODAL':
      newState.ChangeQuestionnaireModal = false;
      return newState;

    case 'CHANGE_CURRENT_QUESTION':
      newState.data = newState.History[newState.ToChangeQuestionID];
      newState.History = _.take(newState.History, newState.ToChangeQuestionID);
      return newState;

    case 'GET_QUESTIONNAIRE_REQUEST':
      return {
        ...state,
        loaded: false
      };
    case 'GET_QUESTIONNAIRE_SUCCESS':
      action.result.data.Questionnaire = []; // Initialize the questionnaire array
      action.result.data.Questionnaire.push( _.cloneDeep(action.result.data.Questions[0]));
      try {
        sessionStorage.clear();
      }
      catch(e) {
        console.log(e.message);
      }
      return {
        ...state,
        data: action.result.data,
        loaded: true
      };
    case 'GET_QUESTIONNAIRE_FAILURE':
      return {
        ...state,
        loaded: true
      };

    case 'SHOW_VIDEO':
      newState.data.toShowVideo = true;
      return newState;
    case 'HIDE_VIDEO':
      newState.data.toShowVideo = false;
      return newState;
    case 'GET_JOB_SKILLS_REQUEST':
      newState.data.Skills.Loading = true;
      return newState;
    case 'GET_JOB_SKILLS_SUCCESS':
      newState.data.Skills.SkillsTags = action.result.data;
      newState.data.Skills.Loading = false;
      return newState;
    case 'GET_JOB_SKILLS_FAILURE':
      newState.data.Skills.SkillsTags = action.result.data;
      newState.data.Skills.Loading = false;
      return newState;

    case 'RESPONSE_CLICKED_MULTIPLE_CHOICE': {
      let question = newState.data.Questionnaire[action.questionID];
      let entityType = question.QuestionResponses[action.responseID].EntityType;
      if (entityType !== 'None') {
        let entityData = question.QuestionResponses[action.responseID].EntityData;
        newState.data[entityType].Current = entityData;
        newState.data[entityType].Selected.push(entityData);
      }
      question.QuestionResponses[action.responseID].Selected = !question.QuestionResponses[action.responseID].Selected;
      question.Selected = null;
      newState.data.refresh = uuid.v1();
      return newState;
    }

    case 'RESPONSE_CLICKED_ALTERNATIVE_OF_MULTIPLE_CHOICE': {
      let question = newState.data.Questionnaire[action.questionID];

      //deselect all the others
      question.QuestionResponses.forEach((tag) => {
        tag.Selected = false;
      });

      question.Selected = -1;//select the alternative
      newState.data.refresh = uuid.v1();
      return newState;
    }

    case 'SHOW_MORE_OPTIONS': {
      let question = newState.data.Questionnaire[action.questionID];
      question.Visible = 1000;
      newState.data.refresh = uuid.v1();
      return newState;
    }

    // TAG CLOUD ACTIONS
    case 'RESPONSE_CLICKED_TAG_CLOUD': {
      let question = newState.data.Questionnaire[action.questionID];
      let skillTitle = question.QuestionResponses[action.responseID].Title;
      let response = question.QuestionResponses[action.responseID];
      response.Selected = !response.Selected;
      if(response.Selected) {
        newState.data.Skills.Selected.push(skillTitle);
        newState.data.Skills.Current = skillTitle;
      }
      else {
        let index = newState.data.Skills.Selected.indexOf(skillTitle);
        if (index > -1) {
          newState.data.Skills.Selected.splice(index, 1);
        }
      }
      newState.data.refresh = uuid.v1();
      return newState;
    }
    case 'SELECT_ALL_TAG_CLOUD': {
      state.data.Questionnaire[action.questionID].QuestionResponses.forEach((tag) => {
        tag.Selected = true;
        newState.data.Skills.Selected.push(tag.Title);
        return tag;
      });
      newState.data.refresh = uuid.v1();
      return newState;
    }
    case 'REMOVE_SKILL_FROM_SELECTED': {
      let idxSelectedSkill = _.findIndex(newState.data.Skills.Selected, (skill) => (action.skill === skill));
      newState.data.Skills.Selected.splice(idxSelectedSkill, 1);
      newState.data.refresh = uuid.v1();
      return newState;
    }
    case 'ADD_SKILLS_INTO_TAG_CLOUD': {
      if(action.questionID) { // Only if Add Skill has been called from a tag cloud question
        let question = _.find(newState.data.Questionnaire, (question) => {return question.ID === action.questionID});
        question.QuestionResponses.push({
          Title: action.value,
          Selected: true
        })
      }
      newState.data.Skills.Selected.push(action.value);
      newState.data.Skills.Current = action.value;
      newState.data.refresh = uuid.v1();
      return newState;
    }
    case 'DUMP_SKILLS_INTO_TAG_CLOUD_REQUEST': {
      const questionID = newState.data.Questionnaire.length-1;
      newState.data.Questionnaire[questionID].Loaded = false;
      return newState;
    }
    case 'DUMP_SKILLS_INTO_TAG_CLOUD_SUCCESS': {
      const questionID = newState.data.Questionnaire.length-1;
      newState.data.Questionnaire[questionID].QuestionResponses = newState.data.Skills.SkillsTags.slice(0);
      newState.data.Questionnaire[questionID].QuestionResponses.map((skill) => {
        skill.Selected = true;
        newState.data.Skills.Selected.push(skill.Title);
      });
      newState.data.Questionnaire[questionID].Loaded = true;
      return newState;
    }
    case 'DUMP_SKILLS_INTO_TAG_CLOUD_FAILURE': {
      const questionID = newState.data.Questionnaire.length-1;
      newState.data.Questionnaire[questionID].Loaded = true;
      return newState;
    }

    case 'RESPONSE_CLICKED_SINGLE_CHOICE': {
      let question = newState.data.Questionnaire[action.questionID];
      let entityType = question.QuestionResponses[action.responseID].EntityType;
      if(entityType !== 'None') {
        let entityData = question.QuestionResponses[action.responseID].EntityData;
        newState.data[entityType].Current = entityData;
        newState.data[entityType].Selected.push(entityData);
      }

      question.Selected = action.responseID;
      newState.data.refresh = uuid.v1();
      return newState;
    }

    case 'RESPONSE_CLICKED_ALTERNATIVE_OF_SINGLE_CHOICE': {
      let question = newState.data.Questionnaire[action.questionID];
      question.Selected = -1;
      newState.data.refresh = uuid.v1();
      return newState;
    }

    case 'CLICKED_YES_NO': {
      let question = newState.data.Questionnaire[action.questionID];
      let entityType = question.QuestionResponses[action.responseID].EntityType;
      if(entityType !== 'None') {
        let entityData = question.QuestionResponses[action.responseID].EntityData;
        newState.data[entityType].Current = entityData;
        newState.data[entityType].Selected.push(entityData);
      }

      question.Selected = action.responseID;
      newState.data.refresh = uuid.v1();
      return newState;
    }
    case 'SET_INPUT_TEXT': {
      const question = newState.data.Questionnaire[action.questionID]
      question.Text = action.text;
      if(question.Endpoint) { //Endpoint tell us if another part of the state needs to be updated with the same value
        let splits = question.Endpoint.split('.', 2);
        newState.data[splits[0]][splits[1]] = action.text;
      }
      newState.data.refresh = uuid.v1();
      return newState;
    }
    case 'SET_INPUT_TYPE_AHEAD':
      newState.data.Questionnaire[action.questionID].Text = action.text;
      newState.data.refresh = uuid.v1();
      return newState;
    case 'SET_FINAL_INPUT_TYPE_AHEAD':
      let endPoint = newState.data.Questionnaire[action.questionID].Endpoint;
      newState.data[endPoint].Current = action.text;
      newState.data[endPoint].Selected.push(action.text);
      newState.data.refresh = uuid.v1();
      return newState;

    case 'DUMP_DATA_INTO_TYPE_AHEAD_REQUEST':
      newState.TypeAheadItemsContainer = [];
      return newState;
    case 'DUMP_DATA_INTO_TYPE_AHEAD_SUCCESS': {
      newState.TypeAheadItemsContainer = action.result.data;
      return newState;
    }
    case 'DUMP_DATA_INTO_TYPE_AHEAD_FAILURE': {
      newState.TypeAheadItemsContainer = [];
      return newState;
    }

    case 'SET_MEMBER_NAME':
      newState.data.Member.Name = action.name;
      return newState;

    case 'SET_NEXT_QUESTION_ID':
      newState.ToChangeNextQuestionID = action.ID;
      return newState;

    case 'NEXT_QUESTION': {
      let nextQuestionIndex = _.findIndex(newState.data.Questions, (q) => (q.ID === action.nextQuestionID));
      let question = _.cloneDeep(newState.data.Questions[nextQuestionIndex]);

      // Keep the Questionnaire state at each Question
      newState.History.push( _.cloneDeep(newState.data) );

      question.Loaded = false; // Force to load skills in tag cloud each time a Tag Cloud is created

      if(question.QuestionType !== 'EndForm'){ //Replace tokens
        question.Description = replaceStrValues(question.Description);
        question.QuestionResponses.forEach((response) => { response.ResponseText = replaceStrValues(response.ResponseText )});
      }

      if(question.QuestionType === 'Typeahead') { // Clean the type ahead results container
        newState.TypeAheadItemsContainer = [];
      }

      newState.data.Questionnaire.push( question );

      // This check is if in the case that the next question is a repeated question and does not have to refresh the progress bar
      if(newState.data.ProgressBar.Percentage < newState.data.Questions[nextQuestionIndex].MilestonePercentage) {
        newState.data.ProgressBar.Percentage = newState.data.Questions[nextQuestionIndex].MilestonePercentage;
      }
      newState.data.refresh = uuid.v1();
      return newState;
    }
    case 'JOBS_COUNT_SUCCESS':
      let nextQuestionIndex = _.findIndex(newState.data.Questions, (q) => (q.ID === action.nextQuestionID));
      newState.data.ProgressBar.Results = action.result.count;
      if(newState.data.Questions[nextQuestionIndex].MilestoneText) {}
      newState.data.ProgressBar.Text = replaceStrValues(newState.data.Questions[nextQuestionIndex].MilestoneText);
      return newState;
    case 'JOBS_COUNT_FAILURE':
      return newState;
    case 'SET_LIST_VIEW_TYPE': {
      newState.data.ListTypes.Current = action.listType;
      return newState;
    }

    case 'AUTHENTICATION_REQUEST':
      newState.data.Authenticating = true;
      return newState;
    case 'AUTHENTICATION_SUCCESS':
      newState.data.Member = action.result.data;
      newState.data.Authenticating = false;
      newState.showLoginModal = false;
      newState.showDetailsSavedModal = true;
      return newState;
    case 'AUTHENTICATION_FAILURE':
      newState.data.Member.UserID = -1;
      newState.data.Authenticating = false;
      newState.data.refresh = uuid.v1();
      return newState;
    case 'SHOW_LOGIN_MODAL':
      return {
        ...state,
        showLoginModal: true
      };
    case 'CLOSE_LOGIN_MODAL':
      newState.showLoginModal = false;
      newState.data.Member.UserID = null;
      return newState;
    case 'RESET_USER_LOGIN_ID':
      newState.data.Member.UserID = null;
      return newState;
    case 'LOGOUT_REQUEST':
      newState.data.Authenticating = true;
      return newState;
    case 'LOGOUT_SUCCESS':
      newState.data.Authenticating = false;
      newState.data.Member.UserID = null;
      newState.data.refresh = uuid.v1();
      return newState;
    case 'LOGOUT_FAILURE':
      newState.data.Authenticating = false;
      return newState;

    case 'GET_SAVED_STATE_REQUEST':
      newState.loaded = false;
      return newState;
    case 'GET_SAVED_STATE_SUCCESS':
      newState = action.result.data._questionnaire;
      newState.showDetailsSavedModal = false;
      newState.loaded = true;
      return newState;
    case 'GET_SAVED_STATE_FAILURE':
      newState.loaded = true;
      newState.showDetailsSavedModal = false;
      return newState;
    case 'CLOSE_DETAILS_SAVED_MODAL':
      newState.showDetailsSavedModal = false;
      return newState;
    default:
      return state;
  }
}
