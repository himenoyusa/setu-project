import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import { Box } from './style';
import { modalActions } from '../../../redux/modules/message';
import { pictureBoxActions } from '../../../redux/modules/pictureBox';

class PictureBox extends Component {
  componentDidMount() {
    this.props.getPicture();
  }

  // 路由跳转时清空 picture，防止重复获取
  componentWillUnmount() {
    this.props.delPicture();
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
      dispatch(modalActions.getInitModalAction());
      dispatch(modalActions.getShowModalAction(data));
    },
    getPicture() {
      dispatch(pictureBoxActions.getPictureAction());
    },
    delPicture() {
      dispatch(pictureBoxActions.delPictureAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PictureBox);
