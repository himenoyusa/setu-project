/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Modal, Tag, Button } from 'antd';
import { InputBlock, InputWrapper } from './style';

class AddTag extends PureComponent {
  render() {
    const { tags } = this.props;
    return (
      <Modal
        title="添加标签"
        footer={null}
        visible={this.props.visible}
        onOk={this.props.hideAddTagModal}
        onCancel={this.props.hideAddTagModal}
      >
        <InputBlock>
          <InputWrapper maxLength={15} />
          <Button type="primary">添加标签</Button>
        </InputBlock>
        当前标签：
        {tags.map((tag) => (
          <Tag>#{tag.tag}</Tag>
        ))}
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTag);
