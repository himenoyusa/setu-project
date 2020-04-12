/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import APlayer from 'react-aplayer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from './components/navBar';
import PictureBox from './components/pictureBox';
import Paginate from '../../common/paginate';
import { GalleryStyle, ContentWrapper, CardWrapper } from './style';
import { pictureActions } from '../../redux/modules/picture';
import { thumbListActions } from '../../redux/modules/thumb';

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

class Gallery extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      orderType: 'default',
      r18: false,
    };
    this.getThumb = this.getThumb.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
    this.changePage = this.changePage.bind(this);
    this.changeR = this.changeR.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // 获取缩略图
    this.getThumb();
  }

  getThumb = () => {
    if (this.state.r18) {
      this.props.thumbListR18(this.state.orderType, this.state.currentPage);
    } else {
      this.props.thumbList(this.state.orderType, this.state.currentPage);
    }
  };

  // 点击图片时获取图片信息，并通过 store 传递给 picture 页面
  handleClick = (item) => {
    this.props.showPicture(item.picture_id);
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
    const { pictureList = [] } = this.props;
    const { totalPage } = this.props;
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
        <Paginate total={totalPage} changePage={this.changePage} />
      </GalleryStyle>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showPicture: (pid) => {
      dispatch(pictureActions.getClearPictureAction());
      dispatch(pictureActions.getRequirePicture(pid));
    },
    thumbList: (orderType, currentPage) => {
      dispatch(thumbListActions.getThumbListAction(orderType, currentPage));
    },
    thumbListR18: (orderType, currentPage) => {
      dispatch(thumbListActions.getThumbListR18Action(orderType, currentPage));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    totalPage: state.thumbList.get('totalPage'),
    pictureList: state.thumbList.get('thumbList'),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
