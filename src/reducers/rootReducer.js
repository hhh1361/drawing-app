import { combineReducers } from 'redux';
import { canvasReducer } from './canvasReducer';
import { commandsReducer } from './commandsReducer';

export const rootReducer = combineReducers({
  canvas: canvasReducer,
  commands: commandsReducer,
});
