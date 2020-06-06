/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import { Button, Modal, Input, Checkbox, Icon, Form } from 'antd';
import { Link } from 'react-router-dom';
import { loginActions } from 'Redux/modules/login';
import { H3, Header } from './style';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // TODO: 登录弹窗状态保存至 redux
      visible: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // 打开页面时检查登录状态
  componentDidMount() {
    const userInfo = cookie.load('user');
    if (userInfo !== undefined) {
      this.props.stillLogin(userInfo);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values);
      }
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  isLogin = () => {
    if (this.props.isLogin) {
      return (
        <Button style={{ float: 'right' }} type="danger" onClick={this.props.logout}>
          注销
        </Button>
      );
    }
    return (
      <>
        <Button style={{ float: 'right' }} type="primary" onClick={this.showModal}>
          登陆
        </Button>
        <Button style={{ float: 'right', marginRight: 10 }} type="default" onClick={this.showModal}>
          注册
        </Button>
      </>
    );
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Header>
        <Link to="/">
          <H3>色图评分系统</H3>
        </Link>
        <div>{this.isLogin()}</div>
        <Modal
          title="用户登录"
          visible={this.state.visible}
          onCancel={this.hideModal}
          footer={null}
        >
          <Form
            onSubmit={this.handleSubmit}
            className="login-form"
            style={{ maxWidth: 300, margin: 'auto' }}
          >
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入用户名!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="用户名"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="密码"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('visaCode', {
                rules: [{ required: true, message: '请输入验证码!' }],
              })(
                <Input
                  prefix={<Icon type="barcode" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="验证码（请联系管理员）"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>记住我</Checkbox>)}
              <a className="login-form-forgot" href="resetPassword" style={{ float: 'right' }}>
                忘记密码？
              </a>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ width: '100%' }}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.login.get('isLogin'),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(loginActions.logoutAction());
    },
    login: (params) => {
      dispatch(loginActions.loginAction(params));
    },
    stillLogin: (userInfo) => {
      dispatch(loginActions.login(userInfo));
    },
  };
};

const LoginBarWrapper = Form.create({ name: 'normal_login' })(Login);
const LoginBar = connect(mapStateToProps, mapDispatchToProps)(LoginBarWrapper);
export default LoginBar;
