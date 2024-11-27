'use client';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=0.2');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=1'
    );

    return () => tl.kill();
  }, []);

  const [fontSize, setFontSize] = useState('78px');

  useEffect(() => {
    const updateFontSize = () => {
      if (window.innerWidth <= 768) {
        setFontSize('32px');
      } else if (window.innerWidth <= 480) {
        setFontSize('26px');
      } else {
        setFontSize('78px');
      }
    };

    updateFontSize();
    window.addEventListener('resize', updateFontSize);

    return () => window.removeEventListener('resize', updateFontSize);
  }, []);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiry: '',
  });

  const notify = (success) => {
    toast.dismiss();
    toast[success ? 'success' : 'error'](
      success ? 'Thanks for contacting us.' : 'Error sending message.'
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    emailjs
      .send('service_yb3qrif', 'template_ue3ymy3', formData, 'iUvB38z2e-NjXXa8V')
      .then(() => {
        setLoading(false);
        notify(true);
        setFormData({
          name: '',
          email: '',
          inquiry: '',
        });
      })
      .catch((error) => {
        setLoading(false);
        console.error('Email failed to send. Error:', error);
        notify(false);
      });
  };

  return (
    <div className="header startup-header">
      <div
        className="valign bg-video"
        style={{
          position: 'relative',
          color: 'white',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -2,
          }}
        >
          <source src="/light/assets/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Semi-transparent Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.3)', // Adjust opacity for better visibility
            zIndex: -1,
          }}
        ></div>

        <div
          className="container pt-40"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '80px',
            flexWrap: 'wrap',
            textAlign: 'center',
          }}
        >
          <div className="caption col-lg-12">
            <div
              className="lg-text fw-600"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
              }}
            >
              <div className="text" style={{ marginBottom: '20px' }}>
                <div>
                  <span
                    style={{
                      color: 'white',
                      fontSize,
                      textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)', // Add shadow for better contrast
                    }}
                  >
                    We are a <br />
                    Development{' '}
                    <span style={{ color: '#007aff', textShadow: 'none' }}>
                      Agency
                    </span>
                  </span>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '18px',
                      color: 'white',
                      textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)', // Add shadow for smaller text
                    }}
                  >
                    Elevate your brand with our customized solutions. From
                    dynamic websites to effective marketing strategies, we bring
                    your vision to life. Contact us today to start your digital
                    journey!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
