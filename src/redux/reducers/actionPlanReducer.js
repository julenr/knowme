import store from '../create-store';

const actionPlanInitialState = {
  ActionPlanOpen: false,
  data: {
    SuggestedActions: [],
    UserAddedActions: []
  },
  FirstTimeHelpPopupVisible: !localStorage.visited
};


// ACTION PLAN REDUCER
export function _actionPlanData(state = actionPlanInitialState, action = {}) {
  let newState = {...state};
  switch (action.type) {
    case 'GET_SAVED_STATE_SUCCESS':
      newState = action.result.data._actionPlanData;
      return newState;
    case 'GET_JOBS_SUCCESS':
      newState.data.SuggestedActions = action.result.data.ActionPlanDrawer.SuggestedActions;
      newState.data.NoResultsTitle = action.result.data.ActionPlanDrawer.NoResultsTitle;
      newState.data.NoResultsText = action.result.data.ActionPlanDrawer.NoResultsText;
      return newState;
    case 'OPEN_ACTION_PLAN':
      newState.ActionPlanOpen = true;
      return newState;
    case 'CLOSE_ACTION_PLAN':
      newState.ActionPlanOpen = false;
      return newState;


    case 'MARK_SUGGESTED_ACTION_COMPLETED': {
      newState.data.SuggestedActions = newState.data.SuggestedActions.slice();
      newState.data.SuggestedActions[action.cardIndex].completed = true;
      newState.data.DrawerActionCompletionInProgress = true;
      return newState;
    }
    case 'UNMARK_SUGGESTED_ACTION_COMPLETED': {
      newState.data.SuggestedActions = newState.data.SuggestedActions.slice();
      newState.data.SuggestedActions[action.cardIndex].completed = false;
      newState.data.DrawerActionCompletionInProgress = true;
      return newState;
    }
    case 'MARK_SUGGESTED_ACTION_MINIMISED': {
      newState.data.SuggestedActions = newState.data.SuggestedActions.slice();
      newState.data.SuggestedActions[action.cardIndex].minimised = true;
      return newState;
    }
    case 'UNMARK_SUGGESTED_ACTION_MINIMISED':{
      newState.data.SuggestedActions = newState.data.SuggestedActions.slice();
      newState.data.SuggestedActions[action.cardIndex].minimised = false;
      return newState;
    }
    case 'MARK_USER_ADDED_ACTION_COMPLETE':{
      newState.data.UserAddedActions = newState.data.UserAddedActions.slice();
      let completeAction = findUserAddedAction(newState.data.UserAddedActions, action.courseID, action.actionID);
      completeAction.completed = true;
      newState.data.DrawerActionCompletionInProgress = true;
      return newState;
    }
    case 'UNMARK_USER_ADDED_ACTION_COMPLETE':{
      newState.data.UserAddedActions = newState.data.UserAddedActions.slice();
      let completeAction = findUserAddedAction(newState.data.UserAddedActions, action.courseID, action.actionID);
      completeAction.completed = false;
      newState.data.DrawerActionCompletionInProgress = true;
      return newState;
    }
    case 'MARK_USER_ADDED_ACTION_MINIMISED':{
      newState.data.UserAddedActions = newState.data.UserAddedActions.slice();
      let minimiseAction = findUserAddedAction(newState.data.UserAddedActions, action.courseID, action.actionID);
      if(minimiseAction) {
        minimiseAction.minimised = true;
      }
      return newState;
    }
    case 'UNMARK_USER_ADDED_ACTION_MINIMISED':{
      newState.data.UserAddedActions = newState.data.UserAddedActions.slice();
      let minimiseAction = findUserAddedAction(newState.data.UserAddedActions, action.courseID, action.actionID);
      if(minimiseAction) {
        minimiseAction.minimised = false;
      }
      return newState;
    }
    case 'MOVE_USER_ADDED_ACTION_LAST': {
      newState.data.UserAddedActions = newState.data.UserAddedActions.slice();
      let moveActionCourse = findUserAddedActionsCourse(newState.data.UserAddedActions, action.courseID);
      let actionCurrentIndex = _.findIndex(moveActionCourse.actions, (courseAction) => courseAction.actionId === action.actionID);

      let moveActionCard = moveActionCourse.actions.splice(actionCurrentIndex, 1)[0];
      moveActionCourse.actions.push(moveActionCard);

      newState.data.DrawerActionCompletionInProgress = false;
      return newState;
    }
    case 'MOVE_USER_ADDED_ACTION_FIRST': {
      newState.data.UserAddedActions = newState.data.UserAddedActions.slice();
      let moveActionCourse = findUserAddedActionsCourse(newState.data.UserAddedActions, action.courseID);
      let actionCurrentIndex = _.findIndex(moveActionCourse.actions, (courseAction) => courseAction.actionId === action.actionID);

      let moveActionCard = moveActionCourse.actions.splice(actionCurrentIndex, 1)[0];
      moveActionCourse.actions.unshift(moveActionCard);

      newState.data.DrawerActionCompletionInProgress = false;
      return newState;
    }
    case 'MOVE_SUGGESTED_ACTION_LAST': {
      newState.data.SuggestedActions = newState.data.SuggestedActions.slice();
      let actionCard = newState.data.SuggestedActions.splice(action.cardIndex, 1)[0];
      newState.data.SuggestedActions.push(actionCard);
      newState.data.DrawerActionCompletionInProgress = false;
      return newState;
    }
    case 'MOVE_SUGGESTED_ACTION_FIRST': {
      newState.data.SuggestedActions = newState.data.SuggestedActions.slice();
      let actionCard = newState.data.SuggestedActions.splice(action.cardIndex, 1)[0];
      newState.data.SuggestedActions.unshift(actionCard);
      newState.data.DrawerActionCompletionInProgress = false;
      return newState;
    }


    case 'REMOVE_SUGGESTED_ACTION':
      newState.data.SuggestedActions = newState.data.SuggestedActions.slice();
      newState.data.SuggestedActions.splice(action.cardIndex, 1);
      return newState;
    case 'SHOW_REMOVE_ACTION_MODAL':
      newState.data.IsRemoveActionModalShown = true;
      if(action.hasOwnProperty('suggestedCardIndex')) {
        newState.data.SuggestedActionForRemovalIndex = action.suggestedCardIndex;
      } else {
        newState.data.ActionForRemovalActionId = action.actionId;
        newState.data.ActionForRemovalCourseId = action.courseId;
        newState.data.ActionForRemovalBarrierId = action.barrierId;
      }
      return newState;
    case 'CLOSE_REMOVE_ACTION_MODAL':
      newState.data.IsRemoveActionModalShown = false;
      newState.data.SuggestedActionForRemovalIndex = null;
      newState.data.ActionForRemovalActionId = null;
      newState.data.ActionForRemovalCourseId = null;
      newState.data.ActionForRemovalBarrierId = null;
      return newState;
    case 'ADD_BARRIER_ACTION_TO_PLAN':
    case 'ADD_ACTION_TO_PLAN':
      newState.data.UserAddedActions = newState.data.UserAddedActions.slice();

      console.log('ACTION', action);
      console.log('USER ADDED ACTIONS:', newState.data.UserAddedActions);

      let courseId = action.course.CourseDetails.CourseID || -1;
      let course = findOrAddUserAddedActionsCourse(newState.data.UserAddedActions, courseId,
        action.course.CourseDetails.CourseTitle);

      course.actions.push({
        Title: action.title,
        IsInActionPlan: true,
        actionId: action.actionID,
        courseId: courseId,
        barrierId: action.barrierID
      });
      return newState;
    case 'REMOVE_ACTION_FROM_PLAN':
    case 'REMOVE_BARRIER_ACTION_FROM_PLAN':
      newState.data.UserAddedActions = newState.data.UserAddedActions.slice();
      let removeCourseId = action.courseID || -1;
      let removeCourse = findUserAddedActionsCourse(newState.data.UserAddedActions, removeCourseId);
      if(removeCourse) {
        _.remove(removeCourse.actions, (courseAction) => courseAction.actionId === action.actionID);
      }

      //if length is now 0, remove whole course.
      _.remove(newState.data.UserAddedActions, (courseActions) => !courseActions.actions.length);

      return newState;
    case 'DISMISS_FIRST_TIME_HELP_POPUP':
        localStorage.visited = true;
      return {
        ...state,
        FirstTimeHelpPopupVisible: false
      }
    default:
      return state;
  }

}

function findUserAddedActionsCourse(userAddedActions, courseId) {
  return _.findWhere(userAddedActions, {courseId: courseId});
}

function findUserAddedAction(userAddedActions, courseId, actionId) {
  let course = findUserAddedActionsCourse(userAddedActions, courseId);
  if(course) {
    return _.findWhere(course.actions, {actionId: actionId});
  }

  return undefined;
}

function findOrAddUserAddedActionsCourse(userAddedActions, courseId, courseTitle) {
  let course = findUserAddedActionsCourse(userAddedActions, courseId);
  if(!course) {
    course = {
      courseId: courseId,
      actions: [],
      courseTitle: courseTitle
    };
    userAddedActions.push(course);
  }
  return course;
}