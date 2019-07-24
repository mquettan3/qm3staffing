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
import QuoteSection from './QuoteSection.js';
import OurValues from './OurValues.js';
import OurProcess from './OurProcess.js';
// import OurPartners from './OurPartners.js';
import OurTeam from './OurTeam.js';
import Footer from './Footer.js';

import $ from 'jquery';

class Main extends Component {

  componentDidMount() {
    window.scrollTo(0,0);
    
		//Scroll totop
		//-----------------------------------------------
		$(window).scroll(function() {
			if($(this).scrollTop() !== 0) {
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
              hash={this.props.location.hash}
              />
              {/* <Slideshow /> */}
              <Promo />
              <div id="page-start"></div>
              <CallToAction
                action_name="Job Seekers"
                action_description="Looking for a new Opportunity?!  Let us help!"
                link="/candidates"
              />

              <WhoWeAre />
              <AboutUs />
              <QuoteSection />
              <OurValues />
              <OurProcess />
              {/* <OurValues /> */}
              <CallToAction
                action_name="Employers"
                action_description="Inquire about finding the Right talent for your open opportunies!"
                link="/employers"
              />
              <OurTeam />
              <Footer />
            </div>
          </div>
    );
  }
}

export default Main;
