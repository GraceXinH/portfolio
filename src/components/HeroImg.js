import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg";
import IdImg from "../assets/id.jpg";
import { Link } from "react-router-dom";


const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="idContainer">
          <img src={IdImg} alt="intro" />
        </div>
        <div className="content">
            <p>Hi, my name is</p>
            <h1>Xin Hui</h1>
            <p>I'm a full-stack Java developer and designer.</p>
            <p>I have a bachelor's degree in computer science.</p>
            <div className="btn-container">
                <Link to="/project" className="btn">PROJECTS</Link>
                <Link to="/about" className="btn btn-light">ABOUT</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg