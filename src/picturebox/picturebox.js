import React from 'react';

export default function Picturebox() {
    return (
        <div id="picturebox" className="carousel slide" data-ride="carousel">
            
            {/* 指示符 */}
            <ul className="carousel-indicators">
                <li data-target="#picturebox" data-slide-to="0" className="active"></li>
                <li data-target="#picturebox" data-slide-to="1"></li>
                <li data-target="#picturebox" data-slide-to="2"></li>
            </ul>

            {/* 轮播图片 */}
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={require("../favicon.png")}  data-toggle="modal" data-target="#single" alt="1"/>
                </div>
                <div className="carousel-item">
                    <img src={require("../404.png")}  data-toggle="modal" data-target="#single" alt="2"/>
                </div>
                <div className="carousel-item">
                    <img src={require("../logo.png")}  data-toggle="modal" data-target="#single" alt="2"/>
                </div>
            </div>

            {/* 左右切换按钮 */}
            <a className="carousel-control-prev" href="#picturebox" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#picturebox" data-slide="next">
            <span className="carousel-control-next-icon"></span>
            </a>
        </div>
    );
}