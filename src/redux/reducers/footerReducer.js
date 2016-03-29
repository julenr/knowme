/**
 * Created by jr1500 on 7/11/15.
 */


import uuid from 'node-uuid';
import store from '../create-store';
import _ from 'lodash';

const footerInitialState = {
  loaded: false,
  ShowVocationalPathwaysModal: false,
    data: {
    PopularJobs: {
      Jobs: [],
      Visible: 0,
      Skills: []
    },
    CopyOfSkills: []
  }
}

// FOOTER DATA REDUCER
export function _footerData(state = footerInitialState, action = {}) {
  let newState = {...state };

  switch (action.type) {
    case 'GET_SAVED_STATE_SUCCESS':
      newState = action.result.data._footerData;
      return newState;
    case 'GET_FOOTER_DATA_REQUEST':
      return {
        ...state,
        loaded: false
      };
    case 'GET_FOOTER_DATA_SUCCESS':
      newState.data = action.result.data;
      newState.data.PopularJobs.Skills = [];
      newState.data.Regions.push('Anywhere');
      newState.loaded = true;
      newState.showSkillsModal = false;
      newState.showAddSkillsModal = false;
      newState.addSkillsToQuestionID = null;
      newState.showCheckSkillsModal = false;
      newState.showResetToolModal = false;
      newState.ShowVocationalPathwaysModal = false;
      return newState;
    case 'GET_FOOTER_DATA_FAILURE':
      newState.data = action.result.data;
      newState.data.PopularJobs.Skills = [];
      newState.data.Regions.push('Anywhere');
      newState.loaded = true;
      newState.showSkillsModal = false;
      newState.showAddSkillsModal = false;
      newState.showCheckSkillsModal = false;
      newState.showResetToolModal = false;
      newState.ShowVocationalPathwaysModal = false;
      return newState;

    case 'SHOW_SKILLS_MODAL':
      newState.data.CopyOfSkills = _.clone(store.getState()._questionnaire.data.Skills.Selected, true);
      return {
        ...state,
        showSkillsModal: true
      };
    case 'CLOSE_SKILLS_MODAL':
      return {
        ...state,
        showSkillsModal: false
      };

    case 'CLOSE_VOCATIONAL_PATHWAYS_MODAL':
      newState.ShowVocationalPathwaysModal = false;
      return newState;
    case 'OPEN_VOCATIONAL_PATHWAYS_MODAL':
      newState.ShowVocationalPathwaysModal = true;
      return newState;


    case 'SHOW_ADD_SKILLS_MODAL':
      return {
        ...state,
        showAddSkillsModal: true,
        addSkillsToQuestionID: action.questionID
      };
    case 'CLOSE_ADD_SKILLS_MODAL':
      return {
        ...state,
        showAddSkillsModal: false,
        addSkillsToQuestionId: null
      };
    case 'SHOW_MORE_OPTIONS_ADD_SKILLS_MODAL':
      newState.data.PopularJobs.Visible = 1000;
      return newState;
    case 'SHOW_CHECK_SKILLS_MODAL':
      return {
        ...state,
        showCheckSkillsModal: true
      };
    case 'CLOSE_CHECK_SKILLS_MODAL':
      return {
        ...state,
        showCheckSkillsModal: false
      };
    case 'CHECK_JOB_POPULAR_SKILL':
      newState.data.PopularJobs.Skills[action.idxSkill].Selected = !newState.data.PopularJobs.Skills[action.idxSkill].Selected;
      newState.data.PopularJobs.Loading = uuid.v1();
      return newState;
    case 'ADD_CHECKED_SKILLS': {
      let selectedSkills = store.getState()._questionnaire.data.Skills.Selected;
      newState.data.PopularJobs.Skills.map((skill) => {
        if(skill.Selected && (_.findIndex(selectedSkills, (e) => (e === skill.Title)) === -1) ) {
          selectedSkills.push(skill.Title);
        }
      });
      newState.data.PopularJobs.Skills = [];
      return newState;
    }

    case 'RESTORE_SKILLS': {
      store.getState()._questionnaire.data.Skills.Selected = newState.data.CopyOfSkills;
      return newState;
    }
    case 'OPEN_RESET_TOOL_MODAL': {
      return {
        ...state,
        showResetToolModal: true
      };
    }
    case 'CLOSE_RESET_TOOL_MODAL': {
      return {
        ...state,
        showResetToolModal: false
      };
    }

    case 'GET_JOB_SKILLS_CHECK_MODAL_REQUEST':
      newState.data.PopularJobs.Loading = true;
      newState.data.PopularJobs.JobSelected = action.jobSelected;
      return newState;
    case 'GET_JOB_SKILLS_CHECK_MODAL_SUCCESS':
      newState.data.PopularJobs.Skills = action.result.data;
      newState.data.PopularJobs.Loading = false;
      return newState;
    case 'GET_JOB_SKILLS_CHECK_MODAL_FAILURE':
      newState.data.PopularJobs.Skills = action.result.data;
      newState.data.PopularJobs.Loading = false;
      return newState;
    default:
      return state;
  }
}
