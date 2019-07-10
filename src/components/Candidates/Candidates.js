import React, { Component } from 'react';
import Navbar from "../Main/Navbar.js"
import ContactHeader from "../Main/ContactHeader.js"
import CallToAction from "../Main/CallToAction.js"
import Footer from "../Main/Footer.js"
import '../../assets/css/main.css';

export default class Candidates extends Component {
    componentDidMount() {
      window.scrollTo(0,0);
    }
    
    render() {
      return (
          <div className="candidates-wrapper">
              <ContactHeader />
              <Navbar 
                location="Candidates"
              />
              <CallToAction 
                action_name="Subscribe"
                action_description="Subscribe to our newsletter to be informed when positions open!"
                />
                <div className="container">
                  <div className="row justify-content-center">
                    <h1 className="text-center mt-4">Open Positions</h1>
                    <div className="separator"></div>
                    <p>All of our currently open positions with all of our partnered employers will be up-to-date on both LinkedIn and Indeed.  Please follow either of the links below to view all of our open positions.
                      <br /> <br />
                      <a href="https://www.linkedin.com/company/integrated-construction-management-inc./jobs/">View our current open positions on Linked In</a>
                      <br />
                      <a href="https://www.indeed.com/cmp/Qm3-Utility-Services,-Inc.">View our current open positions on Indeed</a>
                    </p>
                  </div>
                  <div className="row justify-content-center">
                    <h1 className="text-center mt-4">Inquire About Future Positions</h1>
                    <div className="separator"></div>
                    <p>All of our open positions will be up-to-date on both LinkedIn and Indeed.  Please follow either of the links below to view all of our open positions.
                      <br /> <br />
                      <div className="row">
                        <fieldset class="form-group col-md-8 offset-md-2 col-sm-12">
                          <legend class="col-from-legend col-md-5 col-lg-3">Position Request Form</legend>
                          <form>
                            <div className="form-group has-feedback">
                              <label for="firstName">First Name*</label>
                              <input type="text" className="form-control" id="firstName" placeholder="Enter your first name"></input>
                            </div>
                            <div className="form-group has-feedback">
                              <label for="lastName">Last Name*</label>
                              <input type="text" className="form-control" id="lastName" placeholder="Enter your last name"></input>
                            </div>
                            <div className="form-group has-feedback">
                              <label for="inputEmail">Email Address*</label>
                              <input type="text" className="form-control" id="inputEmail" placeholder="Enter Email"></input>
                            </div>
                            <div className="form-group has-feedback">
                              <label for="inputSkillsOfInterest">Fields of Interest*</label>
                              <select multiple className="form-control" id="inputSkillsOfInterest">
                                <option>Clerical</option>
                                <option>Industrial</option>
                                <option>Labor</option>
                                <option>Warehouse</option>
                                <option>Professional</option>
                              </select>
                            </div>
                            <div className="form-group has-feedback">
                              <label for="inputResume">Resume*</label>
                              <input type="file" className="form-control" id="inputResume"></input>
                            </div>
                            <div className="form-group has-feedback">
                              <label for="inputDetails">Details</label>
                              <textarea rows="5" className="form-control" id="inputDetails" placeholder="Details of request." />
                            </div>
                            <div className="form-group">
                              <label for="inputDetails">*Required Fields</label>
                            </div>
                            <button type="submit" class="btn btn-default">Request Position</button>
                          </form>
                        </fieldset>
                      </div>
                    </p>
                  </div>
                </div>
              <Footer />
          </div>
      )
    }
};