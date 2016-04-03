/**
 * Created by jr1500 on 7/11/15.
 */

import { combineReducers } from 'redux'
import { _app } from './app.reducer';
import { _resume } from './resume.reducer';

export default combineReducers({
  _app, _resume
});