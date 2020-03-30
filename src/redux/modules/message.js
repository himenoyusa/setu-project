import { fromJS } from 'immutable';

const INIT_MODAL = 'initModal';
const SHOW_MODAL = 'showModal';
const HIDE_MODAL = 'hideModal';
const SHOW_MSG = 'showMsg';
const HIDE_MSG = 'hideMsg';

const defaultState = fromJS({
  visible: false,
  pictureData: {},
  message: '',
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case INIT_MODAL:
      return state.set('visible', true);
    case SHOW_MODAL:
      return state.set('pictureData', action.pictureData);
    case HIDE_MODAL:
      return state.set('visible', false).set('pictureData', {});
    case SHOW_MSG:
      return state.set('visible', true).set('message', action.message);
    case HIDE_MSG:
      return state.set('visible', false).set('message', '');
    default:
  }
  return state;
};

export const modalActions = {
  // TODO: 修改 modal 引用名
  getShowModalAction: (pictureData) => ({
    type: SHOW_MODAL,
    pictureData,
  }),
  getInitModalAction: () => ({
    type: INIT_MODAL,
  }),
  hideModalAction: () => ({
    type: HIDE_MODAL,
  }),
  getShowMsgAction: (message) => ({
    type: SHOW_MSG,
    message,
  }),
  hideMsgAction: () => ({
    type: HIDE_MSG,
  }),
};
