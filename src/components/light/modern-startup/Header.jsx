'use client';
import React, { useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';


function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=0.2'); // Reduced delay for faster start
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=1' // Synchronize with the first animation
    );

    // Cleanup function
    return () => tl.kill();
  }, []);
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiry: '',
  });

  const notify = (success) => {
    toast.dismiss(); // Dismiss any existing toasts
    toast[success ? 'success' : 'error'](
        success ? 'Thanks for contacting Us.' : 'Error sending message.'
    );
};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

setLoading(true)
    // Send email using EmailJS
    emailjs.send('service_yb3qrif', 'template_ue3ymy3', formData, 'iUvB38z2e-NjXXa8V')
      .then((response) => {
        setLoading(false);
        seterror(false);
       
        notify(true);
        // Optionally, clear the form fields
        setFormData({
          name: '',
          email: '',
          inquiry: '',
        });
      })
      .catch((error) => {
        console.error('Email failed to send. Error:', error);
      });
  };
  return (
    <div className="header startup-header">
      <div
        className="valign bg-img"
        style={{
          backgroundImage: 'url(/light/assets/imgs/background/1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
        }}
      >
        <div className="container pt-40" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '80px', flexWrap: 'wrap' }}>
          <div className="caption col-lg-6">
            <div className="lg-text fw-600" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
              <div className="text" style={{ marginBottom: '20px' }}>
                <div>
                  <span style={{ color: 'black', fontSize: '50px' }}>
                    We are a <br />
                    Web Design <span style={{ color: '#007aff' }}>Agency</span>
                  </span>
                </div>
                <div>
                  <p>Elevate your brand with our customized solutions. From dynamic websites to effective marketing strategies, we bring your vision to life. Contact us today to start your digital journey!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form col-lg-5" style={{ backgroundColor: 'white', textAlign: 'center', padding: '42px 30px 51px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)' }}>
            <h4 style={{ color: '#333', marginBottom: '10px' }}>Book appointment</h4>
            <p style={{ color: '#666', marginBottom: '20px' }}>It's our pleasure to have a chance to cooperate.</p>
            <form onSubmit={handleSubmit} aria-label="Contact form" noValidate>
              <div style={{ marginBottom: '25px' }}>
                <input
                  size="40"
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', color: '#333', backgroundColor: '#f5f5f5' }}
                  placeholder="Name *"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={{ marginBottom: '25px' }}>
                <input
                  size="40"
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', color: '#333', backgroundColor: '#f5f5f5' }}
                  placeholder="Email *"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={{ marginBottom: '25px' }}>
                <select
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', color: '#333', backgroundColor: '#f5f5f5' }}
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  required
                >
                  <option value="Your inquiry about">Your inquiry about</option>
                  <option value="General Information Request">General Information Request</option>
                  <option value="Partner Relations">Partner Relations</option>
                  <option value="Careers">Careers</option>
                  <option value="Software Licencing">Software Licencing</option>
                </select>
              </div>
              <div>
              <button type="submit" className="btn-form" disabled={loading}>
                            {loading ? 'Loading...' : 'Submit'}
                        </button>              </div>
                        <Toaster position="bottom-center" duration={7000} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
