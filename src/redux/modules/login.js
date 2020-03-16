import { fromJS } from 'immutable';
import cookie from 'react-cookies';
import instance from '../../axios';
import { modalActions } from './message';

const LOGIN = 'login';
const LOGOUT = 'logout';

const defaultState = fromJS({
  isLogin: false,
  userInfo: {},
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return state.set('isLogin', true).set('userInfo', action.userInfo);
    case LOGOUT:
      return state.set('isLogin', false).set('userInfo', {});
    default:
      return state;
  }
};

export const loginActions = {
  login: (userInfo) => ({
    type: LOGIN,
    userInfo,
  }),
  loginAction: (params) => {
    return (dispatch) => {
      instance
        .post('api/login', {
          params: {
            username: params.username,
            password: params.password,
            visaCode: params.visaCode,
            remember: params.remember,
          },
        })
        .then((response) => {
          if (response.data.status === true) {
            cookie.save('userToken', response.data.data[4], { path: '/' });
            dispatch(loginActions.login(response.data.userInfo));
          } else {
            dispatch(modalActions.getShowMsgAction('信息有误，登录失败'));
          }
        })
        .catch(() => {
          dispatch(modalActions.getShowMsgAction('服务器错误'));
        });
    };
  },
  logout: () => ({
    type: LOGOUT,
  }),
  logoutAction: () => {
    return (dispatch) => {
      instance
        .post('api/logout', {
          params: { uid: 1 },
        })
        .then((response) => {
          if (response.data.status === true) {
            cookie.remove('userToken', { path: '/' });
            dispatch(loginActions.logout());
          } else {
            dispatch(modalActions.getShowMsgAction('服务器错误，注销失败'));
            cookie.remove('userToken', { path: '/' });
          }
        })
        .catch(() => {
          cookie.remove('userToken', { path: '/' });
          dispatch(modalActions.getShowMsgAction('服务器错误，注销失败'));
        });
    };
  },
};
