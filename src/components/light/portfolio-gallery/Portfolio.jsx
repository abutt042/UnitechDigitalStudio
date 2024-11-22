'use client';
import React, { useLayoutEffect } from 'react';
import data from '../../../l-data/portfolios/workstand.json';
import initIsotope from '../../../common/initIsotope';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  useLayoutEffect(() => {
    const galleryElement = document.querySelector('.gallery');
    if (galleryElement) {
      initIsotope('gallery');
    }
  }, []);

  useLayoutEffect(() => {
    document.querySelector('.gallery').classList.add('force-reapply');
    initIsotope('gallery');
  }, []);

  return (
    <section className="work-minimal section-padding sub-bg">
      <div className="container-xxl">
        <div className="gallery row stand-marg">
          {data.map((item, i) => (
            <div key={i} className={`col-lg-6 col-md-12 items ${item.subTitle}`}>
              <div className="item mt-40">
                <div className="img">
                  <img style={{ width: '100%' }} src={item.img} alt={item.title} />
                  <div className="cont d-flex align-items-center">
                    <div style={{ width: "100%" }}>
                      <h5 className="fz-22" style={{ textAlign: 'center', marginTop: '5px' }}>
                        {item.title}
                      </h5>
                      <div style={{ textAlign: 'center', marginTop: '6%' }}>
                        <h5>Services Provided</h5>
                      </div>

                      {/* Dynamically render services */}
                      <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                        {item.services.map((service, index) => (
                          <p key={index} style={{ marginTop: '5px' }}>
                            {service}
                          </p>
                        ))}
                      </div>

                      {/* Timeline */}
                      <div style={{ display: 'flex', justifyContent: "space-evenly", marginTop: '6%' }}>
                        <div>
                          <h5>Location</h5>
                          <p>{item.location}</p>
                        </div>
                        <div>
                          <h5>Timeline</h5>
                          <p>{item.duration}</p>
                        </div>

                        <div>
                          <h5>Resources</h5>
                          <p>{item.resources}</p>
                        </div>
                      </div>

                      {/* Resources */}
                      <div style={{ textAlign: 'center', marginTop: '15px' }}>

                      </div>
                    </div>
                    <div style={{ marginTop: '3%' }} >
                      <Link to={item.link} className="ti-arrow-top-right"></Link>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

