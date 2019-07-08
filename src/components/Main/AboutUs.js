import React, { Component } from 'react';
import SaurelPortrait from "../../assets/images/AboutUs.png";

export default class AboutUs extends Component {  
    render() {
      return (              
        <section id="about" className="main-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-lg-2">
                {/* <div className="overlay-container overlay-visible"> */}
                  <img src={SaurelPortrait} alt=""/>
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
                <p><span className="text-default">QM3 Solutions</span> stands on a foundation of integrity as we aim to make a difference and directly impact the lives of the individuals which we serve.  With every placement we facilitate we strive to give individuals new views and a new way to see life through.</p>
                <p>The opportunity to work with people potentially off the streets, or out of jail, and provide them with the life changing opportunity to provide shelter, books, shoes, or other necessities to themselves and their families is paramount to what we stand for.  We want to be a full transition pathway for people to make it from the ghetto all the way to the boardroom.</p>
              </div>
            </div>
          </div>
          <br />
        </section>
      )
    }
};