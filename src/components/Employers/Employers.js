import React, { Component } from 'react';
import Navbar from "../Main/Navbar.js"
import ContactHeader from "../Main/ContactHeader.js"
import Footer from "../Main/Footer.js"
import '../../assets/css/main.css';
import { Link } from "react-router-dom";
import TabbedInformation from './TabbedInformation.js'

export default class Employers extends Component {
  constructor(props){
    super(props);
    
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onCompanyNameChange = this.onCompanyNameChange.bind(this);
    this.onCityChange = this.onCityChange.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
    this.onZipChange = this.onZipChange.bind(this);
    this.onSkillTypesChange = this.onSkillTypesChange.bind(this);
    this.onHireTypesChange = this.onHireTypesChange.bind(this);
    this.onDetailsChange = this.onDetailsChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = { 
      firstName: {value: "", isValid: false},
      lastName: {value: "", isValid: false},
      title: {value: "", isValid: true},
      email: {value: "", isValid: false},
      phone: {value: "", isValid: false},
      companyName: {value: "", isValid: false},
      city: {value: "", isValid: false},
      state: {value: "", isValid: false},
      zip: {value: "", isValid: false},
      skillTypes: {value: [], isValid: true},
      hireTypes: {value: [], isValid: true},
      details: {value: "", isValid: true},
    }
  }
    componentDidMount() {
      window.scrollTo(0,0);
    }

    onFirstNameChange(e) {
      var valid = false;

      if(e.target.value) {
        valid = true;
      }

      this.setState({firstName: {value: e.target.value, isValid: valid}});
    }

    onLastNameChange(e) {
      var valid = false;

      if(e.target.value) {
        valid = true;
      }

      this.setState({lastName: {value: e.target.value, isValid: valid}});
    }

    onTitleChange(e) {
      var valid = false;

      if(e.target.value) {
        valid = true;
      }

      this.setState({title: {value: e.target.value, isValid: valid}});
    }

    onEmailChange(e) {
      var valid = false;

      if(e.target.value) {
        valid = true;
      }

      this.setState({email: {value: e.target.value, isValid: valid}});
    }

    onPhoneChange(e) {
      var valid = false;

      if(e.target.value) {
        valid = true;
      }

      this.setState({phone: {value: e.target.value, isValid: valid}});
    }

    onCompanyNameChange(e) {
      var valid = false;

      if(e.target.value) {
        valid = true;
      }

      this.setState({companyName: {value: e.target.value, isValid: valid}});
    }

    onCityChange(e) {
      var valid = false;

      if(e.target.value) {
        valid = true;
      }

      this.setState({city: {value: e.target.value, isValid: valid}});
    }

    onStateChange(e) {
      var valid = false;

      if(e.target.value) {
        valid = true;
      }

      this.setState({state: {value: e.target.value, isValid: valid}});
    }

    onZipChange(e) {
      var valid = false;

      if(e.target.value) {
        valid = true;
      }

      this.setState({zip: {value: e.target.value, isValid: valid}});
    }

    onSkillTypesChange(e) {
      var valid = false;

      if(e.target.selectedOptions.length > 0) {
        valid = true;
      }

      this.setState({skillTypes: {value: [...e.target.selectedOptions].map(o => o.value), isValid: valid}});
    }

    onHireTypesChange(e) {
      var valid = false;

      if(e.target.selectedOptions.length > 0) {
        valid = true;
      }

      this.setState({hireTypes: {value: [...e.target.selectedOptions].map(o => o.value), isValid: valid}});
    }

    onDetailsChange(e) {
      var valid = false;

      if(e.target.value) {
        valid = true;
      }

      this.setState({details: {value: e.target.value, isValid: valid}});
    }

    onSubmit(e) {
      // Make sure everything is valid.
      if (
        this.state.firstName.isValid &&
        this.state.lastName.isValid &&
        this.state.title.isValid &&
        this.state.email.isValid &&
        this.state.phone.isValid &&
        this.state.companyName.isValid &&
        this.state.city.isValid &&
        this.state.state.isValid &&
        this.state.zip.isValid &&
        this.state.skillTypes.isValid &&
        this.state.hireTypes.isValid &&
        this.state.details.isValid
      ) {
        console.log("Valid Submit!");
      } else {
        console.log("Invalid Submit!");
      }

      e.preventDefault();
    }

