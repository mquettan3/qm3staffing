import React, { Component } from 'react';
import Navbar from "../Main/Navbar.js"
import ContactHeader from "../Main/ContactHeader.js"
import Footer from "../Main/Footer.js"
import '../../assets/css/main.css';
import { Link } from "react-router-dom";

export default class Employers extends Component {
    componentDidMount() {
      window.scrollTo(0,0);
    }

    render() {
      return (
          <div className="employers-wrapper">
              <ContactHeader />
              <Navbar />
              <div className="container">
                <div className="row justify-content-center">
                  <h1 className="text-center mt-4">Request Staff</h1>
                  <div className="separator"></div>
                  <p>Attention Hiring Managers: If you have a staffing or workforce need, you can trust <span className="text-default">QM3 Solutions</span> to help. After completing the short form below, your request will be routed to a QM3 representative and you will be contacted quickly to discuss your hiring need.</p>
                  <p><b>IF YOU ARE LOOKING FOR A JOB, PLEASE DO NOT USE THIS FORM. </b> <Link to="/candidates">CLICK HERE TO SEARCH JOBS!</Link></p>
                </div>
                <div className="row">
                  <fieldset class="form-group col-md-8 offset-md-2 col-sm-12">
                    <legend class="col-from-legend col-md-5 col-lg-3">Staff Request Form</legend>
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
                      <label for="title">Title</label>
                      <input type="text" className="form-control" id="title" placeholder="Enter Title"></input>
                    </div>
                    <div className="form-group has-feedback">
                      <label for="inputEmail">Email Address*</label>
                      <input type="text" className="form-control" id="inputEmail" placeholder="Enter Email"></input>
                    </div>
                    <div className="form-group has-feedback">
                      <label for="inputPhone">Phone Number*</label>
                      <input type="text" className="form-control" id="inputPhone" placeholder="Enter Phone Number"></input>
                    </div>
                    <div className="form-group has-feedback">
                      <label for="inputCompanyName">Company Name*</label>
                      <input type="text" className="form-control" id="inputCompanyName" placeholder="Enter Company Name"></input>
                    </div>
                    <div className="form-group has-feedback">
                      <label for="inputCity">City*</label>
                      <input type="text" className="form-control" id="inputCity" placeholder="Enter City"></input>
                    </div>
                    <div className="form-group has-feedback">
                      <label for="inputState">State*</label>
                      <select type="text" className="form-control" id="inputState">
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>Arizona</option>
                        <option>Arkansas</option>
                        <option>California</option>
                        <option>Colorado</option>
                        <option>Connecticut</option>
                        <option>Delaware</option>
                        <option>Florida</option>
                        <option>Georgia</option>
                        <option>Hawaii</option>
                        <option>Idaho</option>
                        <option>Illinois</option>
                        <option>Indiana</option>
                        <option>Iowa</option>
                        <option>Kansas</option>
                        <option>Kentucky</option>
                        <option>Louisiana</option>
                        <option>Maine</option>
                        <option>Maryland</option>
                        <option>Massachusetts</option>
                        <option>Michigan</option>
                        <option>Minnesota</option>
                        <option>Mississippi</option>
                        <option>Missouri</option>
                        <option>Montana</option>
                        <option>Nebraska</option>
                        <option>Nevada</option>
                        <option>New Hampshire</option>
                        <option>New Jersey</option>
                        <option>New Mexico</option>
                        <option>New York</option>
                        <option>North Carolina</option>
                        <option>North Dakota</option>
                        <option>Ohio</option>
                        <option>Oklahoma</option>
                        <option>Oregon</option>
                        <option>Pennsylvania</option>
                        <option>Rhode Island</option>
                        <option>South Carolina</option>
                        <option>South Dakota</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Utah</option>
                        <option>Vermont</option>
                        <option>Virginia</option>
                        <option>Washington</option>
                        <option>West Virginia</option>
                        <option>Wisconsin</option>
                        <option>Wyoming</option>
                      </select>
                    </div>
                    <div className="form-group has-feedback">
                      <label for="inputZip">Zip Code*</label>
                      <input type="text" className="form-control" id="inputZip" placeholder="Enter Zip Code"></input>
                    </div>
                    <div className="form-group has-feedback">
                      <label for="inputSkillsOfInterest">Hire Types of Interest*</label>
                      <select multiple className="form-control" id="inputSkillsOfInterest">
                        <option>Clerical</option>
                        <option>Industrial</option>
                        <option>Labor</option>
                        <option>Warehouse</option>
                        <option>Professional</option>
                      </select>
                    </div>
                    <div className="form-group has-feedback">
                      <label for="inputHireTypes">Hire Types of Interest*</label>
                      <select multiple className="form-control" id="inputHireTypes">
                        <option>Temporary</option>
                        <option>Temp to Perm (500 hours)</option>
                        <option>Perm Palcement / Direct Hire</option>
                        <option>Contract Talent</option>
                        <option>Job Training</option>
                      </select>
                    </div>
                    <div className="form-group has-feedback">
                      <label for="inputDetails">Details</label>
                      <textarea rows="5" className="form-control" id="inputDetails" placeholder="Details of request." />
                    </div>
                    <div className="form-group">
                      <label for="inputDetails">*Required Fields</label>
                    </div>
                    <button type="submit" class="btn btn-default">Request Staff</button>
                  </form>
                  </fieldset>
                </div>
              </div>
              <Footer />
          </div>
      )
    }
};