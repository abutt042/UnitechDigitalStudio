'use client';
import React from 'react';
import { useParallax } from 'react-scroll-parallax';

function Footer() {
  const parallax = useParallax({
    translateY: ['-50%', '0%'],
    speed: -10,
    shouldAlwaysCompleteAnimation: true,
  });
  return (
    <footer style={{ zIndex: -1, position: 'relative' }}>
      <div style={{ position: 'relative' }} ref={parallax.ref}>
        <div
          className=" section-padding bg-img"
          data-background="landing-preview/img/foter.jpg"
          data-overlay-dark="9"
        >
          <div className="container ontop">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="text-center">
                  <span className="butn butn-md butn-bord-thin radius-30 mb-30">
                    <span className="text">Hurry up!</span>
                  </span>
                  <h2 className="fz-70">
                    Get <span className="spc-font">InFolio</span> and Create a
                    <span className="spc-font">Professional</span> Website
                    Today!
                  </h2>
                  <a
                    href="#0"
                    className="butn butn-bg butn-md radius-30 main-colorbg mt-30"
                  >
                    <span>
                      <i className="ti-shopping-cart mr-10"></i> Purchase Now
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
