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

/* List View Actions */
export function closeJobCard(jobID) {
  return {
    type: 'CLOSE_JOB_CARD',
    jobID
  }
}

export function filterJobCardsByCondition() {
  return {
    type: 'FILTER_JOB_CARDS_BY_CONDITION'
  }
}

export function removeJobCardCondition(condition) {
  return {
    type: 'REMOVE_JOB_CARD_FILTER_CONDITION',
    condition
  }
}

export function addJobCardCondition(condition) {
  return {
    type: 'ADD_JOB_CARD_FILTER_CONDITION',
    condition
  }
}

export function filterQualificationCardsByCondition() {
  return {
    type: 'FILTER_QUALIFICATION_CARDS_BY_CONDITION'
  }
}

export function qualificationCardDescriptionOverflow(qualificationID) {
  return {
    type: 'QUALIFICATION_CARD_DESCRIPTION_OVERFLOW',
    qualificationID
  }
}

export function showQualificationFullDescriptionModal() {
  return {
    type: 'OPEN_FULL_QUALIFICATION_CARD_DESCRIPTION'
  }
}
export function closeQualificationFullDescriptionModal() {
  return {
    type: 'CLOSE_FULL_QUALIFICATION_CARD_DESCRIPTION'
  }
}

export function removeQualificationCardCondition(condition) {
  return {
    type: 'REMOVE_QUALIFICATION_CARD_FILTER_CONDITION',
    condition
  }
}

export function addQualificationCardCondition(condition) {
  return {
    type: 'ADD_QUALIFICATION_CARD_FILTER_CONDITION',
    condition
  }
}

export function setRegionFilter(region) {
  return {
    type: 'SET_REGION_FILTER',
    region
  }
}

export function applyRegionFilter() {
  return {
    type: 'APPLY_REGION_FILTER'
  }
}

export function openAddPreferenceModal() {
  return {
    type: 'SHOW_ADD_PREFERENCE_MODAL'
  }
}

export function openEntryRequirementsModal() {
  return {
    type: 'SHOW_ENTRY_REQUIREMENTS_MODAL'
  }
}

export function closeEntryRequirementsModal() {
  return {
    type: 'CLOSE_ENTRY_REQUIREMENTS_MODAL'
  }
}

export function closeAddPreferenceModal() {
  return {
    type: 'CLOSE_ADD_PREFERENCE_MODAL'
  }
}

export function openJobCard(jobID) {
  return {
    type: 'OPEN_JOB_CARD',
    jobID
  }
}

export function flipJobCard(jobID) {
  return {
    type: 'FLIP_JOB_CARD',
    jobID
  }
}

export function flipQualificationCard(qualificationID) {
  return {
    type: 'FLIP_QUALIFICATION_CARD',
    qualificationID
  }
}
export function setCurrentJobID(jobCardID) {
  return {
    type: 'SET_CURRENT_JOB_CARD_ID',
    jobCardID
  }
}

export function setCurrentQualificationID(qualificationCardID) {
  return {
    type: 'SET_CURRENT_QUALIFICATION_CARD_ID',
    qualificationCardID
  }
}

export function openMatchSkillsModal(idJobCard) {
  return {
    type: 'SHOW_MATCH_SKILLS_MODAL',
    idJobCard
  }
}
export function closeMatchSkillsModal() {
  return {
    type: 'CLOSE_MATCH_SKILLS_MODAL'
  }
}

export function showAddSkillsModal() {
  return {
    type: 'SHOW_ADD_SKILLS_MODAL'
  }
}

export function closeUndoPanel() {
  return {
    type: 'CLOSE_UNDO_PANEL'
  }
}

export function closeHelpPanel(panelID) {
  return {
    type: 'CLOSE_HELP_PANEL',
    panelID
  }
}

export function increaseQualificationsCardsShown() {
  return {
    type: 'INCREASE_QUALIFICATIONS_CARDS_SHOWN'
  }
}

export function getQualificationsByJob(jobID) {
  return {
    types: ['GET_QUALIFICATIONS_BY_JOB_REQUEST', 'GET_QUALIFICATIONS_BY_JOB_SUCCESS', 'GET_QUALIFICATIONS_BY_JOB_FAILURE'],
    promise: () => {
      return axios.get(`/api/skills-transition-tool/job-qualifications/${appID}/${jobID}`)
          .then(function (response) {
            return {data: response.data};
          })
          .catch(function (response) {
            console.log(response);
            if (__DEV__) {
              console.log('Using fake data');
              let fakeCourses = {
                EntryRequirements: '\n<p>To become a conservator you need a tertiary qualification in conservation studies. Employers increasingly prefer candidates with a Master of Arts in conservation studies. This degree is only available overseas, in countries such as Australia, the United Kingdom and Canada.<\/p><h3>Qualifications available in Australia<\/h3>\n<ul>\n<li>The nearest university offering\u00a0a relevant\u00a0Master of Arts is the University of Melbourne, Australia. An undergraduates degree in subjects such as cultural heritage studies, archaeology, art anthropology, organic chemistry, science, art history, or fine arts is\u00a0needed to enter postgraduate training.<\/li>\n<li>The nearest\u00a0university offering a Bachelor of Cultural Heritage\u00a0Conservation is the University of Canberra, Australia.<\/li>\n<\/ul>\n<ul>\n<li><a title=\"Information on the Bachelor of Heritage, Museum and Conservation at Canberra University.\" href=\"http:\/\/www.canberra.edu.au\/coursesandunits\/course?course_cd=215JA\">University of Canberra website - information on the Bachelor of Heritage, Museums and Conservation<\/a><\/li>\n<li><a class=\"external\" href=\"http:\/\/www.victoria.ac.nz\/scps\/study\/postgraduate-study\/heritage-materials-science\/default.aspx\" target=\"_blank\">Victoria University of Wellington website - information on postgraduate programmes in heritage materials<\/a><\/li>\n<li><a class=\"external\" href=\"http:\/\/cultural-conservation.unimelb.edu.au\/students\/courses\/masters-coursework.html\" target=\"_blank\">University of Melbourne website - information on the Master of Cultural Material Conservation<\/a><\/li>\n<\/ul>\n',
                EntryRequirementsSummary: '<p>To become a conservator you need a tertiary qualification in conservation studies. Employers increasingly prefer candidates with a Master of Arts in conservation studies. This degree is only available overseas, in countries such as Australia, the United Kingdom and Canada.<\/p>',
                QualificationCards: fakeData.listViewData.QualificationsPanel.Courses
              };
              return {data: fakeCourses};
            } else {
              throw error(response);
            }
          });
    }
  }
}

