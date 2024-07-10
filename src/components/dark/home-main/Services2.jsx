import React from 'react';
import data from '../../../data/services.json';
function Services2() {
  return (
    <section className="services section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Our Specialize</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600 d-rotate wow">
              <span className="rotate-text">
                Comprehensive <span className="fw-200">Services.</span>
              </span>
            </h2>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div className="swiper-button-prev">
                  <span className="ti-arrow-left"></span>
                </div>
                <div className="swiper-button-next">
                  <span className="ti-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="serv-swiper"
          data-carousel="swiper"
          data-loop="true"
          data-space="30"
        >
          <div
            id="content-carousel-container-unq-serv"
            className="swiper-container"
            data-swiper="container"
          >
            <div className="swiper-wrapper">
              {data.slice(0, 4).map((item, i) => (
                <div key={i} className="swiper-slide">
                  <div className="item-box radius-15">
                    <div className="icon mb-40 opacity-5">
                      <img src={item.img} alt="" />
                    </div>
                    <h5 className="mb-15">{item.title}</h5>
                    <p>{item.desc}</p>
                    <a href={item.link} className="rmore mt-30">
                      <span className="sub-title">Read More</span>
                      <img
                        src="/dark/assets/imgs/arrow-right.png"
                        alt=""
                        className="icon-img-20 ml-5"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services2;
