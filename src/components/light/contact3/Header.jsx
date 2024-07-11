'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

function Header() {
  function loadBackgroudImages() {
    let backgroudImages = document.querySelectorAll('[data-background]');

    if (backgroudImages.length > 0) {
      backgroudImages.forEach((element) => {
        let image = element.dataset.background;
        element.style.backgroundImage = `url('${image}')`;
      });
    }
  }
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=1.2'); // Reduced delay for faster start
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
      className="header page-header-cerv bg-img section-padding"
      data-background="/light/assets/imgs/header/2.jpg"
      data-overlay-dark="4"
      
    >
      <div className="container pt-100">
        <div className="text-center">
          <h1 className="fz-100">Contact Us.</h1>
          <div className="mt-15">
            <Link to="/">Home</Link>
            <span className="padding-rl-20">|</span>
            <span className="main-color">Contact</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
