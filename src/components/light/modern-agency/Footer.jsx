import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="modern-footer pt-80">
      <div className="footer-container">
        <div className="container ontop">
          <div className="row pb-30 bord-thin-bottom" style={{alignItems:"center"}}>
            <div className="col-lg-5">
              <div className="logo icon-img-120">
                <img src="/light/assets/imgs/logo.png" alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="social-media d-flex justify-content-end">
                <ul className="rest d-flex align-items-center fz-14">
                  <li className="cursor-pointer ml-50 social-icons">
                    <Link to="#">
                      <i className="fab fa-facebook-f mr-10"></i> Facebook
                    </Link>
                  </li>
                 
                  <li className="cursor-pointer ml-50 social-icons">
                    <Link to="https://www.linkedin.com/company/unitech-digital-studios/" >
                      <i className="fab fa-linkedin-in mr-10"></i> LinkedIn
                    </Link>
                  </li>
                  <li className="cursor-pointer ml-50 social-icons">
                    <Link to="#" >
                      <i className="fab fa-instagram mr-10"></i> Instagram
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row pt-80">
            <div className="col-lg-7">
              <div className="call-action">
                <h2 className="d-slideup wow fz-60 fw-600">
                  <span className="sideup-text">
                    <span className="up-text">Have a project in mind?</span>
                  </span>
                  <span className="sideup-text">
                    <span className="up-text underline">
                      <Link to="/light/page-contact3" className="main-color">
                        Let’s get to work.
                      </Link>
                    </span>
                  </span>
                </h2>
                <div className="info mt-80 d-flex align-items-center">
                  <div>
                    <Link
                     
                      className="butn butn-md butn-bord-thin radius-30"
                    >
                      <span className="text">info@unitechdigitalstudio.com</span>
                    </Link>
                  </div>
                  <div>
                    <Link
                     
                      className="butn butn-md butn-bord-thin radius-30 ml-30"
                    >
                      <span className="text">+(201) 502-4027</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 bord-left">
              <div className="column">
                <h6 className="sub-title mb-30">Useful Links</h6>
                <div className="row">
                  <div className="col-6">
                    <ul className="rest fz-14">
                      <li className="mb-15">
                        <Link to="/light/page-about">About</Link>
                      </li>
                      <li className="mb-15">
                        <Link to="/light/page-services">Services</Link>
                      </li>
                      <li className="mb-15">
                        <Link to="/light/blog-list2">Blog</Link>
                      </li>
                      <li className="mb-15">
                        <Link to="/light/page-contact3">Contact</Link>
                      </li>
                      <li className="mb-15">
                        <Link to="/light/portfolio-sticky">Portfolio</Link>
                      </li>
                      <li>
                        <Link to="/light/page-team">Team</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="rest fz-14">
                      <li className="mb-15">
                        <Link to="/light/page-FAQS">FAQS</Link>
                      </li>
                      <li className="mb-15">
                        <Link>Term & Conditions</Link>
                      </li>
                      <li className="mb-15">
                        <Link >Privacy policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pt-30 pb-30 sub-bg mt-80">
            <p style={{color:'white'}} className="fz-14">
            © 2024 Unitech Digital Studio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
