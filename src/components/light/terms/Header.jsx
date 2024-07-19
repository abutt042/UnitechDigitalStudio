'use client';
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { useEffect } from 'react';

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

  return (
    <div
        className="valign bg-img section-padding"
        style={{
          backgroundImage: 'url(/light/assets/imgs/header/bg1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color:'white'
        }}
      >
      <div className="container pt-100 ontop">
        <div className="text-center">
          <h1 className="fz-100 text-u">Terms & Conditions.</h1>
          <div className="mt-15">
            <a href="/">Home</a>
            <span className="padding-rl-20">|</span>
            <span className="main-color">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
