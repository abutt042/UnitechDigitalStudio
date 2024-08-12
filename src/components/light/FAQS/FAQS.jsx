import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery

function FAQS() {
  useEffect(() => {
    // jQuery code inside useEffect
    $('.accordion').on('click', '.title', function() {
      $(this).next().slideDown();
      $('.accordion-info').not($(this).next()).slideUp();
    });

    $('.accordion').on('click', '.item', function() {
      $(this).addClass('active').siblings().removeClass('active');
    });
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <section className="faqs section-padding position-re">
      <div className="container">
        <div className="column justify-content-center">
          <div className="col-lg-12">
            <div className="sec-head md-mb80">
              <h6 className="sub-title main-color mb-15" style={{textAlign:'center'}}>FAQS</h6>
              <h2 className='mb-20' style={{textAlign:'center',}}>
                Frequently asked questions
              </h2>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="list-serv">
              <div className="accordion bord">
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div className="title">
                    <h6>What services do you offer?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    We provide a comprehensive range of IT support services, including hardware and software troubleshooting, network setup and maintenance, cybersecurity solutions, data backup and recovery, and managed IT services.
                    </p>
                  </div>
                </div>

                <div
                  className="item active mb-15 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="title">
                    <h6>How can I contact your support team?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="mb-30">
                    You can reach our support team via phone, email. Visit our Contact Us page for more details.
                    </p>
                   
                  </div>
                </div>

                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title">
                    <h6>What are your support hours?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    Our support team is available 24/7 to assist you with any IT-related issues.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title">
                    <h6>Do you offer remote support?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    Yes, we provide remote IT support to resolve issues quickly without the need for an on-site visit.
                    </p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title">
                    <h6>What is your response time for support requests?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    Our average response time is within 1 hour, depending on the complexity of the issue and the support plan you have selected.                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line-overlay up opacity-7">
        <svg
          viewBox="0 0 1728 1101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1"
            style={{ strokeDasharray: 3246.53 }}
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default FAQS;
