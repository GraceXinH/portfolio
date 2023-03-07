import "./HeroImg2Styles.css";

import React, { Component } from 'react';
import IdImg from "../assets/id.jpg";

class HeroImg2 extends Component {
    render() {
        return (
            <div className="hero-img">
                {this.props.withId &&
                <div className="idContainer">
                    <img src={IdImg} alt="intro" />
                </div>
                }
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                    <p>{this.props.text1}</p>
                    <p>{this.props.text2}</p>
                    <p>{this.props.text3}</p>
                    <p>{this.props.text4}</p>
                </div>
            </div>
        );
    }

}

export default HeroImg2