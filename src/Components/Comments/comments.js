import React, { Component } from 'react';
import './style.scss';

class Comments extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="comments">
                <ul>
                    <div className="box"> 
                    <h3>
                        Super Covenient
                    </h3>
                    </div>
                    <div className="box"> Cheaper than Amazon</div>
                    <div className="box"> Good for both users and Local Vendors</div>
                </ul>
            </div>
        );
    }
}

export default Comments;