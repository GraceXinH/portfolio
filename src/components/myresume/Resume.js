import "./ResumeStyles.css";

import React, { useState, useEffect } from 'react';
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";


const Resume = () => {
    const [active, setActive] = useState("0");

    const handleClick = (e) => {
        setActive(e.currentTarget.dataset.id);

    };


    return (
        <div className="resume">
            <div className="menu">
                <ul>
                    <li className={active === "0" ? "menu-item selected" : "menu-item"} onClick={handleClick.bind(this)} data-id="0">Education</li>|
                    <li className={active === "1" ? "menu-item selected" : "menu-item"} onClick={handleClick.bind(this)} data-id="1">Experience</li>|
                    <li className={active === "2" ? "menu-item selected" : "menu-item"} onClick={handleClick.bind(this)} data-id="2">Skills</li>
                </ul>
            </div>
            <div className="content">
                <div className={active === "0" ? "active" : "inactive"}>
                    <Education/>
                </div>
                <div className={active === "1" ? "active" : "inactive"}>
                    <Experience/>
                </div>
                <div className={active === "2" ? "active" : "inactive"}>
                    <Skills/>
                </div>
            </div>
        </div>
    )
}

export default Resume