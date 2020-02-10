import React from 'react';

var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "http://localhost/gallary.php", true);
xmlhttp.send();
var picture_count = xmlhttp.responseText;
//var result = JSON.parse(xmlhttp.responseText);
//var picture_count = result.picture_count;



export default function Gallary() {
    return (
        <div id="gallary" className="d-flex flex-wrap justify-content-around">
            <div>
                <img className="card" src={require("./../404.png")}  data-toggle="modal" data-target="#single" alt=""/>
                <span className="tag">{ picture_count }</span>
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