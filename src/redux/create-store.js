
import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from './promise-middleware';
import axios from 'axios';
import _ from 'lodash';

import * as actionCreators from './general-actions';
import reducer from './reducers/index'


var finalCreateStore = applyMiddleware(promiseMiddleware)(createStore);
const appID = document.getElementsByTagName('body')[0].getAttribute('data-application-id');
var store;

if(sessionStorage.getItem('careers')) {
  store = finalCreateStore(reducer, JSON.parse(sessionStorage.getItem('careers')));
}
else
  store = finalCreateStore(reducer);

function selectJob(state) {
  return state._questionnaire.data.Jobs.Current;
}

let currentJob = null;
function handleJobChange() {
  let previousJob = currentJob;
  currentJob = selectJob(store.getState());

  if (previousJob !== currentJob) {
    store.dispatch(actionCreators.currentJobChanged(currentJob));
  }
}


// Save the state into the session storage and server
const saveToSessionStorage = _.debounce((currentState) => {
  try {
    sessionStorage.setItem('careers', JSON.stringify(currentState));
  }
  catch(e) {
    console.log(e.message);
  }

}, 500);

const saveToServer = _.debounce((currentState) => {
  axios.post(`/api/skills-transition-tool/save/${appID}`, currentState);
}, 500);

let currentState = null;
function storeState() {
  let previousState = currentState;
  const currentState = store.getState();

  if(previousState !== currentState) {
    //Save de state to the session storage
    if (currentState._mainPage &&
      currentState._questionnaire &&
      currentState._listViewData &&
      currentState._footerData &&
      currentState._courseDetail &&
      currentState._actionPlanData
    ) {
      saveToSessionStorage(currentState);
    }

    if (!__DEV__) {
      //Save de state to the server if the user is logged in
      if (currentState._questionnaire.data.Member.UserID !== null &&
        currentState._questionnaire.showDetailsSavedModal !== true //This line prevents overwrite the saved State before it is fetched from the server
          ) {
        saveToServer(currentState);
      }
    }
  }
}

store.subscribe(storeState);
store.subscribe(handleJobChange);

export default store;
