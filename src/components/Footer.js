import "./FooterStyles.css";

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem" }}/>
                    <div>
                        <p>Brossard QC.</p>
                        <p>Canada</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color: "#fff", marginRight: "2rem" }}/>
                    514-995 9967</h4>
                </div>
                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem" }}/>
                    hxinqc@gmail.com</h4>
                </div>
            </div>

            <div className="right">
                <h4>About </h4>
                <p>This is me Xin Hui. </p>
                <p>I enjoy the chalenges in technical world and learn from that.</p>
                <div className="social">
                    <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem" }}/>
                    <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem" }}/>
                    <Link to="https://www.linkedin.com/in/xin-hui-0b451224b/" target="_blank">
                        <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem" }}/>
                    </Link>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer