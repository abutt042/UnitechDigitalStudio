'use client';
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import LoadingScreen from '../common/loader';
function Slider({ blogPost }) {
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
  return (<>
    <div
    className="header page-header bg-img section-padding"
    style={{ 
      backgroundImage:'url(/light/assets/imgs/header/bg1.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color:'white'}}
 
  >
    <div className="header blog-header  pb-0">
      <div className="container mt-80">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="caption">
           
              <h1 className="fz-55 mt-30">
              <h1>{blogPost.title}</h1>
              </h1>
            </div>
            {/* <div className="info d-flex mt-40 align-items-center">
              <div className="left-info">
                <div className="d-flex align-items-center">
                  <div className="author-info">
                    <div className="d-flex align-items-center">
                      <a href="#0" className="circle-60">
                        <img
                          src="/light/assets/imgs/blog/author.png"
                          alt=""
                          className="circle-img"
                        />
                      </a>
                      <a href="#0" className="ml-20">
                        <span className="opacity-7">Author</span>
                        <h6 className="fz-16">UiCamp</h6>
                      </a>
                    </div>
                  </div>
                  <div className="date ml-50">
                    <a href="#0">
                      <span className="opacity-7">Published</span>
                      <h6 className="fz-16">August 6, 2021</h6>
                    </a>
                  </div>
                </div>
              </div>
              <div className="right-info ml-auto">
                <div>
                  <span className="pe-7s-comment fz-18 mr-10"></span>
                  <span className="opacity-7">02 Comments</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
   
    </div>
    </div>
    </>
  );
}

export default Slider;
