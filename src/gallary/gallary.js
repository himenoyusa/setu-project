import React, { Component } from 'react';
import Axios from 'axios';

export default class Gallary extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
                yusa: 1
        };
    }
    

    componentDidMount() {
        Axios('api/getcount.php')
        .then((response) => {
            this.setState({yusa: response.data.name});
        })
        .catch((error) => {
            alert(error);
        });

    }

    render() {
    return (
        <div id="gallary" className="d-flex flex-wrap justify-content-around">
            <div>
                <img className="card" src={require("./../404.png")}  data-toggle="modal" data-target="#single" alt=""/>
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