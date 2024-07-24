import React from 'react';
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <section className="work-sticky section-padding pt-60 sub-bg"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 items">
            <div className="img">
              <img style={{width:'100%'}} src="/light/assets/imgs/works/1/EmpowerCare.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-4 items">
            <div className="cont">
              <div className="sticky-item">
                <h6 className="sub-title opacity-7 mb-10">Development</h6>
                <h5 className="mb-15">Empower Care</h5>
                <p>
                Empowering You to Find Fulfilling Contract  and Per Diem Opportunities​.

                </p>
                <Link to="/portfolio/empowercare" className="rmore mt-30">
                  <span className="sub-title">View Project</span>
                  <img 
                    src="/light/assets/imgs/arrow-right.png"
                    alt=""
                    className="icon-img-20 ml-5"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 items">
            <div className="cont">
              <div className="sticky-item">
                <h6 className="sub-title opacity-7 mb-10">Design & Development</h6>
                <h5 className="mb-15">WeStackltd.com</h5>
                <p>
                Enhancing your Business. Simplifying your Focus.
                </p>
                <Link to="/portfolio/westack"className="rmore mt-30">
                  <span className="sub-title">View Project</span>
                  <img
                    src="/light/assets/imgs/arrow-right.png"
                    alt=""
                    className="icon-img-20 ml-5"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-8 items">
            <div className="img">
              <img style={{width:'100%'}} src="/light/assets/imgs/works/1/WeStack.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-8 items">
            <div className="img">
              <img style={{width:'100%'}} src="/light/assets/imgs/works/1/UnitedEstates.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-4 items">
            <div className="cont">
              <div className="sticky-item">
                <h6 className="sub-title opacity-7 mb-10">Development</h6>
                <h5 className="mb-15">United Estates</h5>
                <p>
                We have made out quality development an hallmark by incorporating the latest in contemporary architecture to suit your tastes and budget.
                </p>
                <Link to="/portfolio/unitedestates" className="rmore mt-30">
                  <span className="sub-title">View Project</span>
                  <img
                    src="/light/assets/imgs/arrow-right.png"
                    alt=""
                    className="icon-img-20 ml-5"
                  />
                </Link>
              </div>   
            </div>
          </div>
          <div className="col-lg-4 items">
            <div className="cont">
              <div className="sticky-item">
                <h6 className="sub-title opacity-7 mb-10">Development</h6>
                <h5 className="mb-15">Bare Beauty</h5>
                <p>
                Embrace Your Natural Glow with Bare Beauty.
                </p>
                <Link to="/portfolio/barebeauty" className="rmore mt-30">
                  <span className="sub-title">View Project</span>
                  <img
                    src="/light/assets/imgs/arrow-right.png"
                    alt=""
                    className="icon-img-20 ml-5"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-8 items">
            <div className="img">
              <img style={{width:'100%'}} src="/light/assets/imgs/works/1/BareBeauty.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
