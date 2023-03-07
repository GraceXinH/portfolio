import "./WorkCardStyles.css";

import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";



const WorkCard = (props) => {
    const navigate = useNavigate();

    const displayWork = (index) => {
        navigate("/detail/" + index);
    }
    
    return (
        <div className="project-card">
            <img src={props.imgsrc} alt="image" />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <NavLink to={props.view} className="btn" target="_blank">Live</NavLink>
                    <button onClick={() => displayWork(props.id)} className="btn">Details</button>
                    <NavLink to={props.source} className="btn" target="_blank">Source</NavLink>
                </div>
            </div>
        </div>
    )
}

export default WorkCard