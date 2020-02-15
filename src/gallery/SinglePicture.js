import React, { PureComponent, Fragment } from "react";
import instance from '../instance';
import Moment from "moment";
import PropTypes from "prop-types";
import { Modal, Tag, Spin} from "antd";

export default class SinglePicture extends PureComponent {
  static propTypes = {
    pictureId: PropTypes.string.isRequired,
    hideModal: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.getPictureData()
  }

  handleOK = () => {
    this.props.hideModal();
  };

  handleCancel = () => {
    this.props.hideModal();
  };

  getPictureData = () => {
    instance("api/getpicture.php?pictureid=" + this.props.pictureId)
    .then(response => {
      this.setState(() => ({
        loading: false,
        picture: response.data
      }));
    })
    .catch(error => {
      //
    });
  }

  render() {
    const loading = this.state.loading
    if (!loading) {
      const {
        pic_info,
        pic_info: {} = {},
        tags,
        tags: [] = []
      } = this.state.picture;
      return (
        <Modal
          title={
            "投稿时间：" +
            Moment(Number(pic_info.create_time + "000")).format("YYYY-MM-DD")
          }
          visible
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <p></p>
        <img
          className="card"
          style={{ maxWidth: 1000 }}
          src={pic_info.picture_dir}
          alt=""
        />
        <div>
          <h3>分数：{pic_info.total_score}</h3>
        </div>
        <div className="">
          {tags.map(tag => (
            <Tag color="blue">{tag.tag}</Tag>
          ))}
        </div>
        </Modal>
      );
    } else {
      return (
        <Modal
          title="loading"
          visible
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Spin></Spin>
        </Modal>
      )
    }
  }
}
