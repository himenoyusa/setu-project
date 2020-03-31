/**
 * 弹窗提示，用于显示错误信息
 */
import { fromJS } from 'immutable';

const SHOW_MSG = 'showMsg';
const HIDE_MSG = 'hideMsg';

const defaultState = fromJS({
  visible: false,
  message: '',
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_MSG:
      return state.set('visible', true).set('message', action.message);
    case HIDE_MSG:
      return state.set('visible', false).set('message', '');
    default:
  }
  return state;
};

export const modalActions = {
  getShowMsgAction: (message) => ({
    type: SHOW_MSG,
    message,
  }),
  hideMsgAction: () => ({
    type: HIDE_MSG,
  }),
};
