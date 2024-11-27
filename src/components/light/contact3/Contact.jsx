import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';


function Contact() {
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const notify = (success) => {
    toast.dismiss(); // Dismiss any existing toasts
    toast[success ? 'success' : 'error'](
        success ? 'Thanks for contacting me.' : 'Error sending message.'
    );
};
  const sendEmail = (e) => {
    e.preventDefault();
setLoading(true)
    emailjs.send('service_yb3qrif', 'template_5110eqa', formData, 'iUvB38z2e-NjXXa8V')
      .then((result) => {
        setLoading(false);
        seterror(false);
       
        notify(true);
      }, )
      .catch((error) => {
        setLoading(false);
        seterror(true);
       
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contact section-padding"
      style={{
        backgroundImage: 'url(/light/assets/imgs/background/contactbg.png)',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat'
      }}>
      <div className="container">
        <div className="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="col-lg-6">
            <div className="full-width">
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Let&apos;s Chat</h6>
                <h3 className="text-u ls1">
                  Send a <span className="fw-200">message</span>
                </h3>
              </div>
              <form  className="form2" onSubmit={sendEmail}>
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
                        value={formData.name} 
                        onChange={handleChange} 
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
                        value={formData.email} 
                        onChange={handleChange} 
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
                        value={formData.subject} 
                        onChange={handleChange} 
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
                        value={formData.message} 
                        onChange={handleChange} 
                      ></textarea>
                    </div>
                    <div className="mt-30">
                    
                      <button type="submit" className="butn butn-full butn-bord" disabled={loading}>
                            {loading ? 'Loading...' : 'Submit'}
                        </button>
                        <Toaster position="bottom-center" duration={7000} reverseOrder ={false} />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="sec-head info-box full-width md-mb80">
              <div className="phone fz-30 fw-600 underline main-color">
                <a href="tel:+447506239325">+44-7506-239325</a>
              </div>
              <div className="morinfo mt-50 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Address</h6>
               
                <p>9 Thorold Road, Ilford London IG1 4HG - Sandra Davidson United Kingdom</p>
                <p>Hashim Center ,Behria Town ,Sector (D),AA Block,Lahore</p>

              </div>
              <div className="morinfo mt-30 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Email</h6>
                <p>info@unitechdigitalstudio.com</p>
              </div>

              <div className="social-icon-circle mt-50" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
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
