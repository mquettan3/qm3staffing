import React, { Component } from 'react';
import '../../assets/css/main.css';
import QM3Logo from "../../assets/images/Logos/QM3_Logo.svg";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    // constructor(props){
    //     super(props);

    //     this.handleScroll = this.handleScroll.bind(this);

    //     this.state = {scrollTop: 0};
    // }
    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll);
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // }

    // handleScroll(e) {
    //     this.setState({scrollTop: e.srcElement.body.scrollTop})
    // }

    render() {
        // let isSloganHidden = "";
        // if(window.scrollY !== 0) {
        //     isSloganHidden = "d-none";
        // }

        return (
        <header className="header fixed fixed-desktop clearfix">
            <div className="container">
            <div className="row">
                <div className="col-md-auto hidden-md-down pl-3">
                <div className="header-first clearfix">
                        <div id="logo" className="logo">
                            <Link to="/">
                                <img id="logo_img" src={QM3Logo} alt="The Project" />
                            </Link>
                        </div>

                    <div className="site-slogan">
                    "We Do It Right!"
                    </div>

                </div>

                </div>
                <div className="col-lg-7 ml-lg-auto">
            
                <div className="header-second clearfix">
                    
                <div className="main-navigation main-navigation--mega-menu  animated">
                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                    <div className="navbar-brand clearfix hidden-lg-up">

                            <div id="logo-mobile" className="logo">
                                <Link to="/">
                                    <img id="logo_img" src={QM3Logo} alt="The Project" />
                                </Link>
                            </div>

                        <div className="site-slogan">
                        "We Do It Right!"
                        </div>

                    </div>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse-1" aria-controls="navbar-collapse-1" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar-collapse-1">
                        <ul className="navbar-nav ml-xl-auto">

                        <li className="nav-item dropdown active mega-menu mega-menu--wide">
                            <Link to="/" className="nav-link" id="first-dropdown">Home</Link>
                        </li>
                        <li className="nav-item dropdown  mega-menu mega-menu--wide">
                            <a href="#about" className="nav-link" id="third-dropdown">About Us</a>
                        </li>
                        <li className="nav-item dropdown ">
                            <a href="#" className="nav-link dropdown-toggle" id="second-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                            <ul className="dropdown-menu" aria-labelledby="second-dropdown">
                            <li ><Link to="/employers">For Employers</Link></li>
                            <li ><Link to="/candidates">For Job Seekers</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown  mega-menu mega-menu--wide">
                            <a href="#ourteam" className="nav-link" id="fourth-dropdown">Our Team</a>
                        </li>
                        <li className="nav-item dropdown  mega-menu mega-menu--wide">
                            <a href="#footer" className="nav-link" id="fourth-dropdown">Contact Us</a>
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
