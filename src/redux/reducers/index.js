/**
 * Created by jr1500 on 7/11/15.
 */

import { combineReducers } from 'redux'
import { _app } from './app.reducer';
import { _resume } from './resume.reducer';
import { _contact } from './contact.reducer';
import { _home } from './home.reducer';
import { _about } from './about.reducer';
import { _portfolio } from './portfolio.reducer';

export default combineReducers({
  _app, _resume, _contact, _home, _about, _portfolio
});