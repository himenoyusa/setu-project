/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import { Box } from './style';
import { pictureActions } from '../../../../redux/modules/picture';
import { pictureBoxActions } from '../../../../redux/modules/pictureBox';

class PictureBox extends Component {
  componentDidMount() {
    // 用于判断是否为二次加载
    const firstTime = this.props.pictureBox;
    this.props.getPicture(firstTime);
  }

  render() {
    const { pictureBox = [] } = this.props;
    return (
      <Box>
        <Carousel effect="fade" dotPosition="top" autoplay>
          {pictureBox.map((picture) => (
            <div
              key="picture_id"
              onClick={() => {
                this.props.handleClick(picture);
              }}
            >
              <Link to="/picture">
                <img src={picture.picture_dir} alt="loading" />
              </Link>
            </div>
          ))}
        </Carousel>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pictureBox: state.pictureBox.get('pictureBox'),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick(data) {
      dispatch(pictureActions.getClearPictureAction());
      dispatch(pictureActions.getShowPictureAction(data));
    },
    getPicture(isEmpty) {
      // 如果是第一次加载，则请求 pictureBox
      if (isEmpty.size === 0) {
        dispatch(pictureBoxActions.getPictureAction());
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PictureBox);
