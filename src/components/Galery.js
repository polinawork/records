import React, { Component } from 'react';

class Galery extends Component {
    render(){
        return (
            <div className="gallery">
                <div className="container">
                    <h3>Gallery</h3>
                    <div className="gallery-grids">
                        <ul id="da-thumbs" className="da-thumbs">
                            <li>
                                <img src="images/3.jpg" alt="" />
                            </li>
                            <li>
                                <img src="images/4.jpg" alt="" />
                            </li>
                            <li>
                                <img src="images/5.jpg" alt="" />
                            </li>
                            <li>
                                <img src="images/16.jpg" alt="" />
                            </li>
                            <li>
                                <img src="images/17.jpg" alt="" />
                            </li>
                            <li>
                                <img src="images/18.jpg" alt="" />
                            </li>
                            <li>
                                <img src="images/19.jpg" alt="" />
                            </li>
                            <li>
                                <img src="images/20.jpg" alt="" />
                            </li>
                            <li>
                                <img src="images/21.jpg" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Galery;