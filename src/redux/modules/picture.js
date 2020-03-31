/**
 * 保存单张图片的展示信息
 */
import { fromJS } from 'immutable';
import instance from '../../utils/axios';
import { modalActions } from './message';

const SHOW_PICTURE = 'showPicture';
const CLEAR_PICTURE = 'clearPicture';

const defaultState = fromJS({
  pictureData: {},
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_PICTURE:
      return state.set('pictureData', action.pictureData);
    case CLEAR_PICTURE:
      return state.set('pictureData', {});
    default:
  }
  return state;
};

export const pictureActions = {
  getShowPictureAction: (pictureData) => ({
    type: SHOW_PICTURE,
    pictureData,
  }),
  getClearPictureAction: () => ({
    type: CLEAR_PICTURE,
  }),
  getRequirePicture: (pid) => {
    return (dispatch) => {
      instance(`api/picture/${pid}`)
        .then((response) => {
          dispatch(pictureActions.getShowPictureAction(response.data.data));
        })
        .catch(() => {
          dispatch(modalActions.getShowMsgAction('服务器似乎有点故障'));
        });
    };
  },
};
