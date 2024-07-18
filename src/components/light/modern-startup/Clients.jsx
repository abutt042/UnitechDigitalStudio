'use client';
import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';


function Clients() {
  const swiperOptions = {
    speed: 500,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 640px
      500: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false,
      },
      // when window width is >= 768px
      700: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
      },
      // when window width is >= 1200px
      1000: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 25,
        centeredSlides: true,
      },
    },
  };
  return (
    <section className="clients-carso section-padding pt-0">
      <div className="container">
        <div className="sec-bottom mb-70" style={{marginTop:'4%'}}>
          
          <div className="main-bg d-flex align-items-center">
            <h2 style={{fontSize:'40px'}} >
            Technologies We Use
            </h2>
          </div>
        </div>
        <div
          className="swiper5"
          data-carousel="swiper"
          data-items="5"
          data-loop="true"
          data-space="40"
        >
          <Swiper
            id="content-carousel-container-unq-clients"
            className="swiper-container"
            data-swiper="container"
            loop={true}
            modules={[Navigation]}
            {...swiperOptions}
          >
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img style={{width:'100%'}} src="/light/assets/imgs/brands/b1.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img style={{width:'100%'}} src="/light/assets/imgs/brands/b2.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img style={{width:'100%'}} src="/light/assets/imgs/brands/b3.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img style={{width:'100%'}} src="/light/assets/imgs/brands/b4.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img style={{width:'100%'}} src="/light/assets/imgs/brands/b6.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Clients;
