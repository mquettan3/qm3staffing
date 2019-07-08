import React, { Component } from 'react';
import '../../assets/css/main.css';

export default class CallToAction extends Component {
    render() {
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
                            <a href="#" className="btn btn-lg btn-default btn-animated">{this.props.action_name}<i className="fa fa-arrow-right pl-20"></i></a>
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