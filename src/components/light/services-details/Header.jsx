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
    
   
    <div
    className="header page-header bg-img section-padding"
style={{
  backgroundImage: 'url(/light/assets/imgs/header/bg1.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color:'white'
    }}
  >
      <div className="container pt-100">
        <div className="text-center">
          <h1>{props.heading}.</h1>
          <div className="mt-15">
            <a href="/">Home</a>
            <span className="padding-rl-20">|</span>
            <a href="/light/page-services">Services</a>
            <span className="padding-rl-20">|</span>
            <span className="main-color">{props.subheading}</span>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Header;
