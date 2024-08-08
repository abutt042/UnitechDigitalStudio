'use client';
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
function Header(props) {
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
      <div className="container ">
          <div className="col-lg-12 md-mb50">
            <div style={{textAlign:'center', paddingTop:'80px'}}>
              <h1 className="fz-100">
               {props.name}
              </h1>
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
