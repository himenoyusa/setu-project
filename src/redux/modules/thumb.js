import { fromJS } from 'immutable';
import instance from '../../utils/axios';
import { modalActions } from './message';

const INIT_THUMB_LIST = 'InitThumbList';

const defaultState = fromJS({
  thumbList: [],
  totalPage: 1,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case INIT_THUMB_LIST: {
      // TODO: 数据格式更改
      //   const totalPage = action.data.totalPage || 1;
      const totalPage = 1;
      const page = Math.ceil(totalPage / 9);
      return state.set('thumbList', action.data).set('totalPage', page);
    }
    default:
      return state;
  }
};

// 封装 ajax 请求
function getThumb(dispatch, orderType, page, isR = false) {
  const url = isR ? 'R18thumbList' : 'thumbList';
  instance(`api/${url}/${orderType}/${page}`)
    .then((response) => {
      return response.data.data;
    })
    .catch(() => {
      dispatch(modalActions.getShowMsgAction('服务器故障'));
    });
}

export const thumbListActions = {
  getThumbList: (data) => ({
    type: INIT_THUMB_LIST,
    data,
  }),

  getThumbListAction: (orderType, page) => {
    return (dispatch) => {
      const data = getThumb(dispatch, orderType, page);
      dispatch(thumbListActions.getThumbList(data));
    };
  },
  getThumbListR18Action: (orderType, page) => {
    return (dispatch) => {
      const data = getThumb(dispatch, orderType, page, true);
      dispatch(thumbListActions.getThumbList(data));
    };
  },
};
