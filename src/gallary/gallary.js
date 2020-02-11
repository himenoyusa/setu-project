import React, { Component } from 'react';
import Axios from 'axios';
import SinglePicture from '../singlepicture/single';

export default class Gallary extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            picture_info:
            {
                create_by: null,
                picture_dir: null,
                picture_id: null,
                error: 0
            }
        };
        this.handleClick = this.handleClick.bind(this);
    }

    //处理点击加载弹窗
    handleClick(item)
    {
        Axios.get('http://localhost/api/getpicture.php?pictureid='+item.src)
        .then((response) => {
            this.setState({
                picture_info: response.data,
            });
        })
        .catch(() => {
            this.setState({error: 1});
        });
    }
    
    

    componentDidMount() {
        Axios('api/getcount.php')
        .then((response) => {
            
        })
        .catch((error) => {
            
        });

    }

    render() {
    return (
        <div id="gallary" className="d-flex flex-wrap justify-content-around">
            <SinglePicture src={this.state.picture_info.picture_dir}/>
            <div>
                <img onClick={() => this.handleClick(item)} className="card" src={require("./../404.png")}  data-toggle="modal" data-target="#single" alt="1"/>
                <span className="tag">{this.state.yusa}</span>
            </div>
            <div>
                <img className="card" src={require("./../404.png")}  data-toggle="modal" data-target="#single" alt=""/>
                <div className="tag">5星</div>
            </div>
            <div>
                <img className="card" src={require("./../404.png")}  data-toggle="modal" data-target="#single" alt=""/>
                <div className="tag">5星</div>
            </div>
            <div>
                <img className="card" src={require("./../404.png")}  data-toggle="modal" data-target="#single" alt=""/>
                <div className="tag">5星</div>
            </div>
            <div>
                <img className="card" src={require("./../404.png")}  data-toggle="modal" data-target="#single" alt=""/>
                <div className="tag">5星</div>
            </div>
        </div>
    );
    }
}