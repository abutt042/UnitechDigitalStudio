import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav-crev">
        <div className="container">
          <Link className="logo icon-img-100" to="/">
            <img src="/light/assets/imgs/logo.png" alt="logo" />
          </Link>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <span className="rolling-text">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/light/page-services">
                  <span className="rolling-text">Services</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/light/page-about">
                  <span className="rolling-text">About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/light/portfolio-sticky">
                  <span className="rolling-text">Portfolio</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/light/page-team">
                  <span className="rolling-text">Team</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/light/page-contact3">
                  <span className="rolling-text">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="topnav">
            <div className="menu-icon cursor-pointer">
              <span  style={{color:'#fff'}} className="icon ti-align-right"></span>
            </div>
          </div>
        </div>
      </nav>

      <div className="hamenu one-scroll">
        <div className="logo icon-img-100">
          <img src="/light/assets/imgs/logo-light.png" alt="logo" />
        </div>
        <div className="close-menu cursor-pointer ti-close"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="menu-text">
                <div className="text">
                  <h2>Menu</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="menu-links">
                <ul className="main-menu rest">
                  <li>
                    <Link to="/">
                      <div className="o-hidden">
                        <div className="link cursor-pointer dmenu">
                          <span className="fill-text" data-text="Home">
                            Home
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/light/page-services">
                      <div className="o-hidden">
                        <div className="link cursor-pointer dmenu">
                          <span className="fill-text" data-text="Services">
                            Services
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/light/page-about">
                      <div className="o-hidden">
                        <div className="link cursor-pointer dmenu">
                          <span className="fill-text" data-text="About">
                            About
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/light/portfolio-sticky">
                      <div className="o-hidden">
                        <div className="link cursor-pointer dmenu">
                          <span className="fill-text" data-text="Portfolio">
                            Portfolio
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/light/page-team">
                      <div className="o-hidden">
                        <div className="link cursor-pointer dmenu">
                          <span className="fill-text" data-text="Team">
                            Team
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/light/page-contact3">
                      <div className="o-hidden">
                        <div className="link cursor-pointer dmenu">
                          <span className="fill-text" data-text="Contact">
                            Contact
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="cont-info">
                <div className="item mb-50">
                  <h6 className="sub-title mb-15 opacity-7">Address</h6>
                  <h5>
                    541 Melville Geek, <br /> Palo Alto, CA 94301
                  </h5>
                </div>
                <div className="item mb-50">
                  <h6 className="sub-title mb-15 opacity-7">Social Media</h6>
                  <ul className="rest social-text">
                    <li className="mb-10">
                      <Link to="#0" className="hover-this">
                        <span className="hover-anim">Facebook</span>
                      </Link>
                    </li>
                    <li className="mb-10">
                      <Link to="#0" className="hover-this">
                        <span className="hover-anim">Twitter</span>
                      </Link>
                    </li>
                    <li className="mb-10">
                      <Link to="#0" className="hover-this">
                        <span className="hover-anim">LinkedIn</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#0" className="hover-this">
                        <span className="hover-anim">Instagram</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="item mb-40">
                  <h6 className="sub-title mb-15 opacity-7">Contact Us</h6>
                  <h5>
                    <Link to="#0">Hello@email.com</Link>
                  </h5>
                  <h5 className="underline mt-10">
                    <Link to="#0">+1 840 841 25 69</Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
