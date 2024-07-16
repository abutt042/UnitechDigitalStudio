import React from 'react';

function Intro() {
  return (
    <section className="page-intro position-re">
      <div className="container-fluid rest">
        <div className="row justify-content-center">
          <div className="col-sm-9">
            <div className="img to-up fit-img">
              <img src="/light/assets/imgs/background/4.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container section-padding">
        <div className="row">
          <div className="col-lg-5">
            <h6 className="sub-title main-color">About Company</h6>
          </div>
          <div className="col-lg-7">
            <div className="text">
              <h4 style={{fontSize:'20px'}}>
              Welcome to Unitech Digital Studio, your partner in navigating the dynamic digital landscape. We are a team of dedicated professionals driven by a passion for creativity, innovation, and delivering exceptional digital solutions. With a finger on the pulse of the latest trends and technologies, we empower businesses to thrive in the online realm. Unitech Digital Studio, based in the vibrant heart of London, UK, is a trailblazer in digital solutions. With a passion for creativity and an unwavering commitment to excellence, we are the driving force behind brands that dare to innovate, evolve, and thrive in the ever-changing digital landscape.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="line-overlay">
        <svg
          viewBox="0 0 1728 1101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1"
            style={{ strokeDasharray: 3246.53 }}
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Intro;
