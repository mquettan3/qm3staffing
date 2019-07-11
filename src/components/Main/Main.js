import React, { Component } from 'react';

import '../../assets/css/main.css';

import ContactHeader from "./ContactHeader.js";
import Navbar from "./Navbar.js";
// import Slideshow from "./Slideshow.js";
import Promo from "./Promo.js";
import CallToAction from './CallToAction.js';
// import SectorsAndServices from './SectorsAndServices.js';
import WhoWeAre from './WhoWeAre.js';
import AboutUs from './AboutUs.js';
// import OurPartners from './OurPartners.js';
import OurTeam from './OurTeam.js';
import Footer from './Footer.js';

import $ from 'jquery';

class Main extends Component {

  componentDidMount() {
		//Scroll totop
		//-----------------------------------------------
		$(window).scroll(function() {
			if($(this).scrollTop() != 0) {
				$(".scrollToTop").addClass("fadeToTop");
				$(".scrollToTop").removeClass("fadeToBottom");
			} else {
				$(".scrollToTop").removeClass("fadeToTop");
				$(".scrollToTop").addClass("fadeToBottom");
			}
		});

		$(".scrollToTop").click(function() {
			$("body,html").animate({scrollTop:0},800);
		});
  }

  render() {
    return (
          <div id="home" className="front-page ">
        
            <div className="scrollToTop circle"><i className="fa fa-angle-up"></i></div>
        
            <div className="page-wrapper">
              <ContactHeader />
              <Navbar 
              location="Main"
              />
              {/* <Slideshow /> */}
              <Promo />
              <div id="page-start"></div>
              <CallToAction
                action_name="Job Seekers"
                action_description="Looking for a new job?!  Let us help!"
              />

              <WhoWeAre />
              <AboutUs />
              <CallToAction
                action_name="Employers"
                action_description="Inquire about finding candidates for your open positions!"
              />
              <OurTeam />
              <Footer />
            </div>
          </div>
    );
  }
}

export default Main;
