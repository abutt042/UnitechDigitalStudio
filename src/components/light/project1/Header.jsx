'use client';
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
function Header(props) {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    // Cleanup function
    return () => tl.kill();
  }, []);
  return (
    <div className="header header-project1">
     <div
        className="valign bg-img"
        style={{
          backgroundImage: 'url(/light/assets/imgs/header/bg1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color:'white'
        }}
      >
      <div className="container pt-100">
        <div className="row align-items-end">
          <div className="col-lg-8 md-mb50">
            <div>
              <h1 className="fz-100">
               {props.name}
              </h1>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="info">
              <div className="row">
                <div className="col-md-6">
                  <div className="item mb-30">
                    <span className="opacity-8 mb-5">Category :</span>
                    <h6>{props.category}</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item mb-30">
                    <span className="opacity-8 mb-5">Client :</span>
                    <h6>{props.client}</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item mb-30">
                    <span className="opacity-8 mb-5">Start Date :</span>
                    <h6>{props.date}</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item">
                    <span className="opacity-8 mb-5">Designer :</span>
                    <h6>{props.designer}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-img mt-100"
        data-background="/light/assets/imgs/works/projects/0/1.jpg"
      >
        </div>
      </div>
    </div>
  );
}

export default Header;
