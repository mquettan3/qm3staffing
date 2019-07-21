import React, { Component } from 'react';
import '../../assets/css/main.css';
import { Link } from "react-router-dom";

export default class CallToAction extends Component {
    render() {
        let actionLink = <Link to={this.props.link} className="btn btn-lg btn-default btn-animated">{this.props.action_name}<i className="fa fa-arrow-right pl-20"></i></Link>;
        if (this.props.location === "Candidates") {
            actionLink = <a href={this.props.link} className="btn btn-lg btn-default btn-animated">{this.props.action_name}<i className="fa fa-arrow-right pl-20"></i></a>;
        }
        return (
            <section className="section dark-bg clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="call-to-action">
                            <div className="row">
                                <div className="col-md-8">
                                <h3 className="mt-10">{this.props.action_description}</h3>
                                </div>
                                <div className="col-md-4 text-right">
                                    {actionLink}
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};