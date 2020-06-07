import React, { Component } from 'react';
import { Button, Dropdown, Menu, Icon, Switch } from 'antd';
import { connect } from 'react-redux';
import UploadBox from './UploadBox';
import { Bar } from './style';

class NavBar extends Component {
  menu = (
    <Menu>
      <Menu.Item onClick={() => this.onClick('default')}>默认</Menu.Item>
      <Menu.Item onClick={() => this.onClick('score')}>分数</Menu.Item>
      <Menu.Item onClick={() => this.onClick('time')}>时间</Menu.Item>
    </Menu>
  );

  onClick = (type) => {
    this.props.changeOrder(type);
  };

  isLogin = () => {
    if (!this.props.isLogin) {
      return (
        <>
          <Switch
            checkedChildren="R18开启"
            unCheckedChildren="R18关闭"
            onChange={(checked) => this.props.changeR(checked)}
          />
          <UploadBox />
        </>
      );
    }
    return null;
  };

  render() {
    return (
      <Bar>
        <Dropdown overlay={this.menu}>
          <Button type="primary">
            排序方式
            <Icon type="down" />
          </Button>
        </Dropdown>
        {this.isLogin()}
      </Bar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.login.get('isLogin'),
  };
};

export default connect(mapStateToProps)(NavBar);
