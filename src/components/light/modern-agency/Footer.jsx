import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="modern-footer pt-15 valign bg-img"
 style={{backgroundColor:'#145A93'}}
  >
      <div className="footer-container" style={{width:'100%'}}>
        <div className="container ontop">
          <div className="row pb-15 bord-thin-bottom" style={{alignItems:"center"}}>
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
                    <Link target='_blank' to="https://www.linkedin.com/company/unitech-digital-studios/" >
                      <i className="fab fa-linkedin-in mr-10"></i> LinkedIn
                    </Link>
                  </li>
                  <li className="cursor-pointer ml-50 social-icons">
                    <Link target='_blank' to="https://www.instagram.com/unitechdigitalstudio/?hl=en" >
                      <i className="fab fa-instagram mr-10"></i> Instagram
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row pt-40">
            <div className="col-lg-7">
              <div className="call-action">
                <h2 className="d-slideup wow fz-50 fw-600">
                  <span className="sideup-text">
                    <span className="up-text">Have a project in mind?</span>
                  </span>
                  <span className="sideup-text">
                    <span className="up-text underline" style={{color:'#252525'}}>
                      <Link to="/contact" >
                        Let’s get to work.
                      </Link>
                    </span>
                  </span>
                </h2>
                <div className="info mt-50 d-flex align-items-center">
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
                        <Link to="/about">About</Link>
                      </li>
                      <li className="mb-15">
                        <Link to="/services">Services</Link>
                      </li>
                      <li className="mb-15">
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li className="mb-15">
                        <Link to="/contact">Contact</Link>
                      </li>
                      <li className="mb-15">
                        <Link to="/portfolio">Portfolio</Link>
                      </li>
                      <li>
                        <Link to="/team">Team</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="rest fz-14">
                      <li className="mb-15">
                        <Link to="/FAQS">FAQS</Link>
                      </li>
                      <li className="mb-15">
                        <Link to="/Terms">Term & Conditions</Link>
                      </li>
                      <li className="mb-15">
                        <Link to="/privacy-policy">Privacy policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pt-30 pb-30 sub-bg mt-10">
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
