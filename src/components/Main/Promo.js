import React, { Component } from 'react';
import '../../assets/css/main.css';
import WarehouseImage from "../../assets/images/WarehouseBackground.jpg";
import { Link } from "react-router-dom";

export default class Promo extends Component {
  render() {
      let backgroundStyle = {
          backgroundImage: "url(" + WarehouseImage + ")"
      }

    return (
        <section className="promo-banner">
            <div className="promo-background-image" style={backgroundStyle}></div>
            <div className="promo-overlay"></div>
            <div className="promo-caption">
                <div className="container">
                    <div className="row">
                        <h1 className="promo-caption-title col-12">Uniting Talent with Opportunity,<br />the RIGHT way.</h1>
                        <div className="separator light"></div> 
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <p className="promo-caption-subtitle pr-20">Right Job.</p>
                            <p className="promo-caption-subtitle pr-20">Right Candidate.</p>
                            <p className="promo-caption-subtitle">Right Now.</p>
                        </div>
                    </div>
                    {/* <div className="promo-separator"></div>
                    <div className="promo-separator"></div> */}
                    {/* <div className="row hidden-md-down">
                        <div className="promo-caption-spacer col-12">
                            <div className="separator light with-icon"><i className="fa fa-handshake-o bordered"></i></div>
                        </div>
                    </div> */}
                    <div className="promo-caption-subsection row">
                        <div className="col-md-5 offset-md-1 col-sm-12">
                            <Link to="candidates" className="btn radius-50 btn-primary btn-animated btn-lg">For Job Seekers <i className="fa fa-arrow-right"></i></Link>
                        </div>
                        <div className="col-md-5  col-sm-12">
                            <Link to="employers" className="btn radius-50 btn-primary btn-animated btn-lg">For Employers <i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
};