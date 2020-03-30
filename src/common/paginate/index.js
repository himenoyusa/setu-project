import React, { Component } from 'react';
import PaginationStyled from './style';

export default class Paginate extends Component {
  // 调用父组件方法，翻页
  changePage = (page, pageSize) => {
    this.props.changePage(page, pageSize);
  };

  render() {
    return (
      <PaginationStyled
        defaultCurrent={1}
        total={this.props.total}
        defaultPageSize={1}
        style={{ padding: 10 }}
        onChange={this.changePage}
      />
    );
  }
}
