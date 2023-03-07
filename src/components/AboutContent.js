import "./AboutContentStyles.css";

import React from 'react'
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.jfif";

const AboutContent = () => {

    return (
        <div className="about">
            <div className="left">
                <h1>Who am I?</h1>
                <ul>
                    <li>Full-stack developer</li>
                    <li>10+ years of experience</li>
                    <li>Love programming</li>
                    <li>Self-learner</li>
                    <li>Problem solver</li>
                </ul>
            </div>
            <div className="middle">
                <h1>Skills</h1>
                <ul>
                    <li>Java, Spring Boot</li>
                    <li>JUnit5, Postman</li>
                    <li>MySQL, Oracle, MS SqlServer, MongoDB</li>
                    <li>Linux, Unix</li>
                    <li>HTML, React, Javascript, CSS</li>
                </ul>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React1} className="img" alt="" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={React2} className="img" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent