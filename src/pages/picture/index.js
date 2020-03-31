import React, { Component } from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { Tag, Slider, Button } from 'antd';
import { Content, PictureWrapper, Block } from './style';

class Picture extends Component {
  componentDidMount() {
    // 使滚动条回到最顶端
    window.scrollTo(0, 0);
  }

  handleDelTag = () => {};

  showTagInput = () => {
    return <Button>增加 Tag</Button>;
  };

  handleScoreTag = () => {};

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
                this.handleScoreTag();
              }}
            >
              80
            </Tag>
          </div>
          <div className="newScore">
            <Slider className="slider" defaultValue={total_score} />
            <Button type="danger">增加评分</Button>
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
            <Tag onClick={this.showTagInput()} className="site-tag-plus">
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
    // state 的 modal 待修正
    pictureData: state.picture.get('pictureData'),
  };
};

export default connect(mapStateToProps, null)(Picture);
