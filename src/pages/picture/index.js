/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { Tag, Slider, Button, Modal } from 'antd';
import { Content, PictureWrapper, Block } from './style';
import { pictureActions } from '../../redux/modules/picture';

class Picture extends Component {
  constructor(props) {
    super(props);
    this.deleteTag = this.deleteTag.bind(this);
    this.showTagInput = this.showTagInput.bind(this);
    this.deleteScore = this.deleteScore.bind(this);
    this.addScore = this.addScore.bind(this);
  }

  componentDidMount() {
    // 使滚动条回到最顶端
    window.scrollTo(0, 0);
  }

  // 删除 tag
  deleteTag = () => {};

  // 弹出 Modal 增加 tag
  showTagInput = () => {
    return <Button>增加 Tag</Button>;
  };

  // 删除评分
  deleteScore = () => {};

  // 添加评分
  addScore = () => {
    Modal.confirm({
      // TODO: 评分功能
      content: '确认评分吗？',
      onOk: () => {
        this.props.addScore();
      },
      onCancel() {
        return null;
      },
    });
  };

  render() {
    const { create_time, picture_dir, total_score, tags = [] } = this.props.pictureData || {};
    const user = 'yusa';
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
            <Tag
              title={user}
              color="red"
              closable
              onClose={(e) => {
                e.preventDefault();
                this.deleteScore();
              }}
            >
              80
            </Tag>
          </div>
          <div className="newScore">
            <Slider className="slider" defaultValue={total_score} />
            <Button type="danger" onClick={this.addScore}>
              增加评分
            </Button>
          </div>
          <div className="titleWrapper">
            {tags.map((tag) => (
              <div
                className="tagStyle"
                title={user}
                color="cyan"
                closable
                onClose={(e) => {
                  e.preventDefault();
                  this.handleDelTag();
                }}
              >
                #{tag.tag}
              </div>
            ))}
            <Tag onClick={this.showTagInput} className="site-tag-plus">
              + 新标签
            </Tag>
            {this.tagInput}
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
    addScore: () => {
      // TODO: 发送评分 action
      dispatch(pictureActions.addScore(1, 80));
    },
    deleteScore: () => {
      dispatch();
    },
    addTag: () => {
      dispatch();
    },
    deleteTag: () => {
      dispatch();
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Picture);
