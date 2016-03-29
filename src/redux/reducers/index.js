/**
 * Created by jr1500 on 7/11/15.
 */

import { combineReducers } from 'redux'
import { _mainPage } from './mainReducer';
import { _questionnaire } from './questionnaireReducer';
import { _listViewData } from './listviewReducer';
import { _footerData } from './footerReducer';
import { _courseDetail } from './courseDetailReducer';
import { _actionPlanData } from './actionPlanReducer';

export default combineReducers({
  _mainPage,
  _questionnaire,
  _listViewData,
  _footerData,
  _courseDetail,
  _actionPlanData
});