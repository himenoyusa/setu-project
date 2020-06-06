/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { Tag, Slider, Button, Modal } from 'antd';
import { Content, PictureWrapper, Block } from './style';
import { pictureActions } from 'Redux/modules/picture';
import AddTag from './components/addTag';

class Picture extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      newScore: 0,
      addTagModal: false,
    };
    // 使滚动条回到最顶端
    window.scrollTo(0, 0);
  }

  // -------------------------------------------- tag 相关
  // 删除 tag
  deleteTag = () => {};

  // 弹出 Modal 增加 tag
  showAddTagModal = () => {
    this.setState({ addTagModal: true });
  };

  // 隐藏增加 tag 的 modal
  hideAddTagModal = () => {
    this.setState({ addTagModal: false });
  };

  // -------------------------------------------- 评分相关
  // 删除评分
  deleteScore = () => {};

  // 添加评分
  addScore = () => {
    Modal.confirm({
      content: '确认评分吗？',
      onOk: () => {
        // 评分图片，分值。用户 uid 在 ajax 请求中读取并传递
        this.props.addScore(this.props.pictureData.picture_id, this.state.newScore);
        // TODO: 评分成功后刷新
        // this.setState({ newScore: 0 });
      },
      onCancel() {
        return null;
      },
    });
  };

  // 保存当前评分，为提交评分做准备
  handleNewScore = (newScore) => {
    this.setState({ newScore });
  };
  // ----------------------------------------------

  render() {
    const { picture, tags = [], scores = [] } = this.props.pictureData || {};
    const { create_time, picture_dir, total_score, picture_id } = picture || {};
    const user = 'yusa'; // TODO: 投稿人
    return (
      <Content>
        <PictureWrapper>
          <img src={picture_dir} alt="loading" />
        </PictureWrapper>
        <Block>
          <div className="titleWrapper">
            当前总分：
            <span className="totalScore">{total_score}</span>
          </div>
          <div className="titleWrapper">
            {/* 展示所有评分 */}
            {scores.map((score) => (
              <Tag
                key={score.score_id}
                title={user}
                color="red"
                closable
                onClose={(e) => {
                  e.preventDefault();
                  this.deleteScore();
                }}
              >
                {score.score}
              </Tag>
            ))}
          </div>
          <div className="newScore">
            <Slider
              className="slider"
              defaultValue={80}
              onChange={(score) => {
                this.handleNewScore(score);
              }}
            />
            <Button type="danger" onClick={this.addScore}>
              增加评分
            </Button>
          </div>
          <div className="titleWrapper">
            {tags.map((tag) => (
              <div
                key={tag.tag_id}
                className="tagStyle"
                title={user}
                color="cyan"
                onClose={(e) => {
                  e.preventDefault();
                  this.handleDelTag();
                }}
              >
                #{tag.tag}
              </div>
            ))}
            <Tag onClick={this.showAddTagModal} className="site-tag-plus">
              + 新标签
            </Tag>
            <AddTag
              visible={this.state.addTagModal}
              hideAddTagModal={this.hideAddTagModal}
              tags={tags}
              pid={picture_id}
            />
          </div>
          <div className="foot">
            <span>
              投稿时间：
              {Moment(Number(`${create_time}000`)).format('YYYY-MM-DD')}
            </span>
            <div>
              投稿人：
              {user}
            </div>
          </div>
        </Block>
      </Content>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pictureData: state.picture.get('pictureData'),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addScore: (pid, score) => {
      dispatch(pictureActions.addScore(pid, score));
    },
    deleteScore: () => {
      dispatch();
    },
    addTag: (pid, tag) => {
      // 发送 tag action
      const { picture_id } = this.props.pictureData;
      dispatch(pictureActions.addTag(picture_id, tag));
    },
    deleteTag: () => {
      dispatch();
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Picture);
