import { combineReducers } from 'redux';
import pictureBoxReducer from './pictureBox';
import thumbListReducer from './thumb';
import messageReducer from './message';
import pictureReducer from './picture';
import reducer from './login';

export default combineReducers({
  pictureBox: pictureBoxReducer,
  thumbList: thumbListReducer,
  modal: messageReducer,
  picture: pictureReducer,
  login: reducer,
});
