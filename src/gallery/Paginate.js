import React, { Component } from 'react';
import { Pagination } from 'antd';

export default class paginate extends Component {

  render() {
    return (
      <Pagination
        simple
        defaultCurrent={1}
        total={10}
        defaultPageSize={1}
        style={{ padding:10 }}
      />
    )
  }
}