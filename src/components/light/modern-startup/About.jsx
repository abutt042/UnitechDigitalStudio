import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="about" style={{backgroundColor:'#f8f8f8'}}>
      <div className="container section-padding ">
        <div className="row md-marg">
          <div className="col-lg-6">
            <div className="cont md-mb50">
              <h6 className="sub-title main-color mb-15">Who We Are</h6>
              <h3>
                Our team consists of practitioners who have years of experience
                in launching & managing projects.
              </h3>
              
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img-vid">
              <img style={{width:'100%'}} src="/light/assets/imgs/intro/2.jpg" alt="" />
              <div className="curv-butn main-bg">
                <a href="https://youtu.be/AzwC6umvd1s" className="vid">
                  <div className="icon">
                    <i className="fas fa-play"></i>
                  </div>
                </a>
                <div className="shap-left-top">
                  <svg
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-11 h-11"
                  >
                    <path
                      d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                      fill="#1a1a1a"
                    ></path>
                  </svg>
                </div>
                <div className="shap-right-bottom">
                  <svg
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-11 h-11"
                  >
                    <path
                      d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                      fill="#1a1a1a"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-end mt-50">
               
                <div>
                  <p style={{fontSize:'17px'}}>
                  Welcome to Unitech Digital Studio, your partner in navigating the dynamic digital landscape. We are a team of dedicated professionals driven by a passion for creativity, innovation, and delivering exceptional digital solutions. With a finger on the pulse of the latest trends and technologies, we empower businesses to thrive in the online realm. Unitech Digital Studio, based in the vibrant heart of London, UK, is a trailblazer in digital solutions. With a passion for creativity and an unwavering commitment to excellence, we are the driving force behind brands that dare to innovate, evolve, and thrive in the ever-changing digital landscape.{' '}
                  </p>
                </div>
              </div>
        </div>
        <div style={{display:'flex', justifyContent:'end',marginTop:'3%'}}>
                  <Link
                    to="/light/page-about"
                    className="d-flex align-items-end"
                  >
                    <span className="sub-title nowrap">About Us</span>
                    <span className="fz-70 line-height-45 ti-arrow-top-right"></span>
                  </Link>
                </div>
      </div>
    </section>
  );
}

export default About;