export function getInstitutionByID(qualificationID) {
  return {
    types: ['GET_INSTITUTIONS_BY_QUALIFICATION_REQUEST', 'GET_INSTITUTIONS_BY_QUALIFICATION_SUCCESS', 'GET_INSTITUTIONS_BY_QUALIFICATION_FAILURE'],
    promise: () => {
      return axios.get(`/api/skills-transition-tool/qualification-courses/${appID}/${qualificationID}`)
          .then(function (response) {
            return {data: response.data.CourseCards};
          })
          .catch(function (response) {
            console.log(response);
            if (__DEV__) {
              console.log('Using fake data');
              return {data: _.clone(fakeData.listViewData.InstitutionsPanel.CourseCards, true)};
            }
          });
    }
  }
}

export function closeQualificationsPanel() {
  return {
    type: 'CLOSE_QUALIFICATIONS_PANEL'
  }
}

export function openQualificationsPanel() {
  return {
    type: 'OPEN_QUALIFICATIONS_PANEL'
  }
}

export function closeQualificationCard(qualificationID) {
  return {
    type: 'CLOSE_QUALIFICATION_CARD',
    qualificationID
  }
}

export function openQualificationCard(qualificationID) {
  return {
    type: 'OPEN_QUALIFICATION_CARD',
    qualificationID
  }
}

export function closeInstitutionsPanel() {
  return {
    type: 'CLOSE_INSTITUTION_PANEL'
  }
}

export function openInstitutionsPanel() {
  return {
    type: 'OPEN_INSTITUTION_PANEL'
  }
}

export function closeInstitutionCard(institutionID) {
  return {
    type: 'CLOSE_INSTITUTION_CARD',
    institutionID
  }
}

export function openInstitutionCard(institutionID) {
  return {
    type: 'OPEN_INSTITUTION_CARD',
    institutionID
  }
}

//This function forces to reload the list view data when a question has changed in the questionnaire
export function resetListViewLoaderFlag() {
  return {
    type: 'RESET_LIST_VIEW_LOADER'
  }
}


// JOB CARD MODAL
export function closeRemoveJobCardModal() {
  return {
    type: 'CLOSE_REMOVE_JOB_CARD_MODAL'
  }
}
export function openRemoveJobCardModal() {
  return {
    type: 'OPEN_REMOVE_JOB_CARD_MODAL'
  }
}

export function openVocationalPathwaysModal() {
  return {
    type: 'OPEN_VOCATIONAL_PATHWAYS_MODAL'
  }
}

// INSTITUTION CARD MODAL
export function closeRemoveInstitutionCardModal() {
  return {
    type: 'CLOSE_REMOVE_INSTITUTION_CARD_MODAL'
  }
}
export function openRemoveInstitutionCardModal(institutionCardID) {
  return {
    type: 'OPEN_REMOVE_INSTITUTION_CARD_MODAL',
    institutionCardID
  }
}

// QUALIFICATION CARD MODAL
export function closeRemoveQualificationCardModal() {
  return {
    type: 'CLOSE_REMOVE_QUALIFICATION_CARD_MODAL'
  }
}
export function openRemoveQualificationCardModal(qualificationCardID) {
  return {
    type: 'OPEN_REMOVE_QUALIFICATION_CARD_MODAL',
    qualificationCardID
  }
}

export function openSkillsModalFromListView() {
  return {
    type: 'SHOW_SKILLS_MODAL'
  }
}

export function resetListViewState() {
  return {
    type: 'RESET_LIST_VIEW_STATE'
  }
}

export function swapHiddenPanelVisible() {
  return {
    type: 'SWAP_HIDDEN_PANEL'
  }
}

export function setSplitIndexCardPoint(indexCard, listType) {
  return {
    type: 'SET_SPLIT_INDEX_CARD_POINT',
    indexCard,
    listType
  }
}

//PAGINATION
export function increasePaginationLimit(paginationIncrement) {
  return {
    type: 'INCREASE_PAGINATION_LIMIT',
    increment: paginationIncrement
  }
}

export function toggleListTypeOptions() {
  return {
    type: 'TOGGLE_LIST_TYPE_OPTIONS'
  }
}