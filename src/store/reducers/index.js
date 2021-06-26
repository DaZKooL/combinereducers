import { combineReducers } from 'redux'
import counter from './counter';
import messager from './messager';

export default combineReducers({
  counter,
  messager
})