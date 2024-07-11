'use client';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function LoadingScreen() {
  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof gsap !== 'undefined') {
        clearInterval(interval);
        const svg = document.getElementById('svg');
        const tl = gsap.timeline();
        const curve = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
        const flat = 'M0 2S175 1 500 1s500 1 500 1V0H0Z';

        tl.to('.loader-wrap-heading .load-text , .loader-wrap-heading .cont', {
          delay: 0.4, // Reduced delay
          y: -100,
          opacity: 0,
        });
        tl.to(svg, {
          duration: 0.3, // Reduced duration
          attr: { d: curve },
          ease: 'power2.easeIn',
        }).to(svg, {
          duration: 0.3, // Reduced duration
          attr: { d: flat },
          ease: 'power2.easeOut',
        });
        tl.to('.loader-wrap', { y: -1500 });
        tl.to('.loader-wrap', { zIndex: -1, display: 'none' });
        tl.from('header', { y: 200 }, '-=0.5'); // Adjusted timing to match new durations
        tl.from(
          'header .container',
          { y: 40, opacity: 0, delay: 0.1 }, // Reduced delay
          '-=0.5' // Adjusted timing to match new durations
        );
      }
    }, 100);
  }, []);

  return (
    <div className="loader-wrap">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>

      <div className="loader-wrap-heading">
        <div className="load-text">
          <span>U</span>
          <span>n</span>
          <span>i</span>
          <span>t</span>
          <span>e</span>
          <span>c</span>
          <span>h</span>
          <span>D</span>
          <span>i</span>
          <span>g</span>
          <span>i</span>
          <span>t</span>
          <span>a</span>
          <span>l</span>
          <span>S</span>
          <span>t</span>
          <span>u</span>
          <span>d</span>
          <span>i</span>
          <span>o</span>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
