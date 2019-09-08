import React, { Component } from 'react';
import '../../assets/css/main.css';

export default class TeamMember extends Component {
    render() {
      return (
        <div className="team-member-wrapper row container">
          <div className="bio-image col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div className="overlay-container overlay-visible">
              <img src={this.props.portrait} alt="" />
              {/* <a href="images/team-member-1.jpg" className="popup-img overlay-link" title="Team Member - CEO"><i className="fa fa-plus"></i></a> */}
              <div className="overlay-bottom hidden-sm-down" style={{opacity: 1}}>
                <div className="text">
                  <p className="small margin-clear"><em>{this.props.fullName} <br /> {this.props.title}</em></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-8 col-xl-9">
            <div className="body">
              <h3 className="title margin-clear">{this.props.fullName} - <small>{this.props.title}</small></h3>
              <div className="separator-2 mt-10"></div>
              <p>{this.props.bio}</p>
              <ul className="social-links circle margin-clear colored">
                {this.props.facebook && 
                    <li className="facebook"><a href={this.props.facebook} aria-label="Add me on Facebook!"><i className="fa fa-facebook"></i></a></li>
                }
                {this.props.twitter && 
                    <li className="twitter"><a href={this.props.twitter} aria-label="Follow me on Twitter!"><i className="fa fa-twitter"></i></a></li>
                }    
                {this.props.linkedin &&             
                    <li className="linkedin"><a href={this.props.linkedin} aria-label="Connect with me on LinkedIn!"><i className="fa fa-linkedin"></i></a></li>
                }
              </ul>
              <br />
                {this.props.email &&    
                    <a href={this.props.email} className="btn btn-gray-transparent"><i className="pr-10 margin-clear fa fa-envelope-o"></i>Contact</a>
                }
            </div>
          </div>
        </div>
      )
    }
};