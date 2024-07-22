import React from 'react';
import { Link } from 'react-router-dom';

function Skills() {
  return (
    <section
      className="about-crev  sub-bg position-re ontop"
    
    
    >
      <div className="container">
        <div className="row lg-marg">
          <div className="col-lg-6">
         
          </div>
         
        </div>
        <div className="team section-padding pt-0">
        <div className="row">
            <div style={{textAlign:'center'}}>
              <h1>Meet Our Team</h1>
            </div>
            <div className="ml-auto" style={{textAlign:'right', marginTop:'4%'}}>
              <Link to="/team" className="go-more">
                <span className="text">View all team</span>
                <span className="icon ti-arrow-top-right"></span>
              </Link>
            </div>
          </div>
          <div className="row" style={{marginTop:'4%'}}>
            <div className="col-lg-4">
              <div className="item md-mb50">
                <div className="img">
                  <img src="/light/assets/imgs/team/1.jpg" alt="" />
                  <div className="info">
                    <span className="fz-12">Web Designer</span>
                    <h6 className="fz-18">Robert De Niro</h6>
                  </div>
                </div>
                <div className="social">
                  <div className="links">
                    <a href="#0">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#0">
                      <i className="fab fa-behance"></i>
                    </a>
                    <a href="#0">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item md-mb50">
                <div className="img">
                  <img src="/light/assets/imgs/team/2.jpg" alt="" />
                  <div className="info">
                    <span className="fz-12">Web Designer</span>
                    <h6 className="fz-18">Brendan Fraser</h6>
                  </div>
                </div>
                <div className="social">
                  <div className="links">
                    <a href="#0">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#0">
                      <i className="fab fa-behance"></i>
                    </a>
                    <a href="#0">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item">
                <div className="img">
                  <img src="/light/assets/imgs/team/3.jpg" alt="" />
                  <div className="info">
                    <span className="fz-12">Web Designer</span>
                    <h6 className="fz-18">Brendan Fraser</h6>
                  </div>
                </div>
                <div className="social">
                  <div className="links">
                    <a href="#0">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#0">
                      <i className="fab fa-behance"></i>
                    </a>
                    <a href="#0">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
