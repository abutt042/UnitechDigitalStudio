'use client';
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=0.2'); // Reduced delay for faster start
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=1' // Synchronize with the first animation
    );

    // Cleanup function
    return () => tl.kill();
  }, []);
  return (
    <div
      className="header page-header bg-img section-padding"
      style={{ 
        backgroundImage:'url(/light/assets/imgs/header/bg1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color:'white'}}
   
    >
      <div className="container pt-100 pb-100">
        <div className="text-center">
          <h1 className="fz-100 text-u">About Us.</h1>
          <div className="mt-15">
          <Link to="/">Home</Link>
          <span className="padding-rl-20">|</span>
            <span className="main-color">About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
