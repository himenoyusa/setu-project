import { fromJS } from 'immutable';
import { modalActions } from './message';
import instance from '../../axios';

const INIT_PICTURE_BOX = 'initPictureBox';
const DEL_PICTURE_BOX = 'delPictureBox';

const defaultState = fromJS({
  pictureBox: [],
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case INIT_PICTURE_BOX:
      return state.set('pictureBox', action.picture);
    case DEL_PICTURE_BOX:
      return state.set('pictureBox', []);
    default:
  }
  return state;
};

export const pictureBoxActions = {
  initPictureBoxAction: (picture) => ({
    type: INIT_PICTURE_BOX,
    picture,
  }),

  getPictureAction: () => {
    return (dispatch) => {
      instance('api/pictureBox')
        .then((response) => {
          const action = pictureBoxActions.initPictureBoxAction(response.data.data);
          dispatch(action);
        })
        .catch(() => {
          const action = modalActions.getShowMsgAction('服务器似乎有点故障');
          dispatch(action);
        });
    };
  },
  delPictureAction: () => ({
    type: DEL_PICTURE_BOX,
  }),
};
