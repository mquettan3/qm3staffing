import React, { Component } from 'react';
import '../../assets/css/main.css';

export default class TabbedInformation extends Component {
    constructor(props){
        super(props);

    }
    componentDidMount() {
    }

    render() {
      return (
          <div className="tabbed-info-wrapper row section light-gray-bg justify-content-center">
                <div className="container">
                    <div className="col-md-10 offset-md-1">
                        <ul className="nav nav-tabs style-1" role="tablist">
                            <li className="nav-item">
                            <a className="nav-link active" href="#htab1" role="tab" data-toggle="tab" aria-selected="true">Temporary</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#htab2" role="tab" data-toggle="tab" aria-selected="false">Temp to Hire</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#htab3" role="tab" data-toggle="tab" aria-selected="false">Direct Hire</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#htab4" role="tab" data-toggle="tab" aria-selected="false">Contract Talent</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#htab5" role="tab" data-toggle="tab" aria-selected="false">High Volume Placement</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#htab6" role="tab" data-toggle="tab" aria-selected="false">Job Training</a>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div className="tab-pane fade active show" id="htab1" role="tabpanel">
                            <h3 className="mt-4">Temporary</h3>
                            <div className="row">
                                <div className="col-md-9">
                                <p>For seasonal work, family medical leaves, and those special short-term or long-term opportunities you may have, temporary placements are the best platform. We have a large talent pool of individuals ready to join your team at the right time. Our reputation is built on our services and the integrity we use to unite an opportunity with the Right talent.</p>
                                </div>
                                <div className="col-md-3">
                                    <ul className="list-icons">
                                        <li><i className="fa fa-check pr-2"></i> 6 Weeks</li>
                                        <li><i className="fa fa-check pr-2"></i> 3 Months</li>
                                        <li><i className="fa fa-check pr-2"></i> 6 Months</li>
                                        <li><i className="fa fa-check pr-2"></i> 9 Months</li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                            <div className="tab-pane fade" id="htab2" role="tabpanel">
                            <h3 className="mt-4">Temp to Hire</h3>
                            <div className="row">
                                <div className="col-md-9">
                                <p>It makes sense to drive a car before you buy it, and it makes sense to try out a new talent  before making an opportunity permanent. A Temp-to-Hire platform lets you do just that. Our ability to attract, assess, qualify and retain quality talent makes us your perfect recruiting partner.</p>
                                </div>
                                <div className="col-md-3">
                                <ul className="list-icons">
                                    <li><i className="fa fa-check pr-2"></i> 6 Weeks</li>
                                    <li><i className="fa fa-check pr-2"></i> 3 Months</li>
                                    <li><i className="fa fa-check pr-2"></i> 6 Months</li>
                                    <li><i className="fa fa-check pr-2"></i> 9 Months</li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="tab-pane fade" id="htab3" role="tabpanel">
                            <h3 className="mt-4">Direct Hire</h3>
                            <div className="row">
                                <div className="col-md-12">
                                <p>Our Direct Hire platform is similar to our Temp-to-Hire platform, except that the talent is placed immediately on your payroll. Our proactive approach of coaching and mentoring, along with a knack for looking outside the box to find hidden talents, lets us find the best match for our partners. You can use our Direct Hire platform on a fee-for-placement or as a retained search.</p>
                                </div>
                            </div>
                            </div>
                            <div className="tab-pane fade" id="htab4" role="tabpanel">
                            <h3 className="mt-4">Contract Talent</h3>
                            <div className="row">
                                <div className="col-md-12">
                                <p>If your company uses interns, freelancers, contractors or consultants, we have the right solution for that too. We can reduce your costs and liabilities by placing the talent on our payroll; this gives the talent holder the extra incentive of access to our full line of employee benefits. Health, dental, vision, life, short term and long term, and 401k.</p>
                                </div>
                            </div>
                            </div>
                            <div className="tab-pane fade" id="htab5" role="tabpanel">
                            <h3 className="mt-4">High Volume Placement</h3>
                            <div className="row">
                                <div className="col-md-12">
                                <p>When it comes to high-volume placement,  there's no such thing as one-size-fits-all. Instead of talking about it, we build a talent infrastructure that's designed to meet your most ambitious opportunities and goals. Having a dedicated talent partner to manage your high-volume workforce frees your team to focus on moving your business operations forward.</p>
                                </div>
                            </div>
                            </div>
                            <div className="tab-pane fade" id="htab6" role="tabpanel">
                            <h3 className="mt-4">Job Training</h3>
                            <div className="row">
                                <div className="col-md-12">
                                <p>Do you simply want to outsource the training of your current staff?  Or perhaps want only previously trained candidates?  We can assist with ensuring that your incoming or newly acquired staff are properly trained in accordance with industry standards.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
      )
    }
};