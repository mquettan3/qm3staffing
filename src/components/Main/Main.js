import React, { Component } from 'react';

import QM3Logo from "../../assets/images/Logos/BizCard_Web_Logo.png";
import WarehouseImage from "../../assets/images/WarehouseBackground.jpg";
import ConstructionImage from "../../assets/images/under_construction.jpeg";
import '../../assets/css/main.css'

class Main extends Component {
  constructor(props) {
    super(props);

    var date = new Date();
    this.state = {currentYear: date.getFullYear()};
  }

  render() {
    return (
          <div id="home" className="front-page ">
        
            <div className="scrollToTop circle"><i className="fa fa-angle-up"></i></div>
        
            <div className="page-wrapper">
              <div className="header-container">
                <div className="header-top dark">
                  <div className="container">
                    <div className="row">
                      <div className="col-2 col-md-5">
                        <div className="header-top-first clearfix">
                          <ul className="social-links circle small clearfix hidden-sm-down">
                            <li className="twitter"><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li className="skype"><a href="#"><i className="fa fa-skype"></i></a></li>
                            <li className="linkedin"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            <li className="googleplus"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                            <li className="youtube"><a href="#"><i className="fa fa-youtube-play"></i></a></li>
                            <li className="flickr"><a href="#"><i className="fa fa-flickr"></i></a></li>
                            <li className="facebook"><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li className="pinterest"><a href="#"><i className="fa fa-pinterest"></i></a></li>
                          </ul>
                          <div className="social-links hidden-md-up circle small">
                            <div className="btn-group dropdown">
                              <button id="header-top-drop-1" type="button" className="btn dropdown-toggle dropdown-toggle--no-caret" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-share-alt"></i></button>
                              <ul className="dropdown-menu dropdown-animation" aria-labelledby="header-top-drop-1">
                                <li className="twitter"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li className="skype"><a href="#"><i className="fa fa-skype"></i></a></li>
                                <li className="linkedin"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                <li className="googleplus"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                <li className="youtube"><a href="#"><i className="fa fa-youtube-play"></i></a></li>
                                <li className="flickr"><a href="#"><i className="fa fa-flickr"></i></a></li>
                                <li className="facebook"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li className="pinterest"><a href="#"><i className="fa fa-pinterest"></i></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-10 col-md-7">
        
                        <div id="header-top-second"  className="clearfix text-right">
                          <ul className="list-inline">
                            <li className="list-inline-item"><i className="fa fa-phone pr-1 pl-10"></i> (844) 382-1819</li>
                            <li className="list-inline-item"><i className="fa fa-envelope-o pr-1 pl-10"></i> info@qm3us.net</li>
                          </ul>
                        </div>
        
                      </div>
                    </div>
                  </div>
                </div>

                <header className="header fixed fixed-desktop clearfix">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-auto hidden-md-down pl-3">
                        <div className="header-first clearfix">
        
                          <div id="logo" className="logo">
                            <a href="#home"><img id="logo_img" src={QM3Logo} alt="The Project" /></a>
                          </div>
        
                          {/* <div className="site-slogan">
                            Multipurpose HTML5 Template
                          </div> */}
        
                        </div>
        
                      </div>
                      <div className="col-lg-8 ml-lg-auto">
                  
                        <div className="header-second clearfix">
                          
                        <div className="main-navigation main-navigation--mega-menu  animated">
                          <nav className="navbar navbar-expand-lg navbar-light p-0">
                            <div className="navbar-brand clearfix hidden-lg-up">
        
                              <div id="logo-mobile" className="logo">
                                <a href="#home"><img id="logo-img-mobile" src={QM3Logo} alt="The Project" /></a>
                              </div>
        
                              {/* <div className="site-slogan">
                                Multipurpose HTML5 Template
                              </div> */}
        
                            </div>
                            
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse-1" aria-controls="navbar-collapse-1" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                            </button>
        
                            <div className="collapse navbar-collapse" id="navbar-collapse-1">
                              <ul className="navbar-nav ml-xl-auto">
        
                                <li className="nav-item dropdown active mega-menu mega-menu--wide">
                                  <a href="#home" className="nav-link" id="first-dropdown">Home</a>
                                </li>
                                <li className="nav-item dropdown  mega-menu mega-menu--wide">
                                  <a href="#about" className="nav-link" id="second-dropdown">About</a>
                                </li>
                                <li className="nav-item dropdown  mega-menu mega-menu--wide">
                                  <a href="#partners" className="nav-link" id="third-dropdown">Our Partners</a>
                                </li>
                                <li className="nav-item dropdown ">
                                  <a href="#" className="nav-link dropdown-toggle" id="fourth-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                                  <ul className="dropdown-menu" aria-labelledby="fourth-dropdown">
                                    <li ><a href="#">Consulting</a></li>
                                    <li ><a href="#">Temp 1</a></li>
                                    <li ><a href="#">Temp 2</a></li>
                                    <li ><a href="#">Temp 3</a></li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </nav>
                        </div>
                        </div>
        
                      </div>
                      <div className="col-auto hidden-md-down pl-0 pl-md-1">
                        <div className="header-dropdown-buttons">
                          <a href="mailto:info@qm3us.net" className="btn btn-sm btn-default">Contact Us <i className="fa fa-envelope-o pl-1"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
              <div className="banner clearfix">
        
                <div className="slideshow">

                  <div className="slider-revolution-5-container">
                    <div id="slider-banner-fullwidth" className="slider-banner-fullwidth rev_slider" data-version="5.0">
                      <ul className="slides">
                        <li className="text-center" data-transition="crossfade" data-slotamount="default" data-masterspeed="default" data-title="Warehouse Staffing">
        
                        <img src={WarehouseImage} alt="slidebg1" data-bgposition="center bottom"  data-bgrepeat="no-repeat" data-bgfit="cover"  className="rev-slidebg" />
        
                        <div className="tp-caption dark-translucent-bg"
                          data-x="center"
                          data-y="center"
                          data-start="0"
                          data-transform_idle="o:1;"
                          data-transform_in="o:0;s:600;e:Power2.easeInOut;"
                          data-transform_out="o:0;s:600;"
                          data-width="5000"
                          data-height="5000">
                        </div>
        
                        <div className="tp-caption large_white"
                          data-x="center"
                          data-y="[50,90,90,90]"
                          data-start="1000"
                          data-width="750"
                          data-transform_idle="o:1;"
                          data-transform_in="y:[100%];sX:1;sY:1;o:0;s:1050;e:Power4.easeInOut;"
                          data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;"
                          data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                          data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">
                            Warehouse Staffing
                        </div>
        
                        <div className="tp-caption large_white hidden-md-down"
                          data-x="center"
                          data-y="90"
                          data-start="1300"
                          data-width="800"
                          data-transform_idle="o:1;"
                          data-transform_in="o:0;s:2000;e:Power4.easeInOut;">
                            <div className="separator light with-icon"><i className="fa fa-handshake-o bordered"></i></div>
                        </div>
        
                        <div className="tp-caption medium_white"
                          data-x="center"
                          data-y="190"
                          data-start="1300"
                          data-width="650"
                          data-whitespace="normal"
                          data-transform_idle="o:1;"
                          data-transform_in="y:[100%];sX:1;sY:1;s:700;e:Power4.easeInOut;"
                          data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;"
                          data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                          data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">Providing quality candidates with quality positions
                        </div>
        
                        </li>

                        <li data-transition="crossfade" data-slotamount="default" data-masterspeed="default" data-title="Website Under Construction">
        
                        <img src={ConstructionImage} alt="slidebg2" data-bgposition="center bottom"  data-bgrepeat="no-repeat" data-bgfit="cover" className="rev-slidebg" />
        
                        <div className="tp-caption dark-translucent-bg"
                          data-x="center"
                          data-y="center"
                          data-start="0"
                          data-transform_idle="o:1;"
                          data-transform_in="o:0;s:600;e:Power2.easeInOut;"
                          data-transform_out="o:0;s:600;"
                          data-width="5000"
                          data-height="5000">
                        </div>
                        <div className="tp-caption large_white"
                          data-x="left"
                          data-y="[90,110,110,110]"
                          data-start="1000"
                          data-width="650"
                          data-transform_idle="o:1;"
                          data-transform_in="y:[100%];sX:1;sY:1;o:0;s:1050;e:Power4.easeInOut;"
                          data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;"
                          data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                          data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">
                            Welcome to Our Website
                        </div>
                        <div className="tp-caption large_white hidden-md-down"
                          data-x="left"
                          data-y="155"
                          data-start="1300"
                          data-width="500"
                          data-transform_idle="o:1;"
                          data-transform_in="o:0;s:2000;e:Power4.easeInOut;">
                            <div className="separator-2 light"></div>
                        </div>
                        <div className="tp-caption medium_white"
                          data-x="left"
                          data-y="170"
                          data-start="1300"
                          data-width="650"
                          data-whitespace="normal"
                          data-transform_idle="o:1;"
                          data-transform_in="y:[100%];sX:1;sY:1;s:700;e:Power4.easeInOut;"
                          data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;"
                          data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                          data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">We are currently under-construction for accepting candidate applications.  Please check back in August to apply!
                        </div>
        
                        </li>
                      </ul>
                      <div className="tp-bannertimer"></div>
                    </div>
                  </div>
        
                </div>
        
              </div>
        
              <div id="page-start"></div>
              <section className="section dark-bg clearfix">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="call-to-action">
                        <div className="row">
                          <div className="col-md-8">
                            <h3 className="mt-10">Subscribe to our newsletter to be informed when positions open!</h3>
                          </div>
                          <div className="col-md-4 text-right">
                            <a href="#" className="btn btn-lg btn-default btn-animated">Subscribe<i className="fa fa-arrow-right pl-20"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* <section className="section light-gray-bg clearfix">
                <div className="container">
                  <div className="row justify-content-lg-center">
                    <div className="col-lg-8">
                      <h1 className="text-center mt-4">Sectors and Services</h1>
                      <div className="separator"></div>
                      <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quibusdam enim, voluptates autem officia eius accusantium repellat debitis, omnis reiciendis. Assumenda, recusandae cupiditate odit, similique quia voluptates vitae veniam aperiam.</p>
                      <br />
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="image-box text-center style-2 mb-20">
                        <div className="overlay-container overlay-visible">
                          <img src="images/corporate-5-service-1.jpg" alt="" />
                          <a href="#" className="overlay-link"><i className="fa fa-link"></i></a>
                          <div className="overlay-bottom hidden-sm-down">
                            <div className="text">
                              <p className="lead margin-clear">Service One</p>
                            </div>
                          </div>
                        </div>
                        <div className="body padding-horizontal-clear">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          <a className="link-dark" href="#">Read More<i className="pl-1 fa fa-angle-double-right"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="image-box text-center style-2 mb-20">
                        <div className="overlay-container overlay-visible">
                          <img src="images/corporate-5-service-2.jpg" alt=""/>
                          <a href="#" className="overlay-link"><i className="fa fa-link"></i></a>
                          <div className="overlay-bottom hidden-sm-down">
                            <div className="text">
                              <p className="lead margin-clear">Service Two</p>
                            </div>
                          </div>
                        </div>
                        <div className="body padding-horizontal-clear">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          <a className="link-dark" href="#">Read More<i className="pl-1 fa fa-angle-double-right"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="image-box text-center style-2 mb-20">
                        <div className="overlay-container overlay-visible">
                          <img src="images/corporate-5-service-3.jpg" alt=""/>
                          <a href="#" className="overlay-link"><i className="fa fa-link"></i></a>
                          <div className="overlay-bottom hidden-sm-down">
                            <div className="text">
                              <p className="lead margin-clear">Service Three</p>
                            </div>
                          </div>
                        </div>
                        <div className="body padding-horizontal-clear">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          <a className="link-dark" href="#">Read More<i className="pl-1 fa fa-angle-double-right"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="image-box text-center style-2 mb-20">
                        <div className="overlay-container overlay-visible">
                          <img src="images/corporate-5-service-4.jpg" alt=""/>
                          <a href="#" className="overlay-link"><i className="fa fa-link"></i></a>
                          <div className="overlay-bottom hidden-sm-down">
                            <div className="text">
                              <p className="lead margin-clear">Service Four</p>
                            </div>
                          </div>
                        </div>
                        <div className="body padding-horizontal-clear">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          <a className="link-dark" href="#">Read More<i className="pl-1 fa fa-angle-double-right"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="image-box text-center style-2 mb-20">
                        <div className="overlay-container overlay-visible">
                          <img src="images/corporate-5-service-5.jpg" alt=""/>
                          <a href="#" className="overlay-link"><i className="fa fa-link"></i></a>
                          <div className="overlay-bottom hidden-sm-down">
                            <div className="text">
                              <p className="lead margin-clear">Service Five</p>
                            </div>
                          </div>
                        </div>
                        <div className="body padding-horizontal-clear">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          <a className="link-dark" href="#">Read More<i className="pl-1 fa fa-angle-double-right"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="image-box text-center style-2 mb-20">
                        <div className="overlay-container overlay-visible">
                          <img src="images/corporate-5-service-6.jpg" alt=""/>
                          <a href="#" className="overlay-link"><i className="fa fa-link"></i></a>
                          <div className="overlay-bottom hidden-sm-down">
                            <div className="text">
                              <p className="lead margin-clear">Service Six</p>
                            </div>
                          </div>
                        </div>
                        <div className="body padding-horizontal-clear">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          <a className="link-dark" href="#">Read More<i className="pl-1 fa fa-angle-double-right"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section> */}
              <section id="about" className="main-container">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 order-lg-2">
                      {/* <div className="overlay-container overlay-visible"> */}
                        <img src="images/corporate-5-section-image-1.jpg" alt=""/>
                        {/* <a href="#" className="overlay-link"><i className="fa fa-link"></i></a> */}
                        <div className="overlay-bottom hidden-sm-down">
                          <div className="text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nobis sunt, quae alias impedit ea molestias recusandae.
                          </div>
                        </div>
                      {/* </div> */}
                    </div>
                    <div className="col-lg-6 order-lg-1">
                      <h2 className="title">About Us</h2>
                      <div className="separator-2"></div>
                      <p>Lorem ipsum dolor sit amet, lotrem <span className="text-default">some colored text</span>. Nulla explicabo <strong>attention to this</strong> blanditiis, ex cupiditate ipsam debitis rem.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing llum magni nam doloribus eligendi, veritatis aspernatur amet odit doloremque possimus error. Vel, totam numquam animi!</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <strong>Some bold text</strong>, unde voluptatum quidem explicabo et eius aut nisi dolore ut. Sapiente velit quidem, unde fugit. Neque illum, debitis ut, porro natus.</p>
                      {/* <a href="page-about.html" className="btn radius-50 btn-default"><i className="fa fa-users pr-10"></i>Learn More</a> */}
                    </div>
                  </div>
                </div>
                <br />
              </section>
              <section id="partners" className="dark-translucent-bg fixed-bg pv-30" style={{backgroundImage: "url(images/corporate-5-section-image-2.jpg)"}}>
                <div className="container">
                  <div className="row justify-content-lg-center">
                    <div className="col-lg-8">
                      <h2 className="text-center mt-4">Our <strong>Partners</strong></h2>
                      <div className="separator with-icon"><i className="fa fa-suitcase bordered"></i></div>
                      <p className="large text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptas facere vero ex tempora saepe perspiciatis ducimus sequi animi.</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="clients-container">
                      <div className="clients">
                        <div className="client-image hc-element-invisible" data-animation-effect="fadeIn" data-effect-delay="100">
                          <a href="#"><img src="images/client-1.png" alt=""/></a>
                        </div>
                        <div className="client-image hc-element-invisible" data-animation-effect="fadeIn" data-effect-delay="200">
                          <a href="#"><img src="images/client-2.png" alt=""/></a>
                        </div>
                        <div className="client-image hc-element-invisible" data-animation-effect="fadeIn" data-effect-delay="300">
                          <a href="#"><img src="images/client-3.png" alt=""/></a>
                        </div>
                        <div className="client-image hc-element-invisible" data-animation-effect="fadeIn" data-effect-delay="400">
                          <a href="#"><img src="images/client-4.png" alt=""/></a>
                        </div>
                        <div className="client-image hc-element-invisible" data-animation-effect="fadeIn" data-effect-delay="500">
                          <a href="#"><img src="images/client-5.png" alt=""/></a>
                        </div>
                        <div className="client-image hc-element-invisible" data-animation-effect="fadeIn" data-effect-delay="600">
                          <a href="#"><img src="images/client-6.png" alt=""/></a>
                        </div>
                        <div className="client-image hc-element-invisible" data-animation-effect="fadeIn" data-effect-delay="700">
                          <a href="#"><img src="images/client-7.png" alt=""/></a>
                        </div>
                        <div className="client-image hc-element-invisible" data-animation-effect="fadeIn" data-effect-delay="800">
                          <a href="#"><img src="images/client-8.png" alt=""/></a>
                        </div>
                        <div className="client-image hc-element-invisible" data-animation-effect="fadeIn" data-effect-delay="100">
                          <a href="#"><img src="images/client-1.png" alt=""/></a>
                        </div>
                        <div className="client-image hc-element-invisible" data-animation-effect="fadeIn" data-effect-delay="200">
                          <a href="#"><img src="images/client-2.png" alt=""/></a>
                        </div>
                        <div className="client-image hc-element-invisible" data-animation-effect="fadeIn" data-effect-delay="300">
                          <a href="#"><img src="images/client-3.png" alt=""/></a>
                        </div>
                        <div className="client-image hc-element-invisible" data-animation-effect="fadeIn" data-effect-delay="400">
                          <a href="#"><img src="images/client-4.png" alt=""/></a>
                        </div>
                        <div className="client-image hc-element-invisible" data-animation-effect="fadeIn" data-effect-delay="500">
                          <a href="#"><img src="images/client-5.png" alt=""/></a>
                        </div>
                        <div className="client-image hc-element-invisible" data-animation-effect="fadeIn" data-effect-delay="600">
                          <a href="#"><img src="images/client-6.png" alt=""/></a>
                        </div>
                        <div className="client-image hc-element-invisible" data-animation-effect="fadeIn" data-effect-delay="700">
                          <a href="#"><img src="images/client-7.png" alt=""/></a>
                        </div>
                        <div className="client-image hc-element-invisible" data-animation-effect="fadeIn" data-effect-delay="800">
                          <a href="#"><img src="images/client-8.png" alt=""/></a>
                        </div>
                        <div className="client-image hc-element-invisible" data-animation-effect="fadeIn" data-effect-delay="100">
                          <a href="#"><img src="images/client-1.png" alt=""/></a>
                        </div>
                        <div className="client-image hc-element-invisible" data-animation-effect="fadeIn" data-effect-delay="200">
                          <a href="#"><img src="images/client-2.png" alt=""/></a>
                        </div>
                        <div className="client-image hc-element-invisible" data-animation-effect="fadeIn" data-effect-delay="300">
                          <a href="#"><img src="images/client-3.png" alt=""/></a>
                        </div>
                        <div className="client-image hc-element-invisible" data-animation-effect="fadeIn" data-effect-delay="400">
                          <a href="#"><img src="images/client-4.png" alt=""/></a>
                        </div>
                        <div className="client-image hc-element-invisible" data-animation-effect="fadeIn" data-effect-delay="500">
                          <a href="#"><img src="images/client-5.png" alt=""/></a>
                        </div>
                        <div className="client-image hc-element-invisible" data-animation-effect="fadeIn" data-effect-delay="600">
                          <a href="#"><img src="images/client-6.png" alt=""/></a>
                        </div>
                        <div className="client-image hc-element-invisible" data-animation-effect="fadeIn" data-effect-delay="700">
                          <a href="#"><img src="images/client-7.png" alt=""/></a>
                        </div>
                        <div className="client-image hc-element-invisible" data-animation-effect="fadeIn" data-effect-delay="800">
                          <a href="#"><img src="images/client-8.png" alt=""/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* <div className="footer-top light-gray-bg">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="call-to-action text-center">
                        <div className="row">
                          <div className="col-md-8">
                            <h2 className="mt-4">Powerful Bootstrap Template</h2>
                          </div>
                          <div className="col-md-4">
                            <p className="mt-10"><a href="#" className="btn btn-animated btn-lg btn-dark">Purchase<i className="fa fa-cart-arrow-down pl-20"></i></a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <footer id="footer" className="clearfix ">
                <div className="footer">
                  <div className="container">
                    <div className="footer-inner">
                      <div className="row">
                        <div className="offset-lg-1 col-lg-4">
                          <div className="footer-content">
                            <div className="logo-footer"><img id="logo-footer" src={QM3Logo} alt=""/></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus illo vel dolorum soluta consectetur doloribus sit. Delectus non tenetur odit dicta vitae debitis suscipit doloribus. Ipsa, aut voluptas quaerat... <a href="#about">Learn More<i className="fa fa-long-arrow-right pl-1"></i></a></p>
                            <div className="separator-2"></div>
                            <nav>
                              <ul className="nav flex-column">
                                <li className="nav-item"><a className="nav-link" href="#">Support</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Terms</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                        {/*<div className="col-lg-3">
                           <div className="footer-content">
                            <h2 className="title">Latest From Blog</h2>
                            <div className="separator-2"></div>
                            <div className="media margin-clear">
                              <div className="d-flex pr-2">
                                <div className="overlay-container">
                                  <img className="media-object" src="images/blog-thumb-1.jpg" alt="blog-thumb"/>
                                  <a href="blog-post.html" className="overlay-link small"><i className="fa fa-link"></i></a>
                                </div>
                              </div>
                              <div className="media-body">
                                <h6 className="media-heading"><a href="blog-post.html">Lorem ipsum dolor sit amet...</a></h6>
                                <p className="small margin-clear"><i className="fa fa-calendar pr-2"></i>Mar 23, 2017</p>
                              </div>
                            </div>
                            <hr />
                            <div className="media margin-clear">
                              <div className="d-flex pr-2">
                                <div className="overlay-container">
                                  <img className="media-object" src="images/blog-thumb-2.jpg" alt="blog-thumb"/>
                                  <a href="blog-post.html" className="overlay-link small"><i className="fa fa-link"></i></a>
                                </div>
                              </div>
                              <div className="media-body">
                                <h6 className="media-heading"><a href="blog-post.html">Lorem ipsum dolor sit amet...</a></h6>
                                <p className="small margin-clear"><i className="fa fa-calendar pr-2"></i>Mar 22, 2017</p>
                              </div>
                            </div>
                            <hr />
                            <div className="media margin-clear">
                              <div className="d-flex pr-2">
                                <div className="overlay-container">
                                  <img className="media-object" src="images/blog-thumb-3.jpg" alt="blog-thumb"/>
                                  <a href="blog-post.html" className="overlay-link small"><i className="fa fa-link"></i></a>
                                </div>
                              </div>
                              <div className="media-body">
                                <h6 className="media-heading"><a href="blog-post.html">Lorem ipsum dolor sit amet...</a></h6>
                                <p className="small margin-clear"><i className="fa fa-calendar pr-2"></i>Mar 21, 2017</p>
                              </div>
                            </div>
                            <hr />
                            <div className="media margin-clear">
                              <div className="d-flex pr-2">
                                <div className="overlay-container">
                                  <img className="media-object" src="images/blog-thumb-4.jpg" alt="blog-thumb"/>
                                  <a href="blog-post.html" className="overlay-link small"><i className="fa fa-link"></i></a>
                                </div>
                              </div>
                              <div className="media-body">
                                <h6 className="media-heading"><a href="blog-post.html">Lorem ipsum dolor sit amet...</a></h6>
                                <p className="small margin-clear"><i className="fa fa-calendar pr-2"></i>Mar 21, 2017</p>
                              </div>
                            </div>
                            <div className="text-right space-top">
                              <a href="blog-large-image-right-sidebar.html" className="link-dark"><i className="fa fa-plus-circle pl-1 pr-1"></i>More</a>
                            </div>
                          </div> 
                        </div>*/}
                        {/*<div className="col-lg-3">
                           <div className="footer-content">
                            <h2 className="title">Portfolio Gallery</h2>
                            <div className="separator-2"></div>
                            <div className="row grid-space-10">
                              <div className="col-4 col-lg-6">
                                <div className="overlay-container mb-10">
                                  <img src="images/gallery-1.jpg" alt=""/>
                                  <a href="portfolio-item.html" className="overlay-link small">
                                    <i className="fa fa-link"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="col-4 col-lg-6">
                                <div className="overlay-container mb-10">
                                  <img src="images/gallery-2.jpg" alt=""/>
                                  <a href="portfolio-item.html" className="overlay-link small">
                                    <i className="fa fa-link"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="col-4 col-lg-6">
                                <div className="overlay-container mb-10">
                                  <img src="images/gallery-3.jpg" alt=""/>
                                  <a href="portfolio-item.html" className="overlay-link small">
                                    <i className="fa fa-link"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="col-4 col-lg-6">
                                <div className="overlay-container mb-10">
                                  <img src="images/gallery-4.jpg" alt=""/>
                                  <a href="portfolio-item.html" className="overlay-link small">
                                    <i className="fa fa-link"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="col-4 col-lg-6">
                                <div className="overlay-container mb-10">
                                  <img src="images/gallery-5.jpg" alt=""/>
                                  <a href="portfolio-item.html" className="overlay-link small">
                                    <i className="fa fa-link"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="col-4 col-lg-6">
                                <div className="overlay-container mb-10">
                                  <img src="images/gallery-6.jpg" alt=""/>
                                  <a href="portfolio-item.html" className="overlay-link small">
                                    <i className="fa fa-link"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="text-right space-top">
                              <a href="portfolio-grid-2-3-col.html" className="link-dark"><i className="fa fa-plus-circle pl-1 pr-1"></i>More</a>
                            </div>
                          </div> 
                        </div> */}
                        <div className="offset-lg-2 col-lg-4">
                          <div className="footer-content">
                            <h2 className="title">Find Us</h2>
                            <div className="separator-2"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium odio voluptatem necessitatibus illo vel dolorum soluta.</p>
                            <ul className="social-links circle animated-effect-1">
                              <li className="facebook"><a href="#"><i className="fa fa-facebook"></i></a></li>
                              <li className="twitter"><a href="#"><i className="fa fa-twitter"></i></a></li>
                              <li className="googleplus"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                              <li className="linkedin"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                              <li className="xing"><a href="#"><i className="fa fa-xing"></i></a></li>
                            </ul>
                            <div className="separator-2"></div>
                            <ul className="list-icons">
                              <li><i className="fa fa-map-marker pr-2 text-default"></i> 2260 Lithonia Ind. Blvd. Suite F Lithonia, GA 30058</li>
                              <li><i className="fa fa-phone pr-2 text-default"></i> (844) 382-1819</li>
                              <li><a href="#"><i className="fa fa-envelope-o pr-2"></i>info@qm3us.net</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="subfooter dark-bg">
                  <div className="container">
                    <div className="subfooter-inner">
                      <div className="row">
                        <div className="col-md-12">
                          <p className="text-center">Copyright © {this.state.currentYear}. All rights reserved.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>        
              </footer>
            </div>
          </div>
    );
  }
}

export default Main;
