import React, { Component } from 'react';
import AtlantaSkyline from "../../assets/images/Atlanta_Skyline.jpg";

export default class OurValues extends Component {  
  render() {
      let backgroundStyle = {
          backgroundImage: "url(" + AtlantaSkyline + ")"
      }
    return (
      // <section id="values" className="section light-gray-bg clearfix">
      //     <div className="container">
      //       <div className="row justify-content-lg-center">
      //         <div className="col-lg-12">
      //           <h1>Our Core Values</h1>
      //           <h3>Safety</h3>
      //           <p>We pursue the highest degree of safety at all times.</p>
      //           <h3>Quality</h3>
      //           <p>We unite the Right Talent every time, with Integrity.</p>
      //           <h3>Respect</h3>
      //           <p>Our basic belief is respect for everyone. Leaving no one behind.</p>
      //           <h3>Honesty</h3>
      //           <p>We do what we say we are going to do, and do not make promise we cannot deliver on.</p>
      //           <h1>Our Vision</h1>
      //           <p>To be the most evolved and efficient Employment Placement partner in the world, admired for our ability to unite talent with opportunity, technology, customer service and integrity.</p>
      //           <h1>Our Mission</h1>
      //           <p>We work to help individuals, partners, and communities realize others, as well as their own full potential. Bringing joy to families, by bridging the gap between talent and opportunity.</p>
      //           <h1>Our Promise</h1>
      //           <p>THE BEST CUSTOMER SERVICE IN THE BUSINESS, because everything we do we do with integrity and passion.</p>
      //           <p>Whatever kind of talent you need, we locate and evaluate the most qualified talented candidates, advise our partner managers, facilitate the talent offers and bring the best talent to positions where all parties will succeed. And we stand behind everything and everyone with our unprecedented 100% Guarantee.</p>
      //         </div>
      //       </div>
      //     </div>
      //   </section>
      <section id="values" className="dark-translucent-bg fixed-bg pv-30" style={backgroundStyle}>
          <div className="container">
            <div className="row justify-content-lg-center">
                <div className="col-lg-8">
                <h2 className="text-center mt-4">Our <strong>Values</strong></h2>
                <div className="separator with-icon"><i className="fa fa-suitcase bordered"></i></div>
                <p className="large text-center">QM3 Solutions vows to be the most evolved and efficient employment placement partner in the world!  Our values guide us so that we are admired for our ability to unite talent, oportunity, technology, customer service, and integrity.</p>
                </div>
            </div>
            <div className="row">
              <div class="col-md-3">
                <div class="hc-item-box-2 hc-element-invisible animated hc-element-visible fadeInDownSmall" data-animation-effect="fadeInDownSmall" data-effect-delay="100">
                  <span class="icon without-bg"><i class="fa text-muted fa-shield"></i></span>
                  <div class="body">
                    <h3 class="title">Safety</h3>
                    <p>We pursue the highest degree of safety at all times.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="hc-item-box-2 hc-element-invisible animated hc-element-visible fadeInDownSmall" data-animation-effect="fadeInDownSmall" data-effect-delay="100">
                  <span class="icon without-bg"><i class="fa text-muted fa-trophy"></i></span>
                  <div class="body">
                    <h3 class="title">Quality</h3>
                    <p>We unite the Right Talent every time, with Integrity.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="hc-item-box-2 hc-element-invisible animated hc-element-visible fadeInDownSmall" data-animation-effect="fadeInDownSmall" data-effect-delay="100">
                  <span class="icon without-bg"><i class="fa text-muted fa-handshake-o"></i></span>
                  <div class="body">
                    <h3 class="title">Respect</h3>
                    <p>Our basic belief is respect for everyone. Leaving no one behind.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="hc-item-box-2 hc-element-invisible animated hc-element-visible fadeInDownSmall" data-animation-effect="fadeInDownSmall" data-effect-delay="100">
                  <span class="icon without-bg"><i class="fa text-muted fa-heart-o"></i></span>
                  <div class="body">
                    <h3 class="title">Honesty</h3>
                    <p>We do what we say we are going to do, and do not make promise we cannot deliver on.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    )
  }
};