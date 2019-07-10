import React, { Component } from 'react';
import Navbar from "../Main/Navbar.js"
import ContactHeader from "../Main/ContactHeader.js"
import CallToAction from "../Main/CallToAction.js"
import Footer from "../Main/Footer.js"
import '../../assets/css/main.css';

export default class Employers extends Component {  
    render() {
      return (
          <div className="employers-wrapper">
              <ContactHeader />
              <Navbar />
              <CallToAction 
                action_name="Subscribe"
                action_description="Subscribe to our newsletter to be informed when positions open!"
                />
              <Footer />
          </div>
      )
    }
};