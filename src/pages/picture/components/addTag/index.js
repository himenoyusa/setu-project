/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Modal, Tag, Button } from 'antd';
import { InputBlock, InputWrapper } from './style';
import { pictureActions } from 'redux/modules/picture';

class AddTag extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      newTag: '',
    };
  }

  changeInput = (newTag) => {
    this.setState({ newTag });
  };

  addTag = () => {
    const { newTag } = this.state;
    const { pid } = this.props;
    if (newTag === '') {
      return null;
    }
    this.props.getAddTagAction(newTag, pid);
    return null;
  };

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
          <InputWrapper
            maxLength={15}
            onChange={(e) => {
              e.preventDefault();
              this.changeInput(e.target.value);
            }}
          />
          <Button type="primary" onClick={this.addTag}>
            添加标签
          </Button>
        </InputBlock>
        当前标签：
        {tags.map((tag) => (
          <Tag key={tag.tag_id}>#{tag.tag}</Tag>
        ))}
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAddTagAction: (newTag, pid) => {
      dispatch(pictureActions.addTag(newTag, pid));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTag);
