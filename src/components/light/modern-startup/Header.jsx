'use client';
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
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
    <div className="header startup-header">
      <div
        className="valign bg-img"
        style={{
          backgroundImage: 'url(/light/assets/imgs/background/1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color:'white'
        }}
      >
        <div className="container pt-40">
          <div className="caption">
            <div className="lg-text fw-600">
              <div className="text d-flex align-items-center">
                <span>We create</span>
              </div>
              <div className="text">impactful</div>
              <div className="text">digital experiences</div>
            </div>
            <p>
              We combine forward-thinking design with modern technology to tell
              stories that transform and grow our partners brands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
