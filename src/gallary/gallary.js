import React, { Component } from 'react';
import Axios from 'axios';

/*var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "http://localhost/gallary.php", true);
xmlhttp.send();
var picture_count = xmlhttp.responseText;*/
//var result = JSON.parse(xmlhttp.responseText);
//var picture_count = result.picture_count;




class Gallary extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
                yusa: 1
        };
    }
    

    componentDidMount() {
        Axios('http://localhost/getcount.php')
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });

        /*const _this = this;
        var xml = new XMLHttpRequest();
        xml.open('get', 'http://localhost/getcount.php', true);
        xml.onreadystatechange = function(){
            if (xml.readyState == 4 && xml.status == 200) {
                _this.setState({yusa: JSON.parse(xml.responseText).name});
            }
            _this.setState({yusa: JSON.parse(xml.responseText).name});
        }

        xml.send();*/
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
export default Gallary;