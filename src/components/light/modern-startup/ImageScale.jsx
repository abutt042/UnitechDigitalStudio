'use client';
import React, { useEffect, useRef } from 'react';
import { Parallax, useParallax } from 'react-scroll-parallax';

function ImageScale() {
  //   const parallax = useParallax({
  //     translateY: ['-100%', '100%'],
  //     onChange: (element) => console.log(element),
  //     // easing: [0.01, -0.01, 0.01, -0.01],
  //     shouldDisableScalingTranslations: true,
  //     speed: -2,
  //     // shouldAlwaysCompleteAnimation: true,
  //   });

  return (
    <div className="in-box mb-15">
      <div className="img-scale">
        <div className="image" data-overlay-dark="4">
          <div className="img">
            <img
              id="grow"
              src="/light/assets/imgs/background/2.jpg"
              data-speed="0.2"
              data-lag="0"
              alt=""
            />
            <a
              href="https://youtu.be/AzwC6umvd1s"
              className="vid vid-circle d-flex align-items-center justify-content-center"
            >
              <span className="icon fz-50 ti-control-play"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageScale;
