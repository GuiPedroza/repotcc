import {combineReducers} from 'redux';

import paciente from './paciente/reducer';
import navbar from './navbar/reducer';

export default combineReducers({
  paciente,
  navbar,
});