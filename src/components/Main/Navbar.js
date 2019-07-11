import React, { Component } from 'react';
import '../../assets/css/main.css';
import QM3Logo from "../../assets/images/Logos/QM3_Logo.svg";
import { Link } from "react-router-dom";
import $ from 'jquery';

export default class Navbar extends Component {
    constructor(props){
        super(props);

        this.handleScroll = this.handleScroll.bind(this);

        this.state = {scrollTop: 0};
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);

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

        
		// Fixed header
		//-----------------------------------------------
		if ($(".object-non-visible").length>0) {
			if (($(".header.fixed.fixed-desktop").length > 0) && ($(window).width() > 1000)) {
				(function(){
					var sticky = new window.Waypoint.Sticky({
						element: $('.header-container .header.fixed'),
						stuckClass: 'object-visible',
						handler: function(direction) {
							$('body').toggleClass('fixed-header-on');
						},
						offset: -1
					});
				})();
			};
			if ($(".header.fixed.fixed-all").length > 0) {
				(function(){
					var sticky = new window.Waypoint.Sticky({
						element: $('.header-container .header.fixed'),
						stuckClass: 'object-visible',
						handler: function(direction) {
							$('body').toggleClass('fixed-header-on');
						},
						offset: -1
					});
				})();
			};
		} else {
			if (($(".header.fixed.fixed-desktop").length > 0) && ($(window).width() > 1000)) {
				(function(){
					var sticky = new window.Waypoint.Sticky({
						element: $('.header-container .header.fixed'),
						stuckClass: 'hc-element-visible',
						handler: function(direction) {
							$('body').toggleClass('fixed-header-on');
						},
						offset: -1
					});
				})();
			};
			if ($(".header.fixed.fixed-all").length > 0) {
				(function(){
					var sticky = new window.Waypoint.Sticky({
						element: $('.header-container .header.fixed'),
						stuckClass: 'hc-element-visible',
						handler: function(direction) {
							$('body').toggleClass('fixed-header-on');
						},
						offset: -1
					});
				})();
			};
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
    
            //Transparent Header Calculations
            if ($(".transparent-header").length>0) {
                (function(){
                    var trHeaderHeight;
                    $(window).on('load', function (e) {
                        trHeaderHeight = $("header.header").outerHeight();
                        $(".transparent-header .tp-bannertimer").css("marginTop", (trHeaderHeight)+"px");
                    });
                    var headerTopHeightResize = $(".header-top").outerHeight();
                    $(window).resize(function() {
                        if ($(this).scrollTop()  < headerTopHeightResize + trHeaderHeight -5) {
                            trHeaderHeight = $("header.header").outerHeight();
                            $(".transparent-header .tp-bannertimer").css("marginTop", (trHeaderHeight)+"px");
                        }
                    });
                })();
            }
    
            if ($(".transparent-header .slideshow").length>0 || $(".transparent-header .hc-slideshow").length>0) {
                $(".header-container header.header").addClass("transparent-header-on");
            } else {
                $(".header-container header.header").removeClass("transparent-header-on");
            }
    
            //Full Width Slider with Transparent Header Calculations
            if ($(".transparent-header .slider-banner-fullwidth-big-height").length>0) {
                if ($(window).width() < 991) {
                    $("body").removeClass("transparent-header");
                    $(".header-container header.header").removeClass("transparent-header-on");
                    $(".tp-bannertimer").css("marginTop", "0px");
                    $("body").addClass("slider-banner-fullwidth-big-height-removed");
                } else {
                    $("body").addClass("transparent-header");
                    $(".header-container header.header").addClass("transparent-header-on");
                    $("body").removeClass("slider-banner-fullwidth-big-height-removed");
                }
            };
    
            if ($(".transparent-header .slider-banner-fullwidth-big-height").length>0 || $(".slider-banner-fullwidth-big-height-removed").length>0) {
                $(window).resize(function() {
                    if ($(window).width() < 991) {
                        $("body").removeClass("transparent-header");
                        $(".header-container header.header").removeClass("transparent-header-on");
                        $(".tp-bannertimer").css("marginTop", "0px");
                    } else {
                        $("body").addClass("transparent-header");
                        $(".header-container header.header").addClass("transparent-header-on");
                    }
                });
            };
    
            //Mega menu fixed width
            if ($('html[dir="ltr"] .container .mega-menu--wide').length>0 && $(window).width() > 971) {
                (function(){
                    var headerSecondLeft = parseInt($('.main-navigation--mega-menu').closest('.header-second').parent().offset().left + 15, 10);
                    var headerFirstLeft = parseInt($('.header-first').offset().left, 10);
                    var megaMenuLeftPosition = headerFirstLeft - headerSecondLeft;
                    $('.mega-menu--wide > .dropdown-menu').css('left', megaMenuLeftPosition + 'px');
                    $(window).resize(function() {
                        var headerSecondLeft = parseInt($('.main-navigation--mega-menu').closest('.header-second').parent().offset().left + 15, 10);
                        headerFirstLeft = parseInt($('.header-first').offset().left, 10);
                        megaMenuLeftPosition = headerFirstLeft - headerSecondLeft;
                        $('.mega-menu--wide > .dropdown-menu').css('left', megaMenuLeftPosition + 'px');
                    });
                })();
            }
            if ($('html[dir="rtl"] .container .mega-menu--wide').length>0 && $(window).width() > 971) {
                (function(){
                    var headerSecond = $('.main-navigation--mega-menu').closest('.header-second').parent();
                    var headerSecondRight = parseInt(headerSecond.offset().left + headerSecond.outerWidth(), 10);
                    var headerFirstRight = parseInt($('.header-first').offset().left + $('.header-first').outerWidth() + 15, 10);
                    var megaMenuRightPosition = headerSecondRight - headerFirstRight;
                    $('.mega-menu--wide > .dropdown-menu').css('right', megaMenuRightPosition + 'px');
                    $(window).resize(function() {
                        var headerSecond = $('.main-navigation--mega-menu').closest('.header-second').parent();
                        var headerSecondRight = parseInt(headerSecond.offset().left + headerSecond.outerWidth(), 10);
                        var headerFirstRight = parseInt($('.header-first').offset().left + $('.header-first').outerWidth() + 15, 10);
                        var megaMenuRightPosition = headerSecondRight - headerFirstRight;
                        $('.mega-menu--wide > .dropdown-menu').css('right', megaMenuRightPosition + 'px');
                    });
                })();
            }
    
            //Mega menu full width
            if ($('html[dir="ltr"] .container-fluid .mega-menu--wide').length>0 && $(window).width() > 971) {
                (function(){
                    var headerSecondLeft = parseInt($('.main-navigation--mega-menu').closest('.header-second').parent().offset().left + 15, 10);
                    var headerFirstLeft = parseInt($('.header-first').offset().left, 10);
                    var megaMenuLeftPosition = headerFirstLeft - headerSecondLeft;
                    var megaMenuWidth = parseInt($('.header .container-fluid').width(), 10);
                    $('.mega-menu--wide > .dropdown-menu').css('left', megaMenuLeftPosition + 'px');
                    $('.mega-menu--wide > .dropdown-menu').css('width', megaMenuWidth + 'px');
                    $(window).resize(function() {
                        var headerSecondLeft = parseInt($('.main-navigation--mega-menu').closest('.header-second').parent().offset().left + 15, 10);
                        var headerFirstLeft = parseInt($('.header-first').offset().left, 10);
                        var megaMenuLeftPosition = headerFirstLeft - headerSecondLeft;
                        var megaMenuWidth = parseInt($('.header .container-fluid').width(), 10);
                        $('.mega-menu--wide > .dropdown-menu').css('left', megaMenuLeftPosition + 'px');
                        $('.mega-menu--wide > .dropdown-menu').css('width', megaMenuWidth + 'px');
                    });
                })();
            }
            if ($('html[dir="rtl"] .container-fluid .mega-menu--wide').length>0 && $(window).width() > 971) {
                (function(){
                    var headerSecond = $('.main-navigation--mega-menu').closest('.header-second').parent();
                    var headerSecondRight = parseInt(headerSecond.offset().left + headerSecond.outerWidth(), 10);
                    var headerFirstRight = parseInt($('.header-first').offset().left + $('.header-first').outerWidth() + 15, 10);
                    var megaMenuRightPosition = headerSecondRight - headerFirstRight;
                    var megaMenuWidth = parseInt($('.header .container-fluid').width(), 10);
                    $('.mega-menu--wide > .dropdown-menu').css('right', megaMenuRightPosition + 'px');
                    $('.mega-menu--wide > .dropdown-menu').css('width', megaMenuWidth + 'px');
                    $(window).resize(function() {
                        var headerSecond = $('.main-navigation--mega-menu').closest('.header-second').parent();
                        var headerSecondRight = parseInt(headerSecond.offset().left + headerSecond.outerWidth(), 10);
                        var headerFirstRight = parseInt($('.header-first').offset().left + $('.header-first').outerWidth() + 15, 10);
                        var megaMenuRightPosition = headerSecondRight - headerFirstRight;
                        var megaMenuWidth = parseInt($('.header .container-fluid').width(), 10);
                        $('.mega-menu--wide > .dropdown-menu').css('right', megaMenuRightPosition + 'px');
                        $('.mega-menu--wide > .dropdown-menu').css('width', megaMenuWidth + 'px');
                    });
                })();
            }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(e) {
        this.setState({scrollTop: e.srcElement.body.scrollTop})
    }

    render() {
        let isSloganHidden = "";
        if(window.scrollY !== 0) {
            isSloganHidden = "d-none";
        }

        let homeLink = <Link to="/" className="nav-link" id="first-dropdown">Home</Link>;
        if (this.props.location === "Main") {
            homeLink = <a href="#" className="nav-link" id="first-dropdown">Home</a>;
        }

        let logoLink = <Link to="/"><img id="logo_img" src={QM3Logo} alt="The Project" /></Link>
        if (this.props.location === "Main") {
            logoLink = <a href="#"><img id="logo_img" src={QM3Logo} alt="The Project" /></a>
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

                        <div className={"site-slogan " + isSloganHidden}>
                        "We Do It Right!"
                        </div>

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

                            <div className="site-slogan">
                            "We Do It Right!"
                            </div>

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
                                <a href="#about" className="nav-link smooth-scroll" id="third-dropdown">About Us</a>
                            </li>
                            <li className="nav-item dropdown ">
                                <a href="#" className="nav-link dropdown-toggle" id="second-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                                <ul className="dropdown-menu" aria-labelledby="second-dropdown">
                                <li ><Link to="/employers">For Employers</Link></li>
                                <li ><Link to="/candidates">For Job Seekers</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown  mega-menu mega-menu--wide">
                                <a href="#ourteam" className="nav-link smooth-scroll" id="fourth-dropdown">Our Team</a>
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
