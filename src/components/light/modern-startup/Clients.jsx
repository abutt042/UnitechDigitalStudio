'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
function Clients() {
  const swiperOptions = {
    speed: 500,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 1000, // 1 seconds delay
      disableOnInteraction: false, // Do not disable autoplay when user interacts
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: false,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 15,
        centeredSlides: false,
      },
    },
  };

  return (
    <section className="clients-carso section-padding pt-0">
      <div className="container">
        <div className="sec-bottom mb-70" style={{ marginTop: '4%' }}>
          <div className="main-bg d-flex align-items-center">
            <h2 style={{ fontSize: '40px' }}>
              Technologies We Use
            </h2>
          </div>
        </div>
        <div className="swiper5" >
          <Swiper
            className="swiper-container"
            modules={[Navigation, Pagination,Autoplay]} // Use modules prop
            {...swiperOptions}
          >
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img style={{ width: '100%' }} src="/light/assets/imgs/brands/wordpress.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img style={{ width: '100%' }} src="/light/assets/imgs/brands/odoo.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img style={{ width: '100%' }} src="/light/assets/imgs/brands/laraval.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img style={{ width: '100%' }} src="/light/assets/imgs/brands/angular.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img style={{ width: '100%' }} src="/light/assets/imgs/brands/shopify.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img style={{ width: '100%' }} src="/light/assets/imgs/brands/b5.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img style={{ width: '100%' }} src="/light/assets/imgs/brands/b4.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img style={{ width: '100%' }} src="/light/assets/imgs/brands/b1.jpg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img style={{ width: '100%' }} src="/light/assets/imgs/brands/react.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img style={{ width: '100%' }} src="/light/assets/imgs/brands/sparrow.png" alt="" />
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
