import React, { Component } from 'react';

export default class OurProcess extends Component {  
    render() {
      return (
            <section id="process" className="section clearfix">
                <div className="container">
                  <div className="row justify-content-lg-center">
                    <div className="col-lg-12">
                      <h1 className="text-center mt-4">Our Process</h1>
                      <div className="separator"></div>
                      <p>What allows QM3 Solutions to attract talent and opportunities, that in-turn allows us to unite the right talent with the Right opportunity, is our 5 step process. This process attracts successful candidates as well as wonderful businesses with lucrative opportunities and becomes a true win win for all...</p>
                      <div id="accordion" className="collapse-style-2" role="tablist" aria-multiselectable="true">
                        <div id="cardOne" className="card">
                          <div className="card-header" role="tab" id="headingOne">
                            <h4 className="mb-0">
                              <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="">
                                <b className="pr-10">1.</b>Thorough Job Comprehension
                              </a>
                            </h4>
                          </div>
                          <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
                            <div className="card-block light-gray-bg">
                              The talent success of our candidates is the motivation behind our passion. Actually, it is the motivation behind everything we do. After all, when they succeed, so do our partners. 
                              <br/> <br/>
                              To help us choose the right talent for each opportunity we use mentoring and coaching, along with assessment testing. This process goes far beyond the traditional resume review and interview. We communicate to determine what the individual wants, desires, and needs. Allowing us to properly identify and bridge the gap between their true ability and the perfect opportunity which would allow them to excel with their abilities.
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" role="tab" id="headingTwo">
                            <h4 className="mb-0">
                              <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              <b className="pr-10">2.</b>Creative Recruitment Marketing
                              </a>
                            </h4>
                          </div>
                          <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
                            <div className="card-block light-gray-bg">
                              We develop marketing strategies based on our comprehensive knowledge and put BIG ideas into even the smallest marketing campaigns.  We attract the right individual through extensive coaching and mentoring even unforeseen potential talent.
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" role="tab" id="headingThree">
                            <h4 className="mb-0">
                              <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <b className="pr-10">3.</b>Penetrating and Exploratory Interviews
                              </a>
                            </h4>
                          </div>
                          <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
                            <div className="card-block light-gray-bg">
                              We look beyond the surface and the fundamental job skills to find a person's true talents. Behavioral exploration helps us understand personalities, not just abilities. We seek to bring out the core values of an individual and guide them into success.
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" role="tab" id="headingFour">
                            <h4 className="mb-0">
                              <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <b className="pr-10">4.</b>Testing for Success
                              </a>
                            </h4>
                          </div>
                          <div id="collapseFour" className="collapse" role="tabpanel" aria-labelledby="headingFour">
                            <div className="card-block light-gray-bg">
                              We perform behavioral, psychographic, fundamental skill, drug, and background testing on each individual we connect with. Our proprietary process allows the Right talent to rise to the top and succeed.
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" role="tab" id="headingFive">
                            <h4 className="mb-0">
                              <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <b className="pr-10">5.</b>A highly Scalable Strategy
                              </a>
                            </h4>
                          </div>
                          <div id="collapseFive" className="collapse" role="tabpanel" aria-labelledby="headingFive">
                            <div className="card-block light-gray-bg">
                              Whether one of our partners has 1 or 100 opportunities, our proprietary talent search strategies deliver the right people primed to succeed. Our 100% guarantee ensures that you have the right candidate for all the right reasons on the job from day one. We make the process easy.
                            </div>
                          </div>
                        </div>
                      </div>
                      <br/>
                      <p>QM3 Solutions strives to always have the Right Solution... When selecting Talent to unite with our partner's opportunities and needs, personal characteristics such as ethnicity, gender and sexual orientation are irrelevant. It is the core values of an individual that define a great talent. Values like; ambition, work ethic, and integrity.</p>
                      <p>We work from coast to coast, delivering that hometown sensibility. We work together, wherever you are, to make your talent search easy.</p>
                    </div>
                  </div>
                </div>
              </section>
      )
    }
};