    render() {
      return (
          <div className="employers-wrapper">
              <ContactHeader />
              <Navbar 
                location="Employers"
              />
              <div className="container">
                <div className="row justify-content-center">
                  <h1 className="col-sm-12 text-center mt-4">Areas of Expertise</h1>
                </div>
                <div className="separator"></div>
                <div className="row">
                    <p className="col-12">
                      We at QM3 Solutions pride ourselves on being the experts in providing employers with candidates of ranging skills, including but not limited to the following:
                    </p>
                    <ul>
                      <li>Clerical - CSR, Secretarial, Office Management, Data Entry, ect...</li>
                      <li>Industriral - Light and Regular</li>
                      <li>Labor - Skilled and general</li>
                      <li>Warehouse - Scanners, pickers, lift drivers, pallet jack operators, material handler, ect...</li>
                      <li>Professional - CEO, accountants, VPs, CFO, IT, ect...</li>
                    </ul>
                    <p className="col-12">
                    <br />
                    We also speacialize in providing each of the following placement options:
                    </p>
                    <ul>
                      <li>Temporary</li>
                      <li>Temp to Perm (480 hours)</li>
                      <li>Perm Placement / Direct Hire</li>
                      <li>Contract Talent</li>
                      <li>High Volume Placement and Partnership</li>
                      <li>Job Training</li>
                    </ul>
                </div>
              </div>
              
              <TabbedInformation />

              <div className="container">
                <div className="row justify-content-center">
                  <h1 className="col-sm-12 text-center mt-4">Request Staff</h1>
                  <div className="separator"></div>
                  <p className="col-sm-12">Attention Hiring Managers: If you have a staffing or workforce need, you can trust <span className="text-default">QM3 Solutions</span> to help. After completing the short form below, your request will be routed to a QM3 representative and you will be contacted quickly to discuss your hiring need.</p>
                  <p className="col-sm-12"><b>IF YOU ARE LOOKING FOR A JOB, PLEASE DO NOT USE THIS FORM. </b> <Link to="/candidates">CLICK HERE TO SEARCH JOBS!</Link></p>
                </div>
                <div className="row">
                  <fieldset className="form-group col-md-8 offset-md-2 col-sm-12">
                    <legend className="col-from-legend col-md-5 col-lg-3">Staff Request Form</legend>
                  <form>
                    <div className="form-group has-feedback">
                      <label htmlFor="firstName">First Name*</label>
                      <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" onChange={this.onFirstNameChange} value={this.state.firstName.value}></input>
                    </div>
                    <div className="form-group has-feedback">
                      <label htmlFor="lastName">Last Name*</label>
                      <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" onChange={this.onLastNameChange} value={this.state.lastName.value}></input>
                    </div>
                    <div className="form-group has-feedback">
                      <label htmlFor="title">Title</label>
                      <input type="text" className="form-control" id="title" placeholder="Enter Title" onChange={this.onTitleChange} value={this.state.title.value}></input>
                    </div>
                    <div className="form-group has-feedback">
                      <label htmlFor="inputEmail">Email Address*</label>
                      <input type="text" className="form-control" id="inputEmail" placeholder="Enter Email" onChange={this.onEmailChange} value={this.state.email.value}></input>
                    </div>
                    <div className="form-group has-feedback">
                      <label htmlFor="inputPhone">Phone Number*</label>
                      <input type="text" className="form-control" id="inputPhone" placeholder="Enter Phone Number" onChange={this.onPhoneChange} value={this.state.phone.value}></input>
                    </div>
                    <div className="form-group has-feedback">
                      <label htmlFor="inputCompanyName">Company Name*</label>
                      <input type="text" className="form-control" id="inputCompanyName" placeholder="Enter Company Name" onChange={this.onCompanyNameChange} value={this.state.companyName.value}></input>
                    </div>
                    <div className="form-group has-feedback">
                      <label htmlFor="inputCity">City*</label>
                      <input type="text" className="form-control" id="inputCity" placeholder="Enter City" onChange={this.onCityChange} value={this.state.city.value}></input>
                    </div>
                    <div className="form-group has-feedback">
                      <label htmlFor="inputState">State*</label>
                      <select type="text" className="form-control" id="inputState" onChange={this.onStateChange} value={this.state.state.value}>
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
                      <label htmlFor="inputZip">Zip Code*</label>
                      <input type="text" className="form-control" id="inputZip" placeholder="Enter Zip Code" onChange={this.onZipChange} value={this.state.zip.value}></input>
                    </div>
                    <div className="form-group has-feedback">
                      <label htmlFor="inputSkillsOfInterest">Skills of Interest*</label>
                      <select multiple className="form-control" id="inputSkillsOfInterest" onChange={this.onSkillTypesChange}>
                        <option>Clerical</option>
                        <option>Industrial</option>
                        <option>Labor</option>
                        <option>Warehouse</option>
                        <option>Professional</option>
                      </select>
                    </div>
                    <div className="form-group has-feedback">
                      <label htmlFor="inputHireTypes">Hire Types of Interest*</label>
                      <select multiple className="form-control" id="inputHireTypes" onChange={this.onHireTypesChange}>
                        <option>Temporary</option>
                        <option>Temp to Perm (480 hours)</option>
                        <option>Perm Palcement / Direct Hire</option>
                        <option>Contract Talent</option>
                        <option>Job Training</option>
                      </select>
                    </div>
                    <div className="form-group has-feedback">
                      <label htmlFor="inputDetails">Details</label>
                      <textarea rows="5" className="form-control" id="inputDetails" placeholder="Details of request."  onChange={this.onDetailsChange} value={this.state.details.value}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputDetails">*Required Fields</label>
                    </div>
                    <button type="submit" className="btn btn-default" onClick={this.onSubmit}>Request Staff</button>
                  </form>
                  </fieldset>
                </div>
              </div>
              <Footer />
          </div>
      )
    }
};