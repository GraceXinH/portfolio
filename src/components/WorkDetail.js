import "./WorkDetailStyles.css";

import React from 'react'
import { Link, useParams } from "react-router-dom";
import WorkCardData from "./WorkCardData";

const WorkDetail = () => {

    const { id } = useParams();

    return (
        <div className={typeof(id) === "undefined" ? "cards" : "cards active"}>
            {
                typeof(id) !== "undefined" &&
                        <div>
                            <h1 className="project-heading">{WorkCardData[id].title}</h1>
                            <div className="project-content">
                                <h2 className="sub-heading">Functionality</h2>
                                <p>
                                    {WorkCardData[id].function}
                                </p>
                                <h2 className="sub-heading">Intro</h2>
                                <p>
                                    {WorkCardData[id].intro}
                                </p>
                                <h2 className="sub-heading">Technique</h2>
                                <p>
                                    {WorkCardData[id].tech}
                                </p>
                                <div className="btn-container-detail">
                                    <Link to="/project" className="btn">Project</Link>
                                </div>
                            </div>
                                
                            
                        </div>
            }

        </div>
    )
}

export default WorkDetail