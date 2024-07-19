import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <section className="contact section-padding"
    style={{
      backgroundImage: 'url(/light/assets/imgs/background/contactbg.png)',
      backgroundPosition:'center right',
      backgroundRepeat:'no-repeat'
     
    }}>
      <div className="container">
        <div className="row" style={{display:'flex', justifyContent:'space-between'}}>
         
          <div className="col-lg-6 ">
            <div className="full-width">
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Let&apos;s Chat</h6>
                <h3 className="text-u ls1">
                  Send a <span className="fw-200">message</span>
                </h3>
              </div>
              <form
                id="contact-form"
                className="form2"
                method="post"
                action="contact.php"
              >
                <div className="messages"></div>

                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required="required"
                      ></textarea>
                    </div>
                    <div className="mt-30">
                      <button
                        type="submit"
                        className="butn butn-full butn-bord "
                      >
                        <span className="text">Let&apos;s Talk</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="sec-head info-box full-width md-mb80">
              <div className="phone fz-30 fw-600 underline main-color">
                <a >+(201) 502-4027</a>
                <a >+44-7506-239325</a>

              </div>
              <div className="morinfo mt-50 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Address</h6>
                <p>Hashim Center,Aa Block Sector D Bahria Town, Lahore, Punjab</p>
                <br/>
                <p>9 Thorold Road, Ilford London IG1 4HG - Sandra Davidson United Kingdom</p>
              </div>
              <div className="morinfo mt-30 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Email</h6>
                <p>info@unitechdigitalstudio.com</p>
              </div>

              <div className="social-icon-circle mt-50" style={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
                <Link to="#0">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="https://www.linkedin.com/company/unitech-digital-studios" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </Link>
                
                <Link to="https://www.instagram.com/unitechdigitalstudio" target="_blank">
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
