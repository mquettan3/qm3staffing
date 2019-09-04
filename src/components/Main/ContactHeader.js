import React, { Component } from 'react';
import '../../assets/css/main.css';

export default class ContactHeader extends Component {  
    render() {
      return (
          <div className="header-top dark">
              <div className="container">
                <div className="row">
                  <div className="col-2 col-md-5">
                    <div className="header-top-first clearfix">
                      <ul className="social-links circle small clearfix hidden-sm-down">
                          <li className="linkedin"><a href="https://www.linkedin.com/company/integrated-construction-management-inc./jobs/"><i className="fa fa-linkedin"></i></a></li>
                          <li className="facebook"><a href="https://www.facebook.com/QM3US"><i className="fa fa-facebook"></i></a></li>
                          <li className="instagram"><a href="#"><i className="fa fa-instagram"></i></a></li>
                      </ul>
                      <div className="social-links hidden-md-up circle small">
                        <div className="btn-group dropdown">
                          <button id="header-top-drop-1" type="button" className="btn dropdown-toggle dropdown-toggle--no-caret" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-share-alt"></i></button>
                          <ul className="dropdown-menu dropdown-animation" aria-labelledby="header-top-drop-1">
                            <li className="linkedin"><a href="https://www.linkedin.com/company/integrated-construction-management-inc./jobs/"><i className="fa fa-linkedin"></i></a></li>
                            <li className="facebook"><a href="https://www.facebook.com/QM3US"><i className="fa fa-facebook"></i></a></li>
                            <li className="instagram"><a href="#"><i className="fa fa-instagram"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-10 col-md-7">
    
                    <div id="header-top-second"  className="clearfix text-right">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-phone pr-1 pl-10"></i> (678) 903-6219</li>
                        <li className="list-inline-item"><i className="fa fa-envelope-o pr-1 pl-10"></i> info@qm3solutions.com</li>
                      </ul>
                    </div>
    
                  </div>
                </div>
              </div>
          </div>
        )
    };
}
