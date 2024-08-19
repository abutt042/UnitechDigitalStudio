import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

function Portfolio() {
  useEffect(() => {
    const handleTabHover = (event) => {
      const tabId = $(event.currentTarget).attr('data-tab');
      if ($(event.currentTarget).hasClass('current')) {
        return false;
      }

      $('.portfolio-tab .cluom').removeClass('current');
      $(event.currentTarget).addClass('current');

      $('.portfolio-tab .glry-img .tab-img').removeClass('current');
      $('#' + tabId).addClass('current');
    };

    $('.portfolio-tab').on('mouseenter', '.cluom', handleTabHover);

    // Cleanup event listeners on component unmount
    return () => {
      $('.portfolio-tab').off('mouseenter', '.cluom', handleTabHover);
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
    <section className="portfolio-tab crev section-padding pb-0" 
    
     style={{backgroundColor:'rgb(248, 248, 248)',     backgroundImage: 'url(/light/assets/imgs/background/liningbg.png)',
      backgroundRepeat:'no-repeat',
              backgroundPosition: 'bottom left',}}>
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Our Portfolio</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center justify-content-center">
            <h2 className="fw-600 text-u ls1" style={{color:'black'}}>
              Proud projects <span style={{color : "rgb(45, 103, 181)"}}>  make us excel</span>
            </h2>
          
          </div>
          <div className="ml-auto" style={{textAlign:'right', marginTop:'4%'}}>
              <Link to="/portfolio"className="go-more">
                <span className="text">View all Works</span>
                <span className="icon ti-arrow-top-right"></span>
              </Link>
            </div>
        </div>
        <div className="row">
          <div className="col-lg-5 d-flex align-items-center justify-content-center">
            <div className="glry-img">
              <div
                id="tab-1"
                className="bg-img tab-img current"
                data-background="/light/assets/imgs/works/1/EmpowerCare.jpg"
              ></div>
              <div
                id="tab-2"
                className="bg-img tab-img"
                data-background="/light/assets/imgs/works/1/WeStack.jpg"
              ></div>
              <div
                id="tab-3"
                className="bg-img tab-img"
                data-background="/light/assets/imgs/works/1/UnitedEstates.jpg"
              ></div>
              <div
                id="tab-4"
                className="bg-img tab-img"
                data-background="/light/assets/imgs/works/1/BareBeauty.jpg"
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
                <img src="/light/assets/imgs/works/1/EmpowerCare.jpg" alt="Empower Care" />
              </div>
              <div className="more text-u ls1 fz-12">
                <Link to="/portfolio/empowercare">
                  View Project <i className="ml-15 ti-arrow-top-right"></i>
                </Link>
              </div>
            </div>
            <div className="cluom mb-30" data-tab="tab-2">
              <div className="info">
                <h6 className="sub-title opacity-7">Design & Development</h6>
                <h4>We Stack</h4>
              </div>
              <div className="img">
                <img src="/light/assets/imgs/works/1/WeStack.jpg" alt="We Stack" />
              </div>
              <div className="more text-u ls1 fz-12">
                <Link to="/portfolio/westack">
                  View Project <i className="ml-15 ti-arrow-top-right"></i>
                </Link>
              </div>
            </div>
            <div className="cluom mb-30" data-tab="tab-3">
              <div className="info">
                <h6 className="sub-title opacity-7">Development</h6>
                <h4>United Estates</h4>
              </div>
              <div className="img">
                <img src="/light/assets/imgs/works/1/UnitedEstates.jpg" alt="United Estates" />
              </div>
              <div className="more text-u ls1 fz-12">
                <Link to="/portfolio/unitedestates">
                  View Project <i className="ml-15 ti-arrow-top-right"></i>
                </Link>  
              </div>
            </div>
            <div className="cluom mb-30" data-tab="tab-4">
              <div className="info">
                <h6 className="sub-title opacity-7">Development</h6>
                <h4>Bare Beauty</h4>
              </div>
              <div className="img">
                <img src="/light/assets/imgs/works/1/BareBeauty.jpg" alt="Bare Beauty" />
              </div>
              <div className="more text-u ls1 fz-12">
                <Link to="/portfolio/barebeuty">
                  View Project <i className="ml-15 ti-arrow-top-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
