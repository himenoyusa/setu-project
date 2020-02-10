import React from 'react';

export default function SinglePicture() {
    return (
        <div className="modal fade" id="single" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">示例图片</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <img className="card" src={require("./../404.png")} alt=""/>
                </div>

                <div>
                    <h3>评分：7.5</h3>
                </div>
                <div className="modal-footer">
                    
                    <button type="button" className="btn btn-danger" data-dismiss="modal">关闭</button>
                </div>
                </div>
            </div>
        </div>
    );
}