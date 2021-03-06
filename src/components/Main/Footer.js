import React, { Component } from 'react';

import QM3Logo from "../../assets/images/Logos/QM3_Logo.svg";

export default class Footer extends Component {
    constructor(props) {
      super(props);
  
      var date = new Date();
      this.state = {currentYear: date.getFullYear()};
    }

    render() {
      let learnMore;
      if(this.props.location === "Main") {
        learnMore = <a href="#about" className="smooth-scroll">Learn More<i className="fa fa-long-arrow-right pl-1"></i></a>
      } else {
        learnMore = <a href="https://www.qm3solutions.com/#about">Learn More<i className="fa fa-long-arrow-right pl-1"></i></a>
      }
      return (
        <footer id="footer" className="clearfix">
          <div className="footer">
            <div className="container">
              <div className="footer-inner">
                <div className="row">
                  <div className="offset-lg-1 col-lg-4">
                    <div className="footer-content">
                      <div className="logo-footer"><img className="logo_img" src={QM3Logo} alt="QM3 Solutions"/></div>
                      <p>QM3 Solutions stands on a foundation of integrity as we aim to make a difference and directly impact the lives of the individuals which we serve...{learnMore}</p>
                      <div className="separator-2"></div>
                      <nav>
                        <ul className="nav flex-column">
                          <li className="nav-item"><a className="nav-link" href="https://www.linkedin.com/company/integrated-construction-management-inc./jobs/">Careers @ QM3</a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="offset-lg-2 col-lg-4">
                    <div className="footer-content">
                      <h2 className="title">Contact Us</h2>
                      <div className="separator-2"></div>
                      <p>Please contact us with any questions you may have.  We are here to bridge the gap and ease the connection between talent and opportunity.<br/><br/>Follow us on social media!</p>
                      <ul className="social-links circle animated-effect-1">
                        <li className="facebook"><a href="https://www.facebook.com/QM3US" aria-label="Follow us on Facebook!"><i className="fa fa-facebook"></i></a></li>
                        <li className="linkedin"><a href="https://www.linkedin.com/company/integrated-construction-management-inc./jobs/" aria-label="Follow us on LinkedIn!"><i className="fa fa-linkedin"></i></a></li>
                        <li className="instagram"><a href="#"><i className="fa fa-instagram" aria-label="Follow us on Instagram!"></i></a></li>
                      </ul>
                      <div className="separator-2"></div>
                      <ul className="list-icons">
                        <li><i className="fa fa-map-marker pr-2 text-default"></i> 1800 Wilson Way Suite 6 Smyrna, Ga</li>
                        <li><i className="fa fa-phone pr-2 text-default"></i> (678) 903-6219</li>
                        <li><a href="mailto:info@qm3solutions.com"><i className="fa fa-envelope-o pr-2"></i>info@qm3solutions.com</a></li>
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