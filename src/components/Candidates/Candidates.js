import React, { Component } from 'react';
import Navbar from "../Main/Navbar.js"
import ContactHeader from "../Main/ContactHeader.js"
import Footer from "../Main/Footer.js"
import CallToAction from "../Main/CallToAction.js"
import '../../assets/css/main.css';
import Toast from 'react-bootstrap/Toast.js';


// Require Axios for HTTP requests
const axios = require('axios');

var serverLocation = process.env.REACT_APP_SERVER_LOCATION;

export default class Candidates extends Component {
    constructor(props) {
      super(props);

      this.onFirstNameChange = this.onFirstNameChange.bind(this);
      this.onLastNameChange = this.onLastNameChange.bind(this);
      this.onEmailChange = this.onEmailChange.bind(this);
      this.onPhoneChange = this.onPhoneChange.bind(this);
      this.onInterestsChange = this.onInterestsChange.bind(this);
      this.onResumeChange = this.onResumeChange.bind(this);
      this.onDetailsChange = this.onDetailsChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.toggleShowSuccess = this.toggleShowSuccess.bind(this);
      this.toggleShowFail = this.toggleShowFail.bind(this);
      this.toggleShowInvalid = this.toggleShowInvalid.bind(this);
      this.onContactMethodChange = this.onContactMethodChange.bind(this);
      this.onIsSubscriptionChange = this.onIsSubscriptionChange.bind(this);

      this.state = {
        firstName: {value: "", isValid: false},
        lastName: {value: "", isValid: false},
        phone: {value: "", isValid: false},
        email: {value: "", isValid: false},
        contactMethod: {value: "Any", isValid: true},
        interests: {value: [], isValid: false},
        resume: {value: [], isValid: false},
        details: {value: "", isValid: false},
        isSubscription: false,
        submitButtonClicked: false,
        showSuccess: false,
        showFail: false,
        showInvalid: false,
        serverThinking: false
      }
    }
    componentDidMount() {
      window.scrollTo(0,0);
    }

    onIsSubscriptionChange(e) {
      this.setState({isSubscription: e.target.checked});
    }

    onFirstNameChange(e) {
      let valid = false;

      if(e.target.value) {
        valid = true;
      }

      this.setState({firstName: {value: e.target.value, isValid: valid}});
    }

    onLastNameChange(e) {
      let valid = false;

      if(e.target.value) {
        valid = true;
      }

      this.setState({lastName: {value: e.target.value, isValid: valid}});
    }

    onEmailChange(e) {
      let valid = false;

      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
        valid = true;
      }

