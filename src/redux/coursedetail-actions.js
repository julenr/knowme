import axios from 'axios';
import _ from 'lodash';

const appID = document.getElementsByTagName('body')[0].getAttribute('data-application-id');

if (__DEV__){
  var fakeData = require('./fake-data');
}

export function getCourseDetails(courseID) {
  return {
    types: ['GET_COURSE_DETAIL_REQUEST', 'GET_COURSE_DETAIL_SUCCESS', 'GET_COURSE_DETAIL_FAILURE'],
    promise: () => {
      return axios.get(`/api/skills-transition-tool/coursedetails/${appID}/${courseID}`)
        .then(function (response) {
          return {data: response.data};
        })
        .catch(function (response) {
          console.log(response);
          if (__DEV__) {
            console.log('Using fake data');
            return {data: _.cloneDeep(fakeData.courseDetail)};
          }
        });
    },
    courseID
  }
}

export function flipJobCard(jobID) {
  return {
    type: 'FLIP_COURSE_DETAIL_JOB_CARD',
    jobID
  }
}

export function closeVocationalPathwaysModal() {
  return {
    type: 'CLOSE_VOCATIONAL_PATHWAYS_MODAL'
  }
}
export function openVocationalPathwaysModal() {
  return {
    type: 'OPEN_VOCATIONAL_PATHWAYS_MODAL'
  }
}

export function addActionToPlan(actionID, course, title) {
  return {
    type: 'ADD_ACTION_TO_PLAN',
    actionID,
    course: course,
    title: title
  }
}

export function removeActionFromPlan(actionID, course) {
  return {
    type: 'REMOVE_ACTION_FROM_PLAN',
    actionID,
    courseID: course.CourseDetails.ID
  }
}

export function addBarrierActionToPlan(actionID, barrierID, course, Title) {
  return {
    type: 'ADD_BARRIER_ACTION_TO_PLAN',
    actionID,
    barrierID: barrierID,
    course: course,
    title: Title
  }
}

export function removeBarrierActionFromPlan(actionID, barrierID, course, Title) {
  return {
    type: 'REMOVE_BARRIER_ACTION_FROM_PLAN',
    actionID,
    barrierID: barrierID,
    course: course,
    courseID: course.CourseDetails.ID,
    title: Title
  }
}

export function openMatchSkillsModal(idJobCard) {
  return {
    type: 'SHOW_MATCH_SKILLS_MODAL_COURSE_DETAIL',
    idJobCard
  }
}
export function closeMatchSkillsModal() {
  return {
    type: 'CLOSE_MATCH_SKILLS_MODAL_COURSE_DETAIL'
  }
}