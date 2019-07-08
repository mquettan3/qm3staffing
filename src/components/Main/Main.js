import React, { Component } from 'react';

import '../../assets/css/main.css';

import ContactHeader from "./ContactHeader.js";
import Navbar from "./Navbar.js";
import Slideshow from "./Slideshow.js";
import CallToAction from './CallToAction.js';
import SectorsAndServices from './SectorsAndServices.js';
import AboutUs from './AboutUs.js';
import OurPartners from './OurPartners.js';
import Footer from './Footer.js';

class Main extends Component {

  render() {
    return (
          <div id="home" className="front-page ">
        
            <div className="scrollToTop circle"><i className="fa fa-angle-up"></i></div>
        
            <div className="page-wrapper">
              <div className="header-container">
                <ContactHeader />
                <Navbar />
              </div>
                <Slideshow />        
              <div id="page-start"></div>
              <CallToAction
                action_name="Subscribe"
                action_description="Subscribe to our newsletter to be informed when positions open!"
              />

              <SectorsAndServices />
              <AboutUs />
              <OurPartners />
              <Footer />
            </div>
          </div>
    );
  }
}

export default Main;
