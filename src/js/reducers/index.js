import { combineReducers } from 'redux';
import app from 'reducers/app';
import {undoHistoryReducer} from 'redux-undo-redo';

export default combineReducers({
  app,
  undoHistory: undoHistoryReducer
});
