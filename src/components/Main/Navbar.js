import React, { Component } from 'react';
import '../../assets/css/main.css';
import QM3Logo from "../../assets/images/Logos/QM3_Logo.svg";
import { Link } from "react-router-dom";

export default class Navbar extends Component {  
    render() {
      return (
        <header className="header fixed fixed-desktop clearfix">
            <div className="container">
            <div className="row">
                <div className="col-md-auto hidden-md-down pl-3">
                <div className="header-first clearfix">

                    <div id="logo" className="logo">
                    <Link to="/"><embed id="logo_img" src={QM3Logo} alt="The Project" /></Link>
                    </div>

                    {/* <div className="site-slogan">
                    Multipurpose HTML5 Template
                    </div> */}

                </div>

                </div>
                <div className="col-lg-8 ml-lg-auto">
            
                <div className="header-second clearfix">
                    
                <div className="main-navigation main-navigation--mega-menu  animated">
                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                    <div className="navbar-brand clearfix hidden-lg-up">

                        <div id="logo-mobile" className="logo">
                        <Link to="/"><embed id="logo_img" src={QM3Logo} alt="The Project" /></Link>
                        </div>

                        {/* <div className="site-slogan">
                        Multipurpose HTML5 Template
                        </div> */}

                    </div>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse-1" aria-controls="navbar-collapse-1" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar-collapse-1">
                        <ul className="navbar-nav ml-xl-auto">

                        <li className="nav-item dropdown active mega-menu mega-menu--wide">
                            <Link to="/" className="nav-link" id="first-dropdown">Home</Link>
                        </li>
                        <li className="nav-item dropdown ">
                            <a href="#" className="nav-link dropdown-toggle" id="second-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                            <ul className="dropdown-menu" aria-labelledby="second-dropdown">
                            <li ><a href="#">Consulting</a></li>
                            <li ><a href="#">Temp 1</a></li>
                            <li ><a href="#">Temp 2</a></li>
                            <li ><a href="#">Temp 3</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown  mega-menu mega-menu--wide">
                            <a href="#about" className="nav-link" id="third-dropdown">About</a>
                        </li>
                        <li className="nav-item dropdown  mega-menu mega-menu--wide">
                            <a href="#partners" className="nav-link" id="fourth-dropdown">Our Partners</a>
                        </li>
                        </ul>
                    </div>
                    </nav>
                </div>
                </div>

                </div>
                <div className="col-auto hidden-md-down pl-0 pl-md-1">
                <div className="header-dropdown-buttons">
                    <a href="mailto:info@qm3us.net" className="btn btn-sm btn-default">Contact Us <i className="fa fa-envelope-o pl-1"></i></a>
                </div>
                </div>
            </div>
            </div>
        </header>
      )
    };
}
