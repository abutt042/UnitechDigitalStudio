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

        // SVG Morph Animation
        tl.to(svg, {
          duration: 2, // Increased duration for smooth morphing
          attr: { d: curve },
          ease: 'power2.easeIn',
        }).to(svg, {
          duration: 2, // Smooth morphing back
          attr: { d: flat },
          ease: 'power2.easeOut',
        });

        // Add a longer delay for video load
        tl.to({}, { duration: 7 }); 

        // Exit Animation for Loader
        tl.to('.loader-wrap', { 
          y: -1500, 
          duration: 2, // Smooth exit 
          ease: 'power2.easeInOut' 
        });
        tl.to('.loader-wrap', { 
          zIndex: -1, 
          display: 'none', 
          duration: 0 
        });

        // Header Entrance Animation
        tl.from('header', { 
          y: 200, 
          duration: 1, 
          ease: 'power2.easeOut' 
        }, '-=0.5'); // Overlap timing with the loader exit
        tl.from(
          'header .container',
          { 
            y: 40, 
            opacity: 0, 
            duration: 1 
          },
          '-=0.5'
        );
      }
    }, 100);
  }, []);

  return (
    <div className="loader-wrap">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>
    </div>
  );
}

export default LoadingScreen;
