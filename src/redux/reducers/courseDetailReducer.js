import uuid from 'node-uuid';


const initialState = {
  loaded: false,
  refresh: 0,
  ShowMatchSkillsModalCourseDetail: false,
  CheckSkillsIDCourseDetail: 0,
  data: {
    'CourseDetails': {
      'CourseTitle': '',
      'ProviderName': ''
    }
  }
};


// COURSE DETAILS REDUCER
export function _courseDetail(state = initialState, action = {}) {
  let newState = {...state };
  switch (action.type) {
    case 'GET_SAVED_STATE_SUCCESS':
      newState = action.result.data._courseDetail;
      return newState;
    case 'GET_COURSE_DETAIL_REQUEST':
      return {
        ...state,
        loaded: false
      };
    case 'GET_COURSE_DETAIL_SUCCESS':
      return {
        ...state,
        data: action.result.data,
        loaded: true
      };
    case 'GET_COURSE_DETAIL_FAILURE':
      return {
        ...state,
        loaded: true
      };
    case 'FLIP_COURSE_DETAIL_JOB_CARD':
      newState.data.Jobs.JobsCards[action.jobID].Flipped = !newState.data.Jobs.JobsCards[action.jobID].Flipped;
      return newState;

    case 'ADD_ACTION_TO_PLAN':
      findAction(newState, action.actionID).IsInActionPlan = true;
      newState.refresh = uuid.v1();
      return newState;

    case 'REMOVE_ACTION_FROM_PLAN':
      //if the currently-shown course doesn't match the course which the action is being removed from, do nothing...
      if(newState.data.CourseDetails.ID === action.courseID) {

        //need to do it differently if we're removing a barrier action or a normal action...
        let courseDetailAction;
        if(_.isNumber(action.barrierID)) {
          courseDetailAction = findActionInBarrier(newState.data.BarriersPanel.Barriers[action.barrierID].Actions, action.actionID)
        } else {
          courseDetailAction = findAction(newState, action.actionID);
        }
        courseDetailAction.IsInActionPlan = false;

        newState.refresh = uuid.v1();
      }
      return newState;

    case 'ADD_BARRIER_ACTION_TO_PLAN': {
      let actionID = findActionInBarrier(newState.data.BarriersPanel.Barriers[action.barrierID].Actions, action.actionID);
      actionID.IsInActionPlan = true;
      newState.refresh = uuid.v1();
      return newState;
    }

    case 'REMOVE_BARRIER_ACTION_FROM_PLAN': {
      let actionID = findActionInBarrier(newState.data.BarriersPanel.Barriers[action.barrierID].Actions, action.actionID);
      actionID.IsInActionPlan = false;
      newState.refresh = uuid.v1();
      return newState;
    }

    case 'SHOW_MATCH_SKILLS_MODAL_COURSE_DETAIL':
      newState.CheckSkillsIDCourseDetail = action.idJobCard;
      newState.ShowMatchSkillsModalCourseDetail = true;
      return newState;
    case 'CLOSE_MATCH_SKILLS_MODAL_COURSE_DETAIL':
      newState.ShowMatchSkillsModalCourseDetail = false;
      return newState;

    default:
      return state;

  }
}


function findAction(state, actionId) {
  return _.find(state.data.NextSteps.Actions, (action) => action.ActionID === actionId);
}

function findActionInBarrier(barrierActions, actionId) {
  return _.find(barrierActions, (action) => action.ActionID === actionId);
}
