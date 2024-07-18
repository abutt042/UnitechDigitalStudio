import React from 'react';
import data from '../../../l-data/services.json';
import { Link } from 'react-router-dom';

function Services() {
  return (

    <section className="services section-padding pb-0"
    >
      <div className="container">
        <div className="sec-head mb-50">
          <h6 className="sub-title main-color mb-25">Our Specialize</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600 text-u ls1" style={{color:'black',textAlign:"center"}}>
            Preparing for your success,<span className="fw-600" style={{color:'#2d67b5'}}>we provide truly prominent IT solutions.</span>
            </h2>
           
          
          </div>
          <div className="ml-auto" style={{textAlign:'end',marginTop:'4%'}}>
              <Link to="/light/page-services" className="go-more">
                <span className="text">View all services</span>
                <span className="icon ti-arrow-top-right"></span>
              </Link>
            </div>
        </div>
        <div className="row">
          {data.map((item, i) => (
            <div key={i} className="col-md-6">
              <div className="item-box2 mb-30">
                <div className="icon mb-40">
                  <img src={item.img} alt="" />
                </div>
                <h5 className="mb-15">{item.title}</h5>
                <p>{item.desc}</p>
                <Link to={item.link} className="rmore">
                  <div className="arrow">
                    <img
                      src="/light/assets/imgs/arrow-right.png"
                      alt=""
                      className="icon-img-20"
                    />
                  </div>
                  <div className="shap-left-top">
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#1a1a1a"
                      ></path>
                    </svg>
                  </div>
                  <div className="shap-right-bottom">
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#1a1a1a"
                      ></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div style={{display:'flex',justifyContent:'space-evenly',marginBottom:'3%'}}>
                <div>
                <input
                  style={{  padding: '10px', border: 'none', borderRadius: '4px', fontSize: '16px', color: '#fff', backgroundColor: '#007aff', cursor: 'pointer' }}
                  type="submit"
                  value="Talk to Consultant"
                />
                </div>
                <div>
                 <input
                  style={{  padding: '10px', border: 'none', borderRadius: '4px', fontSize: '16px', color: '#fff', backgroundColor: '#007aff', cursor: 'pointer' }}
                  type="submit"
                  value="Contact Us Now"
                />
                </div>
              </div>
      </div>
    </section>
  );
}

export default Services;
