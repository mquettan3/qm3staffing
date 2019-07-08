import React, { Component } from 'react';

export default class AboutUs extends Component {  
    render() {
      return (              
        <section id="about" className="main-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-lg-2">
                {/* <div className="overlay-container overlay-visible"> */}
                  <img src="images/corporate-5-section-image-1.jpg" alt=""/>
                  {/* <a href="#" className="overlay-link"><i className="fa fa-link"></i></a> */}
                  <div className="overlay-bottom hidden-sm-down">
                    <div className="text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nobis sunt, quae alias impedit ea molestias recusandae.
                    </div>
                  </div>
                {/* </div> */}
              </div>
              <div className="col-lg-6 order-lg-1">
                <h2 className="title">About Us</h2>
                <div className="separator-2"></div>
                <p>Lorem ipsum dolor sit amet, lotrem <span className="text-default">some colored text</span>. Nulla explicabo <strong>attention to this</strong> blanditiis, ex cupiditate ipsam debitis rem.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing llum magni nam doloribus eligendi, veritatis aspernatur amet odit doloremque possimus error. Vel, totam numquam animi!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <strong>Some bold text</strong>, unde voluptatum quidem explicabo et eius aut nisi dolore ut. Sapiente velit quidem, unde fugit. Neque illum, debitis ut, porro natus.</p>
                {/* <a href="page-about.html" className="btn radius-50 btn-default"><i className="fa fa-users pr-10"></i>Learn More</a> */}
              </div>
            </div>
          </div>
          <br />
        </section>
      )
    }
};