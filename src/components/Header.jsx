import React from "react";
import { Icon } from '@iconify/react';
import img from "../img/portfolio.png";



function Header(props) {

    return (
            <header id="header" className="header">
            <div className="portfolio-image-name">
            <img id="portfolio-pic" src={img} alt="selfie for portfolio" />
            <div className="portfolio-name">
            <span className="nome">Ramon Fávero</span>
            <span className="subnome">{props.headerSubTitle}</span>
            </div>
              </div>
              <div className="header-list-div">
                <ul>
              <li className="header-li header-options-text"><a href="#apresentation" className="headericon-row" ><Icon className="header-icon" icon="bx:home-alt" /><span>  Home</span></a></li>
              <li className="header-li header-options-text"><a href="#aboutme" className="headericon-row"><Icon className="header-icon" icon="bx:id-card" /><span>   About Me</span></a></li>
              <li className="header-li header-options-text"><a href="#projects" className="headericon-row" ><Icon className="header-icon" icon="bx:layer" /><span>  My Projects</span></a></li>
              <li className="header-li header-options-text"><a href="#contacts" className="headericon-row" ><Icon className="header-icon" icon="bx:phone" /><span>  Contacts</span></a></li>
              </ul>
              </div>
            </header>
    )
}
export default Header; 