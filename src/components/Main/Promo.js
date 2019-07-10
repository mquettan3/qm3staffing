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
            <div className="promo-caption container">
                <div className="promo-caption-title">Warehouse Staffing</div>
                <div className="promo-caption-spacer hidden-md-down">
                    <div className="separator light with-icon"><i className="fa fa-handshake-o bordered"></i></div>
                </div>
                <div className="promo-caption-subsection">
                    <div className="promo-caption-subtext">Providing quality candidates with quality positions</div>
                    <Link to="candidates" className="btn radius-50 btn-dark btn-animated" style={{marginRight: "30px"}}>For Job Seekers <i className="fa fa-arrow-right"></i></Link>
                    <Link to="employers" className="btn radius-50 btn-dark btn-animated" style={{marginBottom: "10px"}}>For Employers <i className="fa fa-arrow-right"></i></Link>
                </div>
            </div>
        </section>
    )
  }
};