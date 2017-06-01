import { combineReducers } from 'redux';
import app from 'reducers/app';
import undoable from 'redux-undo';

export default combineReducers({

  app: undoable(app, {
    limit: 20,
    undoType: 'UNDO',
    redoType: 'REDO'
  })
});
