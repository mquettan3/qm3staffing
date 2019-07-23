import React, { Component } from 'react';
import SaurelPortrait from "../../assets/images/AboutUs.png";

export default class AboutUs extends Component {  
    render() {
      return (              
        <section className="about-us main-container section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-lg-2">
                <div className="overlay-container overlay-visible">
                  <img src={SaurelPortrait} alt=""/>
                  {/* <a href="#" className="overlay-link"><i className="fa fa-link"></i></a> */}
                  <div className="overlay-bottom hidden-sm-down" style={{opacity: 1}}>
                    <div className="text">
                      Hiring and Uniting Talented Individuals with Fabulous Companies.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                {/* <h2 className="title">About Us</h2>
                <div className="separator-2"></div> */}
                <p className="site-slogan">"We Do It Right!"</p>
                <ul>
                  <li>We place the <span className="text-default"><b>Right</b></span> people</li>
                  <li>In the <span className="text-default"><b>Right</b></span> jobs</li>
                  <li>At the <span className="text-default"><b>Right</b></span> Time</li>
                  <li>The <span className="text-default"><b>Right</b></span> Way</li>
                  <li>For all the <span className="text-default"><b>Right</b></span> reasons</li>
                </ul>
                <p>There is no talent we cannot find and no opportunity we cannot locate.  We aim to be the bridge to the between talent and opportunity.  We do <b>NOT</b> simply provide anyone with a heartbeat to any position with any companay willing to hire.  We make the difficult choices between what is convenient and what is <span className="text-default"><b>Right</b></span>!  We unite you with the <span className="text-default"><b>Right</b></span> talent or the <span className="text-default"><b>Right</b></span> opportunity; not just anybody, and not just any job.</p>
                <ul>
                  <li>We hire the <span className="text-default"><b>Right</b></span> way</li>
                  <li>We train the <span className="text-default"><b>Right</b></span> way</li>
                  <li>Allowing you to retain the <span className="text-default"><b>Right</b></span> one!</li>
                </ul>
                <p>We are timely, supportive, and positive.  Fulfilling the needs of many by bringing joy to all.</p>
              </div>
            </div>
          </div>
          <br />
        </section>
      )
    }
};