import React, { Component } from 'react';
import '../../assets/css/main.css';
import QM3Logo from "../../assets/images/Logos/QM3_Logo.svg";
import { Link } from "react-router-dom";
import $ from 'jquery';

var contact_header_height = 43;

export default class Navbar extends Component {
    constructor(props){
        super(props);

        this.handleScroll = this.handleScroll.bind(this);

        this.state = {scrollTop: 0};
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        
        if($('body').hasClass('fixed-header-on')) {
            $('body').removeClass('fixed-header-on');
        }

		//Scroll Spy
		//-----------------------------------------------
		if($(".scrollspy").length>0) {
			$("body").addClass("scroll-spy");
			if($(".fixed.header").length>0) {
				$('body').scrollspy({
					target: '.scrollspy',
					offset: 85
				});
			} else {
				$('body').scrollspy({
					target: '.scrollspy',
					offset: 20
				});
			}
		}

		//Smooth Scroll
		//-----------------------------------------------
		if ($(".smooth-scroll").length>0) {
			if($(".header.fixed").length>0) {
				$( ".smooth-scroll a, a.smooth-scroll" ).on( "click", function(e) {
					var destination = $(this.hash);
					e.preventDefault();
					$('html,body').animate({
						scrollTop: destination.offset().top-66
					}, 1000);
				});
			} else {
				$( ".smooth-scroll a, a.smooth-scroll" ).on( "click", function(e) {
					var destination = $(this.hash);
					e.preventDefault();
					$('html,body').animate({
						scrollTop: destination.offset().top
					}, 1000);
				});
			}
        }

		//Show dropdown on hover only for desktop devices
		//-----------------------------------------------
		if ($(window).width() > 975) {
            $('.main-navigation:not(.onclick) .navbar-nav>li.dropdown, .main-navigation:not(.onclick) li.dropdown>ul>li.dropdown').hover(
                function() {
                    $(this).addClass('show');
                    $(this).find('>.dropdown-menu').addClass('show');
                }, function() {
                    $(this).removeClass('show');
                    $(this).find('>.dropdown-menu').removeClass('show');
                });
            };
    
            //Show dropdown on click only for mobile devices
            //-----------------------------------------------
            if ($(window).width() < 974 || $(".main-navigation.onclick").length>0 ) {
                $('.header [data-toggle=dropdown], .header-top [data-toggle=dropdown]').on('click', function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    $(this).parent().siblings().removeClass('show');
                    $(this).parent().siblings().find('.dropdown-menu').removeClass('show');
                    $(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('show');
                    $(this).parent().toggleClass('show');
                    $(this).siblings('.dropdown-menu').toggleClass('show');
                });
            };
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(e) {
        this.setState({scrollTop: e.srcElement.body.scrollTop})

        let headerElement = $('.header-container .header.fixed')[0].offsetTop;
        let scrollLength = window.scrollY;
        if (contact_header_height < window.scrollY) {
            if(!$('.header-container .header.fixed').hasClass('hc-element-visible')) {
                $('.header-container .header.fixed').addClass('hc-element-visible');
                $('body').addClass('fixed-header-on');
                $('.header-container').css('height', '125px');
            }
        } else {
            if($('.header-container .header.fixed').hasClass('hc-element-visible')) {
                $('.header-container .header.fixed').removeClass('hc-element-visible');
                $('body').removeClass('fixed-header-on');
            }
        }
    }

    render() {
        let isSloganHidden = "";
        if(window.scrollY > contact_header_height) {
            isSloganHidden = "slogan-hidden";
        }

        let homeLink = <Link to="/" className="nav-link" id="first-dropdown">Home</Link>;
        if (this.props.location === "Main") {
            homeLink = <a href="#home" className="nav-link smooth-scroll" id="first-dropdown">Home</a>;
        }

        let logoLink = <Link to="/"><img id="logo_img" src={QM3Logo} alt="The Project" /></Link>
        if (this.props.location === "Main") {
            logoLink = <a href="#home" className="smooth-scroll"><img id="logo_img" src={QM3Logo} alt="The Project" /></a>
        }

        let aboutUsLink = "";
        if (this.props.location === "Main") {
            aboutUsLink = <a href="#about" className="nav-link smooth-scroll" id="third-dropdown">About Us</a>;
        }

        let ourTeamLink = "";
        if (this.props.location === "Main") {
            ourTeamLink = <a href="#ourteam" className="nav-link smooth-scroll" id="fourth-dropdown">Our Team</a>
        }

        return (
        <div className="header-container">
            <header className="header fixed fixed-desktop clearfix">
                <div className="container">
                <div className="row">
                    <div className="col-md-auto hidden-md-down pl-3">
                    <div className="header-first clearfix">
                            <div id="logo" className="logo">
                                {logoLink}
                            </div>

                        <p className={"site-slogan " + isSloganHidden}>
                        "We Do It Right!"
                        </p>

                    </div>

                    </div>
                    <div className="col-lg-7 ml-lg-auto">
                
                    <div className="header-second clearfix">
                        
                    <div className="main-navigation main-navigation--mega-menu  animated">
                        <nav className="navbar navbar-expand-lg navbar-light p-0">
                        <div className="navbar-brand clearfix hidden-lg-up">

                                <div id="logo-mobile" className="logo">
                                    {logoLink}
                                </div>

                            <p className="site-slogan">
                            "We Do It Right!"
                            </p>

                        </div>
                        
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse-1" aria-controls="navbar-collapse-1" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbar-collapse-1">
                            <ul className="navbar-nav ml-xl-auto">

                            <li className="nav-item dropdown active mega-menu mega-menu--wide">
                                {homeLink}
                            </li>
                            <li className="nav-item dropdown  mega-menu mega-menu--wide">
                                {aboutUsLink}
                            </li>
                            <li className="nav-item dropdown ">
                                <a href="#" className="nav-link dropdown-toggle" id="second-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                                <ul className="dropdown-menu" aria-labelledby="second-dropdown">
                                <li ><Link to="/employers">For Employers</Link></li>
                                <li ><Link to="/candidates">For Job Seekers</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown  mega-menu mega-menu--wide">
                                {ourTeamLink}
                            </li>
                            <li className="nav-item dropdown  mega-menu mega-menu--wide">
                                <a href="#footer" className="nav-link smooth-scroll" id="fourth-dropdown">Contact Us</a>
                            </li>
                            </ul>
                        </div>
                        </nav>
                    </div>
                    </div>

                    </div>
                </div>
                </div>
            </header>
        </div>
      )
    };
}
