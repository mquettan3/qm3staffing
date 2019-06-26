import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
          <div className="front-page ">
        
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
                            <li className="list-inline-item"><i className="fa fa-phone pr-1 pl-10"></i>+00 123 123 123</li>
                            <li className="list-inline-item"><i className="fa fa-envelope-o pr-1 pl-10"></i> example@your_domain.com</li>
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
                            <a href="index.html"><img id="logo_img" src="images/logo_gray.png" alt="The Project" /></a>
                          </div>
        
                          <div className="site-slogan">
                            Multipurpose HTML5 Template
                          </div>
        
                        </div>
        
                      </div>
                      <div className="col-lg-8 ml-lg-auto">
                  
                        <div className="header-second clearfix">
                          
                        <div className="main-navigation main-navigation--mega-menu  animated">
                          <nav className="navbar navbar-expand-lg navbar-light p-0">
                            <div className="navbar-brand clearfix hidden-lg-up">
        
                              <div id="logo-mobile" className="logo">
                                <a href="index.html"><img id="logo-img-mobile" src="images/logo_gray.png" alt="The Project" /></a>
                              </div>
        
                              <div className="site-slogan">
                                Multipurpose HTML5 Template
                              </div>
        
                            </div>
                            
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse-1" aria-controls="navbar-collapse-1" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                            </button>
        
                            <div className="collapse navbar-collapse" id="navbar-collapse-1">
                              <ul className="navbar-nav ml-xl-auto">
        
                                <li className="nav-item dropdown active mega-menu mega-menu--wide">
                                  <a href="index.html" className="nav-link dropdown-toggle" id="first-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
                                  <ul className="dropdown-menu" aria-labelledby="first-dropdown">
                                    <li>
                                      <div className="row">
                                        <div className="col-md-12">
                                          <h4 className="title"><i className="fa fa-laptop pr-2"></i> Demos</h4>
                                          <div className="row">
                                            <div className="col-lg-3">
                                              <div className="divider"></div>
                                              <ul className="menu">
                                                <li ><a href="index.html"><i className="fa fa-home pr-2"></i>Home Default</a></li>
                                                <li ><a href="index-rtl.html"><i className="fa fa-home pr-2"></i>Home Default - RTL <span className="badge">v1.4</span></a></li>
                                                <li ><a href="index-corporate-1.html"><i className="fa fa-suitcase pr-2"></i>Corporate 1</a></li>
                                                <li ><a href="index-corporate-2.html"><i className="fa fa-suitcase pr-2"></i>Corporate 2</a></li>
                                                <li ><a href="index-corporate-3.html"><i className="fa fa-suitcase pr-2"></i>Corporate 3</a></li>
                                                <li ><a href="index-corporate-4.html"><i className="fa fa-suitcase pr-2"></i>Corporate 4 <span className="badge">v1.2</span></a></li>
                                                <li className="active"><a href="index-corporate-5.html"><i className="fa fa-suitcase pr-2"></i>Corporate 5 (Law Firm) <span className="badge">v1.3</span></a></li>
                                                <li ><a href="index-corporate-6.html"><i className="fa fa-suitcase pr-2"></i>Corporate 6<span className="badge">v2.1</span></a></li>
                                              </ul>
                                            </div>
                                            <div className="col-lg-3">
                                              <div className="divider"></div>
                                              <ul className="menu">
                                                <li ><a href="index-shop.html"><i className="fa fa-shopping-basket pr-2"></i>Commerce 1</a></li>
                                                <li ><a href="index-shop-2.html"><i className="fa fa-shopping-basket pr-2"></i>Commerce 2</a></li>
                                                <li ><a href="index-portfolio.html"><i className="fa fa-briefcase pr-2"></i>Portfolio/Agency</a></li>
                                                <li ><a href="index-portfolio-2.html"><i className="fa fa-camera pr-2"></i>Portfolio 2 <span className="badge">v1.4</span></a></li>
                                                <li ><a href="index-medical.html"><i className="fa fa-ambulance pr-2"></i>Medical</a></li>
                                                <li ><a href="index-restaurant.html"><i className="fa fa-cutlery pr-2"></i>Restaurant</a></li>
                                                <li ><a href="index-restaurant-2.html"><i className="fa fa-cutlery pr-2"></i>Restaurant 2 <span className="badge">v1.3</span></a></li>
                                                <li ><a href="index-wedding.html"><i className="fa fa-heart pr-2"></i>Wedding</a></li>
                                              </ul>
                                            </div>
                                            <div className="col-lg-3">
                                              <div className="divider"></div>
                                              <ul className="menu">
                                                <li ><a href="index-landing.html"><i className="fa fa-star pr-2"></i>Landing Page</a></li>
                                                <li ><a href="index-landing-2.html"><i className="fa fa-star pr-2"></i>Landing Page 2 <span className="badge">v1.3</span></a></li>
                                                <li ><a href="page-coming-soon.html"><i className="fa fa-clock-o pr-2"></i>Coming Soon</a></li>
                                                <li ><a href="index-one-page.html"><i className="fa fa-home pr-2"></i>One Page Version</a></li>
                                                <li ><a href="index-construction.html"><i className="fa fa-building pr-2"></i>Construction <span className="badge">v1.1</span></a></li>
                                                <li ><a href="index-education.html"><i className="fa fa-graduation-cap pr-2"></i>Education <span className="badge">v1.1</span></a></li>
                                                <li ><a href="index-hotel.html"><i className="fa fa-bed pr-2"></i>Hotel <span className="badge">v1.1</span></a></li>
                                                <li ><a href="index-blog.html"><i className="fa fa-pencil pr-2"></i>Blog <span className="badge">v1.1</span></a></li>
                                              </ul>
                                            </div>
                                            <div className="col-lg-3">
                                              <div className="divider"></div>
                                              <ul className="menu">
                                                <li ><a href="index-blog-2.html"><i className="fa fa-pencil pr-2"></i>Blog 2<span className="badge">v1.3</span></a></li>
                                                <li ><a href="index-beauty.html"><i className="fa fa-magic pr-2"></i>Beauty Center <span className="badge">v1.1</span></a></li>
                                                <li ><a href="index-gym.html"><i className="fa fa-heartbeat pr-2"></i>Gym <span className="badge">v1.2</span></a></li>
                                                <li ><a href="index-resume.html"><i className="fa fa-user pr-2"></i>Resume <span className="badge">v1.2</span></a></li>
                                                <li ><a href="index-agency.html"><i className="fa fa-users pr-2"></i>Agency <span className="badge">v1.2</span></a></li>
                                                <li ><a href="index-agency-2.html"><i className="fa fa-users pr-2"></i>Agency 2<span className="badge">v2.1</span></a></li>
                                                <li ><a href="index-logistics.html"><i className="fa fa-truck pr-2"></i>Logistics <span className="badge">v1.2</span></a></li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                                <li className="nav-item dropdown  mega-menu mega-menu--wide">
                                  <a href="#" className="nav-link dropdown-toggle" id="second-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                  <ul className="dropdown-menu" aria-labelledby="second-dropdown">
                                    <li>
                                      <div className="row">
                                        <div className="col-lg-8">
                                          <h4 className="title">Pages</h4>
                                          <div className="row">
                                            <div className="col-lg-4">
                                              <div className="divider"></div>
                                              <ul className="menu">
                                                <li ><a href="page-about.html"><i className="fa fa-angle-right"></i>About Us 1</a></li>
                                                <li ><a href="page-about-2.html"><i className="fa fa-angle-right"></i>About Us 2</a></li>
                                                <li ><a href="page-about-3.html"><i className="fa fa-angle-right"></i>About Us 3</a></li>
                                                <li ><a href="page-about-4.html"><i className="fa fa-angle-right"></i>About Us 4</a></li>
                                                <li ><a href="page-about-me.html"><i className="fa fa-angle-right"></i>About Me</a></li>
                                                <li ><a href="page-team.html"><i className="fa fa-angle-right"></i>Our Team - Options 1</a></li>
                                                <li ><a href="page-team-2.html"><i className="fa fa-angle-right"></i>Our Team - Options 2</a></li>
                                                <li ><a href="page-team-3.html"><i className="fa fa-angle-right"></i>Our Team - Options 3</a></li>
                                                <li ><a href="page-coming-soon.html"><i className="fa fa-angle-right"></i>Coming Soon Page</a></li>
                                                <li ><a href="page-faq.html"><i className="fa fa-angle-right"></i>FAQ page</a></li>
                                              </ul>
                                            </div>
                                            <div className="col-lg-4">
                                              <div className="divider"></div>
                                              <ul className="menu">
                                                <li ><a href="page-services.html"><i className="fa fa-angle-right"></i>Services 1</a></li>
                                                <li ><a href="page-services-2.html"><i className="fa fa-angle-right"></i>Services 2</a></li>
                                                <li ><a href="page-services-3.html"><i className="fa fa-angle-right"></i>Services 3</a></li>
                                                <li ><a href="page-contact.html"><i className="fa fa-angle-right"></i>Contact 1</a></li>
                                                <li ><a href="page-contact-2.html"><i className="fa fa-angle-right"></i>Contact 2</a></li>
                                                <li ><a href="page-contact-3.html"><i className="fa fa-angle-right"></i>Contact 3</a></li>
                                                <li ><a href="page-login.html"><i className="fa fa-angle-right"></i>Login 1</a></li>
                                                <li ><a href="page-login-2.html"><i className="fa fa-angle-right"></i>Login 2 - Fullsreen</a></li>
                                                <li ><a href="page-signup.html"><i className="fa fa-angle-right"></i>Sign Up 1</a></li>
                                                <li ><a href="page-signup-2.html"><i className="fa fa-angle-right"></i>Sign Up 2 - Fullsreen</a></li>
                                              </ul>
                                            </div>
                                            <div className="col-lg-4">
                                              <div className="divider"></div>
                                              <ul className="menu">
                                                <li ><a href="page-404.html"><i className="fa fa-angle-right"></i>404 error</a></li>
                                                <li ><a href="page-404-2.html"><i className="fa fa-angle-right"></i>404 error - Fullscreen</a></li>
                                                <li ><a href="page-left-sidebar.html"><i className="fa fa-angle-right"></i>Left Sidebar</a></li>
                                                <li ><a href="page-right-sidebar.html"><i className="fa fa-angle-right"></i>Right Sidebar</a></li>
                                                <li ><a href="page-two-sidebars.html"><i className="fa fa-angle-right"></i>Two Sidebars</a></li>
                                                <li ><a href="page-two-sidebars-left.html"><i className="fa fa-angle-right"></i>Two Sidebars Left</a></li>
                                                <li ><a href="page-two-sidebars-right.html"><i className="fa fa-angle-right"></i>Two Sidebars Right</a></li>
                                                <li ><a href="page-no-sidebars.html"><i className="fa fa-angle-right"></i>No Sidebars</a></li>
                                                <li ><a href="page-sitemap.html"><i className="fa fa-angle-right"></i>Sitemap</a></li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-4 col-md-3 hidden-md-down">
                                          <h4 className="title">Premium HTML5 Template</h4>
                                          <p className="mb-2">The Project is perfectly suitable for corporate, business and company webpages.</p>
                                          <img src="images/section-image-3.png" alt="The Project" />
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                                <li className="nav-item dropdown ">
                                  <a href="#" className="nav-link dropdown-toggle" id="third-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Features</a>
                                  <ul className="dropdown-menu" aria-labelledby="third-dropdown">
                                    <li className="dropdown ">
                                      <a  className="dropdown-toggle" data-toggle="dropdown" href="#">Headers <span className="badge">v1.2</span></a>
                                      <ul className="dropdown-menu">
                                        <li ><a href="features-headers-default.html">Default/Semi-Transparent</a></li>
                                        <li ><a href="features-headers-default-dark.html">Dark/Semi-Transparent</a></li>
                                        <li ><a href="features-headers-gradient-dark.html">Gradient Dark <span className="badge">v1.2</span></a></li>
                                        <li ><a href="features-headers-gradient-light.html">Gradient Light <span className="badge">v1.2</span></a></li>
                                        <li ><a href="features-headers-classic.html">Classic Light</a></li>
                                        <li ><a href="features-headers-classic-dark.html">Classic Dark</a></li>
                                        <li ><a href="features-headers-colored.html">Colored/Light</a></li>
                                        <li ><a href="features-headers-colored-dark.html">Colored/Dark</a></li>
                                        <li ><a href="features-headers-full-width.html">Full Width</a></li>
                                        <li ><a href="features-headers-offcanvas-left.html">Offcanvas Left Side</a></li>
                                        <li ><a href="features-headers-offcanvas-right.html">Offcanvas Right Side</a></li>
                                        <li ><a href="features-headers-logo-centered.html">Logo Centered</a></li>
                                        <li ><a href="features-headers-slider-top.html">Slider Top</a></li>
                                        <li ><a href="features-headers-simple.html">Simple Static</a></li>
                                      </ul>
                                    </li>
                                    <li className="dropdown ">
                                      <a  className="dropdown-toggle" data-toggle="dropdown" href="#">Menus <span className="badge">v2.1</span></a>
                                      <ul className="dropdown-menu">
                                        <li ><a href="features-headers-default.html">Default/On Hover Menu</a></li>
                                        <li ><a href="features-menus-onhover-no-animations.html">On Hover Menu - No Animations</a></li>
                                        <li ><a href="features-menus-onclick.html">On Click Menu - With Animations</a></li>
                                        <li ><a href="features-menus-onclick-no-animations.html">On Click Menu - No Animations</a></li>
                                        <li ><a href="features-menus-style-2.html">Menu Style 2 <span className="badge">v2.1</span></a></li>
                                      </ul>
                                    </li>
                                    <li className="dropdown ">
                                      <a  className="dropdown-toggle" data-toggle="dropdown" href="#">Footers <span className="badge">v2.1</span></a>
                                      <ul className="dropdown-menu">
                                        <li ><a href="features-footers-default.html#footer">Default</a></li>
                                        <li ><a href="features-footers-contact-form.html#footer">Contact Form</a></li>
                                        <li ><a href="features-footers-contact-form-2.html#footer">Contact Form 2 <span className="badge">v1.2</span></a></li>
                                        <li ><a href="features-footers-contact-form-3.html#footer">Contact Form 3 <span className="badge">v2.1</span></a></li>
                                        <li ><a href="features-footers-google-maps.html#footer">Google Maps</a></li>
                                        <li ><a href="features-footers-subscribe.html#footer">Subscribe Form</a></li>
                                        <li ><a href="features-footers-minimal.html#footer">Minimal</a></li>
                                        <li ><a href="features-footers-links.html#footer">Links <span className="badge">v1.1</span></a></li>
                                        <li ><a href="features-footers-full-width.html#footer">Full Width <span className="badge">v1.2</span></a></li>
                                      </ul>
                                    </li>
                                    <li className="dropdown ">
                                      <a  className="dropdown-toggle" data-toggle="dropdown" href="#">Main Sliders <span className="badge">v2.1</span></a>
                                      <ul className="dropdown-menu">
                                        <li ><a href="features-sliders-fullscreen.html">Full Screen</a></li>
                                        <li ><a href="features-sliders-fullscreen-2.html">Full Screen 2 <span className="badge">v2.1</span></a></li>
                                        <li ><a href="features-sliders-fullwidth.html">Full Width</a></li>
                                        <li ><a href="features-sliders-fullwidth-big-height.html">Full Width - Big Height</a></li>
                                        <li ><a href="features-sliders-boxedwidth-light.html">Boxed Width - Light Bg</a></li>
                                        <li ><a href="features-sliders-boxedwidth-dark.html">Boxed Width - Dark Bg</a></li>
                                        <li ><a href="features-sliders-boxedwidth-default.html">Boxed Width - Default Bg</a></li>
                                        <li ><a href="features-sliders-video-background.html">Video Background</a></li>
                                        <li ><a href="features-sliders-text-rotator.html">Text Rotator</a></li>
                                      </ul>
                                    </li>
                                    <li className="dropdown">
                                      <a  className="dropdown-toggle" data-toggle="dropdown" href="#">Email Templates <span className="badge">v1.1</span></a>
                                      <ul className="dropdown-menu">
                                        <li><a target="_blank" href="email_templates/email_template_blue.html">Blue</a></li>
                                        <li><a target="_blank" href="email_templates/email_template_brown.html">Brown</a></li>
                                        <li><a target="_blank" href="email_templates/email_template_cool_green.html">Cool Green</a></li>
                                        <li><a target="_blank" href="email_templates/email_template_dark_cyan.html">Dark Cyan</a></li>
                                        <li><a target="_blank" href="email_templates/email_template_dark_red.html">Dark Red</a></li>
                                        <li><a target="_blank" href="email_templates/email_template_gold.html">Gold</a></li>
                                        <li><a target="_blank" href="email_templates/email_template_gray.html">Gray</a></li>
                                        <li><a target="_blank" href="email_templates/email_template_green.html">Green</a></li>
                                        <li><a target="_blank" href="email_templates/email_template_light_blue.html">Light Blue</a></li>
                                        <li><a target="_blank" href="email_templates/email_template_orange.html">Orange</a></li>
                                        <li><a target="_blank" href="email_templates/email_template_pink.html">Pink</a></li>
                                        <li><a target="_blank" href="email_templates/email_template_purple.html">Purple</a></li>
                                        <li><a target="_blank" href="email_templates/email_template_red.html">Red</a></li>
                                        <li><a target="_blank" href="email_templates/email_template_vivid_red.html">Vivid Red</a></li>
                                      </ul>
                                    </li>
                                    <li className="dropdown ">
                                      <a  className="dropdown-toggle" data-toggle="dropdown" href="#">Pricing Tables</a>
                                      <ul className="dropdown-menu">
                                        <li ><a href="features-pricing-tables-1.html">Pricing Tables 1</a></li>
                                        <li ><a href="features-pricing-tables-2.html">Pricing Tables 2</a></li>
                                        <li ><a href="features-pricing-tables-3.html">Pricing Tables 3</a></li>
                                      </ul>
                                    </li>
                                    <li className="dropdown ">
                                      <a className="dropdown-toggle" data-toggle="dropdown" href="#">Icons</a>
                                      <ul className="dropdown-menu">
                                        <li ><a href="features-icons-fontawesome.html">Font Awesome</a></li>
                                      </ul>
                                    </li>
                                    <li ><a href="features-dark-page.html">Dark Page</a></li>
                                    <li className="dropdown ">
                                      <a className="dropdown-toggle" data-toggle="dropdown" href="#">Typography <span className="badge">v2.1</span></a>
                                      <ul className="dropdown-menu">
                                        <li ><a href="features-typography.html">Font Scheme 1</a></li>
                                        <li ><a href="features-typography-2.html">Font Scheme 2</a></li>
                                        <li ><a href="features-typography-3.html">Font Scheme 3 <span className="badge">v2.1</span></a></li>
                                        <li ><a href="features-typography-0.html">Font Scheme - OS Default</a></li>
                                      </ul>
                                    </li>
                                    <li ><a href="features-backgrounds.html">Backgrounds</a></li>
                                    <li ><a href="features-grid.html">Grid</a></li>
                                  </ul>
                                </li>
                                <li className="nav-item dropdown  mega-menu mega-menu--narrow">
                                  <a href="#" className="nav-link dropdown-toggle" id="fourth-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Components</a>
                                  <ul className="dropdown-menu" aria-labelledby="fourth-dropdown">
                                    <li>
                                      <div className="row">
                                        <div className="col-md-12">
                                          <h4 className="title"><i className="fa fa-magic pr-2"></i> Components</h4>
                                          <div className="row">
                                            <div className="col-lg-6">
                                              <div className="divider"></div>
                                              <ul className="menu">
                                                <li ><a href="components-social-icons.html"><i className="fa fa-share-alt pr-2"></i>Social Icons</a></li>
                                                <li ><a href="components-buttons.html"><i className="fa fa-flask pr-2"></i>Buttons</a></li>
                                                <li ><a href="components-forms.html"><i className="fa fa-align-justify pr-2"></i>Forms</a></li>
                                                <li ><a href="components-tabs-and-pills.html"><i className=" fa fa-list-ul pr-2"></i>Tabs &amp; Pills</a></li>
                                                <li ><a href="components-accordions.html"><i className="fa fa-bars pr-2"></i>Accordions</a></li>
                                                <li ><a href="components-progress-bars.html"><i className="fa fa-line-chart pr-2"></i>Progress Bars</a></li>
                                                <li ><a href="components-call-to-action.html"><i className="fa fa-comments-o pr-2"></i>Call to Action Blocks</a></li>
                                                <li ><a href="components-alerts-and-callouts.html"><i className="fa fa-info-circle pr-2"></i>Alerts &amp; Callouts</a></li>
                                                <li ><a href="components-content-sliders.html"><i className="fa fa-star pr-2"></i>Content Sliders</a></li>
                                                <li ><a href="components-charts.html"><i className="fa fa-pie-chart pr-2"></i>Charts</a></li>
                                                <li ><a href="components-page-loaders.html"><i className="fa fa-circle-o-notch fa-spin"></i>Page Loaders <span className="badge">v1.1</span></a></li>
                                                <li ><a href="components-icon-boxes.html"><i className="fa fa-picture-o pr-2"></i>Icon Boxes</a></li>
                                              </ul>
                                            </div>
                                            <div className="col-lg-6">
                                              <div className="divider"></div>
                                              <ul className="menu">
                                                <li ><a href="components-image-boxes.html"><i className="fa fa-camera pr-2"></i>Image Boxes</a></li>
                                                <li ><a href="components-fullwidth-sections.html"><i className="fa fa-code pr-2"></i>Full Width Sections</a></li>
                                                <li ><a href="components-animations.html"><i className="fa fa-heart pr-2"></i>Animations</a></li>
                                                <li ><a href="components-video-and-audio.html"><i className="fa fa-play pr-2"></i>Video</a></li>
                                                <li ><a href="components-lightbox.html"><i className="fa fa-plus pr-2"></i>Lightbox</a></li>
                                                <li ><a href="components-counters.html"><i className="fa fa-sort-numeric-desc pr-2"></i>Counters</a></li>
                                                <li ><a href="components-modals.html"><i className="fa fa-arrows-alt pr-2"></i>Modals</a></li>
                                                <li ><a href="components-tables.html"><i className="fa fa-table pr-2"></i>Tables</a></li>
                                                <li ><a href="components-text-rotators.html"><i className="fa fa-rotate-left pr-2"></i>Text Rotators</a></li>
                                                <li ><a href="components-announcement-default.html"><i className="fa fa-bullhorn pr-2"></i>Announcements <span className="badge">v1.3</span></a></li>
                                                <li ><a href="components-separators.html"><i className="fa fa-star pr-2"></i>Separators <span className="badge">v1.3</span></a></li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                                <li className="nav-item dropdown ">
                                  <a href="portfolio-grid-2-3-col.html" className="nav-link dropdown-toggle" id="fifth-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Portfolio</a>
                                  <ul className="dropdown-menu" aria-labelledby="fifth-dropdown">
                                    <li className="dropdown ">
                                      <a  className="dropdown-toggle" data-toggle="dropdown" href="#">Portfolio Grid 1</a>
                                      <ul className="dropdown-menu">
                                        <li ><a href="portfolio-grid-1-2-col.html">2 Column</a></li>
                                        <li ><a href="portfolio-grid-1-3-col.html">3 Column</a></li>
                                        <li ><a href="portfolio-grid-1-4-col.html">4 Column</a></li>
                                        <li ><a href="portfolio-grid-1-sidebar.html">With Sidebar</a></li>
                                      </ul>
                                    </li>
                                    <li className="dropdown ">
                                      <a  className="dropdown-toggle" data-toggle="dropdown" href="#">Portfolio Grid 2</a>
                                      <ul className="dropdown-menu">
                                        <li ><a href="portfolio-grid-2-2-col.html">2 Column</a></li>
                                        <li ><a href="portfolio-grid-2-3-col.html">3 Column</a></li>
                                        <li ><a href="portfolio-grid-2-4-col.html">4 Column</a></li>
                                        <li ><a href="portfolio-grid-2-sidebar.html">With Sidebar</a></li>
                                      </ul>
                                    </li>
                                    <li className="dropdown ">
                                      <a  className="dropdown-toggle" data-toggle="dropdown" href="#">Portfolio Grid 3 - Dark</a>
                                      <ul className="dropdown-menu">
                                        <li ><a href="portfolio-grid-3-2-col.html">2 Column</a></li>
                                        <li ><a href="portfolio-grid-3-3-col.html">3 Column</a></li>
                                        <li ><a href="portfolio-grid-3-4-col.html">4 Column</a></li>
                                        <li ><a href="portfolio-grid-3-sidebar.html">With Sidebar</a></li>
                                      </ul>
                                    </li>
                                    <li className="dropdown ">
                                      <a  className="dropdown-toggle" data-toggle="dropdown" href="#">Portfolio Fullwidth</a>
                                      <ul className="dropdown-menu">
                                        <li ><a href="portfolio-fullwidth-2-col.html">2 Column</a></li>
                                        <li ><a href="portfolio-fullwidth-3-col.html">3 Column</a></li>
                                        <li ><a href="portfolio-fullwidth-4-col.html">4 Column</a></li>
                                      </ul>
                                    </li>
                                    <li className="dropdown ">
                                      <a  className="dropdown-toggle" data-toggle="dropdown" href="#">Portfolio List</a>
                                      <ul className="dropdown-menu">
                                        <li ><a href="portfolio-list-1.html">List - Large Images</a></li>
                                        <li ><a href="portfolio-list-2.html">List - Small Images</a></li>
                                        <li ><a href="portfolio-list-sidebar.html">With Sidebar</a></li>
                                      </ul>
                                    </li>
                                    <li ><a href="portfolio-item.html">Single Item 1</a></li>
                                    <li ><a href="portfolio-item-2.html">Single Item 2</a></li>
                                    <li ><a href="portfolio-item-3.html">Single Item 3</a></li>
                                  </ul>
                                </li>
                                <li className="nav-item dropdown ">
                                  <a href="index-shop.html" className="nav-link dropdown-toggle" id="sixth-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
                                  <ul className="dropdown-menu" aria-labelledby="sixth-dropdown">
                                    <li ><a href="index-shop.html">Shop Home 1</a></li>
                                    <li ><a href="index-shop-2.html">Shop Home 2</a></li>
                                    <li ><a href="shop-listing-4col.html">Grid - 4 Columns</a></li>
                                    <li ><a href="shop-listing-3col.html">Grid - 3 Columns</a></li>
                                    <li ><a href="shop-listing-2col.html">Grid - 2 Columns</a></li>
                                    <li ><a href="shop-listing-sidebar.html">Grid - With Sidebar</a></li>
                                    <li ><a href="shop-listing-list.html">List</a></li>
                                    <li ><a href="shop-product.html">Product Page</a></li>
                                    <li ><a href="shop-product-2.html">Product Page 2 <span className="badge">v1.3</span></a></li>
                                    <li ><a href="shop-cart.html">Shopping Cart</a></li>
                                    <li ><a href="shop-checkout.html">Checkout Page - Step 1</a></li>
                                    <li ><a href="shop-checkout-payment.html">Checkout Page - Step 2</a></li>
                                    <li ><a href="shop-checkout-review.html">Checkout Page - Step 3</a></li>
                                    <li ><a href="shop-invoice.html">Invoice</a></li>
                                  </ul>
                                </li>
                                <li className="nav-item dropdown ">
                                  <a href="blog-large-image-right-sidebar.html" className="nav-link dropdown-toggle" id="seventh-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
                                  <ul className="dropdown-menu" aria-labelledby="seventh-dropdown">
                                    <li ><a href="index-blog.html">Blog Home <span className="badge">v1.1</span></a></li>
                                    <li ><a href="index-blog-2.html">Blog Home 2 <span className="badge">v1.3</span></a></li>
                                    <li className="dropdown ">
                                      <a  className="dropdown-toggle" data-toggle="dropdown" href="#">Large Image</a>
                                      <ul className="dropdown-menu to-left">
                                        <li ><a href="blog-large-image-right-sidebar.html">Right Sidebar</a></li>
                                        <li ><a href="blog-large-image-left-sidebar.html">Left Sidebar</a></li>
                                        <li ><a href="blog-large-image-no-sidebar.html">Without Sidebar</a></li>
                                      </ul>
                                    </li>
                                    <li className="dropdown ">
                                      <a  className="dropdown-toggle" data-toggle="dropdown" href="#">Medium Image</a>
                                      <ul className="dropdown-menu to-left">
                                        <li ><a href="blog-medium-image-right-sidebar.html">Right Sidebar</a></li>
                                        <li ><a href="blog-medium-image-left-sidebar.html">Left Sidebar</a></li>
                                        <li ><a href="blog-medium-image-no-sidebar.html">Without Sidebar</a></li>
                                      </ul>
                                    </li>
                                    <li className="dropdown ">
                                      <a  className="dropdown-toggle" data-toggle="dropdown" href="#">Masonry</a>
                                      <ul className="dropdown-menu to-left">
                                        <li ><a href="blog-masonry-right-sidebar.html">Right Sidebar</a></li>
                                        <li ><a href="blog-masonry-left-sidebar.html">Left Sidebar</a></li>
                                        <li ><a href="blog-masonry-no-sidebar.html">Without Sidebar</a></li>
                                      </ul>
                                    </li>
                                    <li ><a href="blog-timeline.html">Timeline</a></li>
                                    <li ><a href="blog-post.html">Blog Post</a></li>
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
                          <a href="page-contact.html" className="btn btn-sm btn-default">Contact Us <i className="fa fa-envelope-o pl-1"></i></a>
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
                        <li className="text-center" data-transition="crossfade" data-slotamount="default" data-masterspeed="default" data-title="Next Generation Template">
        
                        <img src="images/corporate-5-slider-slide-2.jpg" alt="slidebg1" data-bgposition="center top"  data-bgrepeat="no-repeat" data-bgfit="cover"  className="rev-slidebg" />
        
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
                            Law Firm
                        </div>
        
                        <div className="tp-caption large_white hidden-md-down"
                          data-x="center"
                          data-y="90"
                          data-start="1300"
                          data-width="800"
                          data-transform_idle="o:1;"
                          data-transform_in="o:0;s:2000;e:Power4.easeInOut;">
                            <div className="separator light with-icon"><i className="fa fa-balance-scale bordered"></i></div>
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
                          data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, maiores, aliquid. Repellat eum numquam aliquid culpa offici.
                        </div>
        
                        </li>

                        <li data-transition="crossfade" data-slotamount="default" data-masterspeed="default" data-title="Premium Bootstrap Template">
        
                        <img src="images/corporate-5-slider-slide-1.jpg" alt="slidebg2" data-bgposition="center top"  data-bgrepeat="no-repeat" data-bgfit="cover" className="rev-slidebg" />
        
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
                        <div className="tp-caption medium_white hidden-sm-down"
                          data-x="left"
                          data-y="170"
                          data-start="1300"
                          data-width="650"
                          data-whitespace="normal"
                          data-transform_idle="o:1;"
                          data-transform_in="y:[100%];sX:1;sY:1;s:700;e:Power4.easeInOut;"
                          data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;"
                          data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                          data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, maiores, aliquid. Repellat eum numquam aliquid.
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
                            <h3 className="mt-10">Adipisci blanditiis placeat suscipit itaque obcaeca</h3>
                          </div>
                          <div className="col-md-4 text-right">
                            <a href="#" className="btn btn-lg btn-default btn-animated">Learn More<i className="fa fa-arrow-right pl-20"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section light-gray-bg clearfix">
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
              </section>
              <section className="main-container">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 order-lg-2">
                      <div className="overlay-container overlay-visible">
                        <img src="images/corporate-5-section-image-1.jpg" alt=""/>
                        <a href="#" className="overlay-link"><i className="fa fa-link"></i></a>
                        <div className="overlay-bottom hidden-sm-down">
                          <div className="text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nobis sunt, quae alias impedit ea molestias recusandae.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                      <h2 className="title">About Us</h2>
                      <div className="separator-2"></div>
                      <p>Lorem ipsum dolor sit amet, lotrem <span className="text-default">some colored text</span>. Nulla explicabo <strong>attention to this</strong> blanditiis, ex cupiditate ipsam debitis rem.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing llum magni nam doloribus eligendi, veritatis aspernatur amet odit doloremque possimus error. Vel, totam numquam animi!</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <strong>Some bold text</strong>, unde voluptatum quidem explicabo et eius aut nisi dolore ut. Sapiente velit quidem, unde fugit. Neque illum, debitis ut, porro natus.</p>
                      <a href="page-about.html" className="btn radius-50 btn-default"><i className="fa fa-users pr-10"></i>Learn More</a>
                    </div>
                  </div>
                </div>
                <br />
              </section>
              <section className="dark-translucent-bg fixed-bg pv-30" style={{backgroundImage: "url(images/corporate-5-section-image-2.jpg)"}}>
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
              <div className="footer-top light-gray-bg">
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
              </div>
              <footer id="footer" className="clearfix ">
                <div className="footer">
                  <div className="container">
                    <div className="footer-inner">
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="footer-content">
                            <div className="logo-footer"><img id="logo-footer" src="images/logo_gray.png" alt=""/></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus illo vel dolorum soluta consectetur doloribus sit. Delectus non tenetur odit dicta vitae debitis suscipit doloribus. Ipsa, aut voluptas quaerat... <a href="page-about.html">Learn More<i className="fa fa-long-arrow-right pl-1"></i></a></p>
                            <div className="separator-2"></div>
                            <nav>
                              <ul className="nav flex-column">
                                <li className="nav-item"><a className="nav-link" href="#">Support</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Lorem</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Terms</a></li>
                                <li className="nav-item"><a className="nav-link" href="page-about.html">About</a></li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                        <div className="col-lg-3">
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
                        </div>
                        <div className="col-lg-3">
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
                        </div>
                        <div className="col-lg-3">
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
                              <li><i className="fa fa-map-marker pr-2 text-default"></i> Street Address No, City</li>
                              <li><i className="fa fa-phone pr-2 text-default"></i> +00 1234567890</li>
                              <li><a href="#"><i className="fa fa-envelope-o pr-2"></i>example@your_domain.com</a></li>
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
                          <p className="text-center">Copyright © 2019. All rights reserved.</p>
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