      this.setState({email: {value: e.target.value, isValid: valid}});
    }

    onPhoneChange(e) {
      let valid = false;

      if(/^(1\s|1|)?((\(\d{3}\))|\d{3})(-|\s)?(\d{3})(-|\s)?(\d{4})$/.test(e.target.value)) {
        valid = true;
      }

      this.setState({phone: {value: e.target.value, isValid: valid}});
    }

    onContactMethodChange(e) {
      // Always valid

      this.setState({contactMethod: {value: e.target.value, isValid: true}});
    }

    onInterestsChange(e) {
      let valid = false;

      if(e.target.selectedOptions.length > 0) {
        valid = true;
      }

      this.setState({interests: {value: [...e.target.selectedOptions].map(o => o.value), isValid: valid}});
    }

    onResumeChange(e) {
      let valid = false;
      if(e.target.files[0].size < (25 * 1024 * 1024)) {
        valid = true;
      }
      this.setState({resume: {value: e.target.files[0], isValid: valid}});
    }

    onDetailsChange(e) {
      let valid = false;

      if(e.target.value) {
        valid = true;
      }

      this.setState({details: {value: e.target.value, isValid: valid}});
    }

    onSubmit(e) {
      this.setState({submitButtonClicked: true, serverThinking: true});

      e.preventDefault();

      // Make sure everything is valid.
      if (
        this.state.firstName.isValid &&
        this.state.lastName.isValid &&
        this.state.phone.isValid &&
        this.state.email.isValid &&
        this.state.contactMethod.isValid &&
        this.state.interests.isValid &&
        this.state.resume.isValid &&
        this.state.details.isValid
      ) {
        const data = new FormData();
        data.append('file', this.state.resume.value);
        data.append('name', this.state.resume.value.name);
        data.append('description', this.state.firstName.value + "_" + this.state.lastName.value + "_resume");
        
        axios.post(serverLocation + '/fileUpload', data).then(function(response) {
          console.log(response);
        
          axios.post(serverLocation + '/positionsInquire', {
            firstName: this.state.firstName.value,
            lastName: this.state.lastName.value,
            email: this.state.email.value,
            phone: this.state.phone.value,
            contactMethod: this.state.contactMethod.value,
            interests: this.state.interests.value,
            resume: this.state.resume.value.name,
            details: this.state.details.value,
            isSubscription: this.state.isSubscription
          }).then(function (response) {
              // handle success   
              console.log(response);
  
              // Pop up a success alert
              this.setState({showSuccess: true, serverThinking: false});
            }.bind(this))
            .catch(function (error) {
              // handle error
              console.log(error);
      
              // Pop up an error alert
              this.setState({showFail: true, serverThinking: false});  
            }.bind(this));
        }.bind(this)).catch(function(error) {
          console.log(error);

          // Popup error alert
          this.setState({showFail: true, serverThinking: false});
        }.bind(this));
      } else {
        console.log("Invalid Submit!");
        this.setState({showInvalid: true, serverThinking: false});
      }
    }

    toggleShowSuccess() {
      this.setState({ showSuccess: !this.state.showSuccess });
    }

    toggleShowFail() {
      this.setState({ showFail: !this.state.showFail });
    }

    toggleShowInvalid() {
      this.setState({ showInvalid: !this.state.showInvalid });
    }
    
    render() {
      let valid = "";
      let invalid = "";

      if(this.state.submitButtonClicked) {
        valid = "is-valid";
        invalid = "is-invalid";
      }

      let toastPosition = {position: 'fixed', bottom: '50px', right: '50px'}

      let submitButton = <button type="submit" className="btn btn-default" onClick={this.onSubmit}>Request Position</button>
      if(this.state.serverThinking) {
        submitButton = <button disabled type="submit" className="btn btn-default" onClick={this.onSubmit}>Request Position 
          <div className="loading">
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
          </div>
        </button>
      }
      return (
          <div id="home" className="candidates-wrapper">
              <ContactHeader />
              <Navbar 
                location="Candidates"
                hash={this.props.location.hash}
              />
              <CallToAction 
              link="http://10.0.0.134:3000/candidates/#candidateForm"
              location="Candidates"
              action_name="Subscribe"
              action_description="Subscribe to our open positions mailing list!"
              />
              <div className="container justify-content-center">
                <div className="row">
                  <h1 className="col-sm-12 text-center mt-4">Services we Provide to YOU!</h1>
                  <div className="col-sm-12 separator"></div>
                  <p className="col-sm-12">We at QM3 Solutions provide more than simply a list of open opportunities with our employers to each of our candidates.  We aim to assist you throughout the entire process from beginning to end to assure that you find the best fit possible.  Please fill out the form below if you are interested in any of the following:
                    <br /> <br />
                  </p>
                  <ul>
                    <li>Resume Writing Assistance</li>
                    <li>Mentoring / Coaching</li>
                    <li>Temporary Positions</li>
                    <li>Contract Placements</li>
                    <li>Temp to Perm</li>
                    <li>Permanent Positions</li>
                  </ul>
                </div>
              </div>
              <div className="justify-content-center light-gray-bg">
                <div className="container">
                  <div className="row">
                    <h1 className="col-sm-12 text-center mt-4">Open Positions</h1>
                    <div className="separator"></div>
                    <p className="col-sm-12">All of our currently open positions with all of our partnered employers will be up-to-date on both LinkedIn and Indeed.  Please follow either of the links below to view all of our open positions.
                      <br /> <br />
                      <a href="https://www.linkedin.com/company/integrated-construction-management-inc./jobs/">View our current open positions on Linked In</a>
                      <br />
                      <a href="https://www.indeed.com/cmp/Qm3-Utility-Services,-Inc.">View our current open positions on Indeed</a>
                    </p>
                  </div>
                </div>
              </div>
              <div id="candidateForm" className="container justify-content-center">
                <div className="row">
                  <h1 className="text-center mt-4">Inquire About Future Positions</h1>
                  <div className="separator"></div>
                  <p className="col-sm-12">Please fill out the form below if you'd like to begin the conversation with QM3 Solutions so that we may assist you in finding a new position!  We'd love if you subscribed to our mailing list as well!</p>
                  <br /> <br />
                  <div className="col-md-8 offset-md-2 col-sm-12">
                    <fieldset className="form-group">
                      <legend className="col-from-legend col-md-5 col-lg-3">Position Request Form</legend>
                      <form>
                        <div className="form-group has-feedback">
                          <label htmlFor="firstName">First Name*</label>
                          <input type="text" className={"form-control " + (this.state.firstName.isValid ? valid : invalid)} id="firstName" placeholder="Enter your first name" onChange={this.onFirstNameChange} value={this.state.firstName.value}></input>
                          <div className="invalid-feedback">
                            Enter your first name!
                          </div>
                        </div>
                        <div className="form-group has-feedback">
                          <label htmlFor="lastName">Last Name*</label>
                          <input type="text" className={"form-control " + (this.state.lastName.isValid ? valid : invalid)} id="lastName" placeholder="Enter your last name" onChange={this.onLastNameChange} value={this.state.lastName.value}></input>
                          <div className="invalid-feedback">
                            Enter your last name!
                          </div>
                        </div>
                        <div className="form-group has-feedback">
                          <label htmlFor="inputEmail">Email Address*</label>
                          <input type="text" className={"form-control " + (this.state.email.isValid ? valid : invalid)} id="inputEmail" placeholder="Enter Email: _@_._" onChange={this.onEmailChange} value={this.state.email.value}></input>
                          <div className="invalid-feedback">
                            Enter a valid Email Address!
                          </div>
                        </div>
                        <div className="form-group has-feedback">
                          <label htmlFor="inputPhone">Phone Number*</label>
                          <input type="text" className={"form-control " + (this.state.phone.isValid ? valid : invalid)} id="inputPhone" placeholder="Enter Phone Number: ###-###-####" onChange={this.onPhoneChange} value={this.state.phone.value}></input>
                          <div className="invalid-feedback">
                            Enter a valid United States phone number Ex. (###) ###-#### or ###-###-#### or ##########!
                          </div>
                        </div>
                        <div className="form-group has-feedback">
                          <label htmlFor="inputContactMethod">Preferred Contact Method*</label>
                          <select className={"form-control " + (this.state.contactMethod.isValid ? valid : invalid)} id="inputContactMethod" onChange={this.onContactMethodChange}>
                            <option>Any</option>
                            <option>Phone</option>
                            <option>Email</option>
                          </select>
                          <div className="invalid-feedback">
                            You must select a preferred contact method!
                          </div>
                        </div>
                        <div className="form-group has-feedback">
                          <label htmlFor="inputSkillsOfInterest">Skills of Interest*</label>
                          <select multiple className={"form-control " + (this.state.interests.isValid ? valid : invalid)} id="inputSkillsOfInterest" onChange={this.onInterestsChange}>
                            <option>Clerical</option>
                            <option>Industrial</option>
                            <option>Labor</option>
                            <option>Warehouse</option>
                            <option>Professional</option>
                          </select>
                          <div className="invalid-feedback">
                            You must select at least one Skill of Interest!
                          </div>
                        </div>
                        <div className="form-group has-feedback">
                          <label htmlFor="inputResume">Resume*</label>
                          <input type="file" className={"form-control " + (this.state.resume.isValid ? valid : invalid)} id="inputResume" onChange={this.onResumeChange}></input>
                          <div className="invalid-feedback">
                            You must provide a resume with a file size below 25MB!  (Preferrably in the following formats: .pdf, .doc, or docx)
                          </div>
                        </div>
                        <div className="form-group has-feedback">
                          <label htmlFor="inputDetails">Details*</label>
                          <textarea rows="5" className={"form-control " + (this.state.details.isValid ? valid : invalid)} id="inputDetails" placeholder="Details of request." onChange={this.onDetailsChange} value={this.state.details.value}/>
                          <div className="invalid-feedback">
                            You must provide additional details!
                          </div>
                        </div>
                        <div className="form-group has-feedback">
                          <div className="subscription-checkbox-wrapper">
                            <input className="subscription-checkbox" type="checkbox" name="subscription" id="subscriptionCheckbox" checked={this.state.isSubscription} onChange={this.onIsSubscriptionChange}></input>
                          </div>
                          <label className="checkbox-label" htmlFor="subscriptionCheckbox">I would like to subscribe to the QM3 Solutions mailing list in order to receive customized open position notifications.</label>
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputDetails">*Required Fields</label>
                        </div>
                        {submitButton}
                      </form>
                    </fieldset>
                  </div>
                </div>
              </div>
              <Footer 
                location="Candiates"
              />
              <div className="ToastHolder" style={toastPosition}>
                <Toast show={this.state.showSuccess} onClose={this.toggleShowSuccess}>
                  <Toast.Header>
                    <strong className="mr-auto">Position Request Success!</strong>
                  </Toast.Header>
                  <Toast.Body>
                    Thank you for submitting your request!  You should receive a response from a QM3 representative within ~24 hours.  If you chose to subscribe to our mailing list, please confirm your subscription by following the directions in the email sent to the email address you provided.
                  </Toast.Body>
                </Toast>
                <Toast show={this.state.showFail} onClose={this.toggleShowFail}>
                  <Toast.Header>
                    <strong className="mr-auto">Position Request Failed!</strong>
                  </Toast.Header>
                  <Toast.Body>
                    Unfortunately, there was a server-side error causing your request to fail.  Please try again later.  If this issue persists, please contact QM3 Solutions support at info@qm3solutions.com.
                  </Toast.Body>
                </Toast>
                <Toast show={this.state.showInvalid} onClose={this.toggleShowInvalid}>
                  <Toast.Header>
                    <strong className="mr-auto">Invalid Position Request!</strong>
                  </Toast.Header>
                  <Toast.Body>
                    Please resolve the errors and try again!
                  </Toast.Body>
                </Toast>
              </div>
          </div>
      )
    }
};
