/**
 * 首页缩略图数组
 */
import { fromJS } from 'immutable';
import { message } from 'antd';
import instance from 'Utils/axios';

const INIT_THUMB_LIST = 'InitThumbList';

const defaultState = fromJS({
  thumbList: [],
  totalPage: 1,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case INIT_THUMB_LIST: {
      const { total, thumbs } = action.data;
      const totalPage = Math.ceil(total / 9);
      return state.set('thumbList', thumbs).set('totalPage', totalPage);
    }
    default:
      return state;
  }
};

// 封装 ajax 请求
const getThumb = async (dispatch, orderType, page, isR = false) => {
  const url = isR ? 'R18thumbList' : 'thumbList';
  try {
    const result = await instance(`api/${url}/${orderType}/${page}`);
    return result.data.data;
  } catch (e) {
    message.error('服务器故障');
  }
  return false;
};

export const thumbListActions = {
  getThumbList: (data) => ({
    type: INIT_THUMB_LIST,
    data,
  }),

  getThumbListAction: (orderType, page) => {
    return async (dispatch) => {
      const data = await getThumb(dispatch, orderType, page);
      dispatch(thumbListActions.getThumbList(data));
    };
  },
  getThumbListR18Action: (orderType, page) => {
    return async (dispatch) => {
      const dataR = await getThumb(dispatch, orderType, page, true);
      dispatch(thumbListActions.getThumbList(dataR));
    };
  },
};
