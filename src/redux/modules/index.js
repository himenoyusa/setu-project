import { combineReducers } from 'redux';
import pictureBoxReducer from './pictureBox';
import messageReducer from './message';
import pictureReducer from './picture';
import reducer from './login';

export default combineReducers({
  pictureBox: pictureBoxReducer,
  modal: messageReducer,
  picture: pictureReducer,
  login: reducer,
});
