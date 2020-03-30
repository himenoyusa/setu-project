import React, { Component } from 'react';
import APlayer from 'react-aplayer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import instance from '../../utils/axios';
import NavBar from './navBar/NavBar';
import Paginate from './Paginate';
import { GalleryStyle, ContentWrapper, CardWrapper } from './style';
import { modalActions } from '../../redux/modules/message';
// import SinglePicture from '../../common/modal/SinglePicture';
import MsgBox from '../../common/modal/MsgBox';
import PictureBox from './pictureBox';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureList: [],
      currentPage: 1,
      totalPage: 1,
      orderType: 'default',
      r18: false,
    };
    this.changeOrder = this.changeOrder.bind(this);
    this.changePage = this.changePage.bind(this);
    this.changeR = this.changeR.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // 获取缩略图/${this.state.r18}
    this.getThumb();
  }

  getThumb = () => {
    instance(`api/thumbList/${this.state.orderType}/${this.state.currentPage}`)
      .then((response) => {
        this.setState({
          pictureList: response.data.data,
          totalPage: Math.ceil(response.data.data.total / 9),
        });
      })
      .catch(() => {
        this.props.showMsg('服务器似乎有点故障');
      });
  };

  // 点击图片时获取图片信息，并通过 store 传递给 picture 弹窗页面
  handleClick = (item) => {
    // 预先渲染 picture 页面，loading 状态
    this.props.initModal();
    instance(`api/picture/${item.picture_id}`)
      .then((response) => {
        this.props.showModal(response.data.data);
      })
      .catch(() => {
        this.props.showMsg('服务器似乎有点故障');
      });
  };

  // 更改排序
  changeOrder = (type) => {
    // 排序方式有变动时，更新 state 并重新获取缩略图
    if (this.state.orderType !== type) {
      this.setState({ orderType: type }, () => this.getThumb());
    }
  };

  // 更改 r18 选项
  changeR = () => {
    this.setState(
      (prevState) => ({ r18: !prevState.r18 }),
      () => this.getThumb()
    );
  };

  // 翻页
  changePage = (page, pageSize) => {
    if (this.state.currentPage !== page) {
      this.setState({ currentPage: page }, () => this.getThumb());
    }
  };

  render() {
    const { pictureList = [] } = this.state;
    return (
      <GalleryStyle>
        <PictureBox />
        <NavBar changeOrder={this.changeOrder} onR={!this.state.r18} changeR={this.changeR} />
        <APlayer listFolded audio={audio} theme="#be121b" preload="metadata" />
        <ContentWrapper>
          {pictureList.map((picture) => (
            <CardWrapper key={picture.picture_id} onClick={() => this.handleClick(picture)}>
              <Link to="/picture">
                <div className="card">
                  <img src={picture.thumb_dir} alt="loading" />
                  <p>{picture.total_score}</p>
                </div>
              </Link>
            </CardWrapper>
          ))}
        </ContentWrapper>
        <MsgBox />
        <Paginate total={this.state.totalPage} changePage={this.changePage} />
      </GalleryStyle>
    );
  }
}

const audio = [
  {
    name: 'ポケットをふくらませて',
    artist: 'rionos',
    url: 'https://www.kanata.moe/musics/music2.mp3',
    cover: 'https://www.kanata.moe/musics/cover2.jpg',
  },
  {
    name: '永遠に咲く花',
    artist: 'AiRI',
    url: 'https://www.kanata.moe/musics/music1.mp3',
    cover: 'https://www.kanata.moe/musics/cover1.png',
  },
  {
    name: '星の舟',
    artist: 'Lia',
    url: 'https://www.kanata.moe/musics/music3.mp3',
    cover: 'https://www.kanata.moe/musics/cover3.png',
  },
];

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (data) => {
      dispatch(modalActions.getShowModalAction(data));
    },
    hideModal: () => {
      dispatch(modalActions.hideModalAction());
    },
    showMsg: (message) => {
      dispatch(modalActions.getShowMsgAction(message));
    },
    initModal: () => {
      dispatch(modalActions.getInitModalAction());
    },
  };
};

export default connect(null, mapDispatchToProps)(Gallery);
