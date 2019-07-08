import React, { Component } from 'react';
import '../../assets/css/main.css';
import WarehouseImage from "../../assets/images/WarehouseBackground.jpg";
import ConstructionImage from "../../assets/images/under_construction.jpeg";

export default class Slideshow extends Component {  
    render() {
      return (
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
                          <a href="#" class="btn radius-50 btn-dark btn-animated" style={{marginRight: "30px"}}>For Job Seekers <i class="fa fa-arrow-right"></i></a>
                          <a href="#" class="btn radius-50 btn-dark btn-animated" style={{marginBottom: "10px"}}>For Employers <i class="fa fa-arrow-right"></i></a>
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
      )
    }
};