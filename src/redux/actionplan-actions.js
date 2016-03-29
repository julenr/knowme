//ACTION PLAN
export function openActionPlan() {
  return {
    type: 'OPEN_ACTION_PLAN'
  }
}
export function closeActionPlan() {
  return {
    type: 'CLOSE_ACTION_PLAN'
  }
}

export function markSuggestedActionAsCompleted(index) {
  return {
    type: 'MARK_SUGGESTED_ACTION_COMPLETED',
    cardIndex: index
  };
}

export function unmarkSuggestedActionAsCompleted(index) {
  return {
    type: 'UNMARK_SUGGESTED_ACTION_COMPLETED',
    cardIndex: index
  };
}

export function markSuggestedActionAsMinimised(index) {
  return {
    type: 'MARK_SUGGESTED_ACTION_MINIMISED',
    cardIndex: index
  }
}

export function unmarkSuggestedActionAsMinimised(index) {
  return {
    type: 'UNMARK_SUGGESTED_ACTION_MINIMISED',
    cardIndex: index
  }
}

export function moveSuggestedActionToEnd(index) {
  return {
    type: 'MOVE_SUGGESTED_ACTION_LAST',
    cardIndex: index
  }
}

export function moveSuggestedActionToBeginning(index) {
  return {
    type: 'MOVE_SUGGESTED_ACTION_FIRST',
    cardIndex: index
  }
}

export function showSuggestedActionRemoveActionModal(index) {
  return {
    type: 'SHOW_REMOVE_ACTION_MODAL',
    suggestedCardIndex: index
  }
}

export function showUserAddedActionRemoveActionModal(actionId, courseId, barrierId) {
  return {
    type: 'SHOW_REMOVE_ACTION_MODAL',
    actionId: actionId,
    courseId: courseId,
    barrierId: barrierId
  }
}

export function closeRemoveActionModal() {
  return {
    type: 'CLOSE_REMOVE_ACTION_MODAL'
  }
}

export function removeSuggestedAction(index) {
  return {
    type: 'REMOVE_SUGGESTED_ACTION',
    cardIndex: index
  };
}

export function removeUserAddedAction(actionID, courseId, barrierId) {
  return {
    type: 'REMOVE_ACTION_FROM_PLAN',
    actionID,
    courseID: courseId,
    barrierID: barrierId
  }
}

export function completeUserAddedAction(actionID, courseId) {
  return {
    type: 'MARK_USER_ADDED_ACTION_COMPLETE',
    actionID: actionID,
    courseID: courseId
  }
}
export function uncompleteUserAddedAction(actionID, courseId) {
  return {
    type: 'UNMARK_USER_ADDED_ACTION_COMPLETE',
    actionID: actionID,
    courseID: courseId
  }
}

export function markUserAddedActionAsMinimised(actionID, courseId) {
  return {
    type: 'MARK_USER_ADDED_ACTION_MINIMISED',
    actionID: actionID,
    courseID: courseId
  }
}
export function unmarkUserAddedActionAsMinimised(actionID, courseId) {
  return {
    type: 'UNMARK_USER_ADDED_ACTION_MINIMISED',
    actionID: actionID,
    courseID: courseId
  }
}

export function moveUserAddedActionToEnd(actionID, courseId) {
  return {
    type: 'MOVE_USER_ADDED_ACTION_LAST',
    actionID: actionID,
    courseID: courseId
  }
}
export function moveUserAddedActionToBeginning(actionID, courseId) {
  return {
    type: 'MOVE_USER_ADDED_ACTION_FIRST',
    actionID: actionID,
    courseID: courseId
  }
}

export function dismissFirstTimeHelpPopup() {
  return {
    type: 'DISMISS_FIRST_TIME_HELP_POPUP'
  }
}