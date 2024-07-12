import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

function Portfolio() {
  useEffect(() => {
    const handleTabHover = (event) => {
      const tabId = $(event.target).attr('data-tab');
      if ($(event.target).hasClass('current')) {
        return false;
      }

      $('.portfolio-tab .cluom').removeClass('current');
      $(event.target).addClass('current');

      $('.portfolio-tab .glry-img .tab-img').removeClass('current');
      $('#' + tabId).addClass('current');
    };

    $('.portfolio-tab .cluom').on('mouseenter', handleTabHover);

    // Cleanup event listeners on component unmount
    return () => {
      $('.portfolio-tab .cluom').off('mouseenter', handleTabHover);
    };
  }, []);
  useEffect(() => {
    // Set the background images after component mounts
    $('.portfolio-tab .tab-img').each(function () {
      const bg = $(this).attr('data-background');
      $(this).css('background-image', `url(${bg})`);
    });
  }, []);
  return (
    <section className="portfolio-tab crev section-padding" data-scroll-index="3">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Our Portfolio</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600 text-u ls1">
              Featured <span className="fw-200">projects</span>
            </h2>
            <div className="ml-auto">
              <Link to="/light/portfolio-sticky" className="go-more">
                <span className="text">View all Works</span>
                <span className="icon ti-arrow-top-right"></span>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 d-flex align-items-center justify-content-center">
            <div className="glry-img">
              <div
                id="tab-1"
                className="bg-img tab-img current"
                data-background="/light/assets/imgs/works/1/EmpowerCare.png"
              ></div>
              <div
                id="tab-2"
                className="bg-img tab-img"
                data-background="/light/assets/imgs/works/1/WeStack.png"
              ></div>
              <div
                id="tab-3"
                className="bg-img tab-img"
                data-background="/light/assets/imgs/works/1/UnitedEstates.png"
              ></div>
              <div
                id="tab-4"
                className="bg-img tab-img"
                data-background="/light/assets/imgs/works/1/BareBeauty.png"
              ></div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 content">
            <div className="cluom mb-30 current" data-tab="tab-1">
              <div className="info">
                <h6 className="sub-title opacity-7">Development</h6>
                <h4>Empower Care</h4>
              </div>
              <div className="img">
                <img src="/light/assets/imgs/works/1/EmpowerCare.png" alt="" />
              </div>
              <div className="more text-u ls1 fz-12">
                <a href="/light/project6">
                  View Project <i className="ml-15 ti-arrow-top-right"></i>
                </a>
              </div>
            </div>
            <div className="cluom mb-30" data-tab="tab-2">
              <div className="info">
                <h6 className="sub-title opacity-7">Design & Development</h6>
                <h4>We Stack</h4>
              </div>
              <div className="img">
                <img src="/light/assets/imgs/works/1/WeStack.png" alt="" />
              </div>
              <div className="more text-u ls1 fz-12">
                <a href="/light/project5">
                  View Project <i className="ml-15 ti-arrow-top-right"></i>
                </a>
              </div>
            </div>
            <div className="cluom mb-30" data-tab="tab-3">
              <div className="info">
                <h6 className="sub-title opacity-7">Development</h6>
                <h4>United Estates</h4>
              </div>
              <div className="img">
                <img src="/light/assets/imgs/works/1/UnitedEstates.png" alt="" />
              </div>
              <div className="more text-u ls1 fz-12">
                <a href="/light/project4">
                  View Project <i className="ml-15 ti-arrow-top-right"></i>
                </a>
              </div>
            </div>
            <div className="cluom mb-30" data-tab="tab-4">
              <div className="info">
                <h6 className="sub-title opacity-7">Development</h6>
                <h4>Bare Beauty</h4>
              </div>
              <div className="img">
                <img src="/light/assets/imgs/works/1/BareBeauty.png" alt="" />
              </div>
              <div className="more text-u ls1 fz-12">
                <a href="/light/project3">
                  View Project <i className="ml-15 ti-arrow-top-right"></i>
                </a>
              </div>
            </div>
         
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
