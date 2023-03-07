import "./SkillsStyles.css";

import React from 'react'

const Skills = () => {
    return (
        <div className="container">
            <div className="section">
                <h2>Front-end</h2>
                <p>HTML, CSS, JavaScript, jQuery, Bootstrap, React</p>
            </div>
            <div className="section">
                <h2>Back-end</h2>
                <p>Java, Spring Boot, Hibernate, webwork</p>
            </div>
            <div className="section">
                <h2>DB</h2>
                <p>SQL, MySQL, Oracle, MongoDB, H2, PostgreSQL, MS SQL Server, DB2</p>
            </div>
            <div className="section">
                <h2>OS</h2>
                <p>Unix, Linux, Windows</p>
            </div>
            <div className="section">
                <h2>Tool</h2>
                <p>Maven, GitHub, SVN, LoadRunner, Postman, Junit5, Microsoft Project etc.</p>
            </div>
            <div className="section">
                <h2>Design</h2>
                <p>Lucid Chart, Power Designer, Microsoft Visio, Axure, Rational Rose</p>
            </div>
            <div className="section">
                <h2>Other Languages</h2>
                <p>R, Shell</p>
            </div>
        </div>
    )
}

export default Skills