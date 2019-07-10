import React, { Component } from 'react';

import QM3Logo from "../../assets/images/Logos/QM3_Logo.svg";

export default class Footer extends Component {
    constructor(props) {
      super(props);
  
      var date = new Date();
      this.state = {currentYear: date.getFullYear()};
    }

    render() {
      return (
        <footer id="footer" className="clearfix ">
          <div className="footer">
            <div className="container">
              <div className="footer-inner">
                <div className="row">
                  <div className="offset-lg-1 col-lg-4">
                    <div className="footer-content">
                      <div className="logo-footer"><embed id="logo-footer" src={QM3Logo} alt=""/></div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus illo vel dolorum soluta consectetur doloribus sit. Delectus non tenetur odit dicta vitae debitis suscipit doloribus. Ipsa, aut voluptas quaerat... <a href="#about">Learn More<i className="fa fa-long-arrow-right pl-1"></i></a></p>
                      <div className="separator-2"></div>
                      <nav>
                        <ul className="nav flex-column">
                          <li className="nav-item"><a className="nav-link" href="#">Careers @ QM3</a></li>
                          <li className="nav-item"><a className="nav-link" href="#">Support</a></li>
                          <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="offset-lg-2 col-lg-4">
                    <div className="footer-content">
                      <h2 className="title">Find Us</h2>
                      <div className="separator-2"></div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium odio voluptatem necessitatibus illo vel dolorum soluta.</p>
                      <ul className="social-links circle animated-effect-1">
                        <li className="facebook"><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li className="twitter"><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li className="googleplus"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                        <li className="linkedin"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li className="xing"><a href="#"><i className="fa fa-xing"></i></a></li>
                      </ul>
                      <div className="separator-2"></div>
                      <ul className="list-icons">
                        <li><i className="fa fa-map-marker pr-2 text-default"></i> 2260 Lithonia Ind. Blvd. Suite F Lithonia, GA 30058</li>
                        <li><i className="fa fa-phone pr-2 text-default"></i> (844) 382-1819</li>
                        <li><a href="#"><i className="fa fa-envelope-o pr-2"></i>info@qm3us.net</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="subfooter dark-bg">
            <div className="container">
              <div className="subfooter-inner">
                <div className="row">
                  <div className="col-md-12">
                    <p className="text-center">Copyright © {this.state.currentYear}. All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>        
        </footer>
      )
    }
};