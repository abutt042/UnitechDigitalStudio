'use client';
import React, { useEffect, useLayoutEffect, useState } from 'react';
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
  const [fontSize, setFontSize] = useState('78px'); // Default font size

  // Update font size based on screen width
  useEffect(() => {
    const updateFontSize = () => {
      if (window.innerWidth <= 768) {
        setFontSize('32px'); // Font size for smaller screens
      } else if (window.innerWidth <= 480) {
        setFontSize('26px'); // Font size for very small screens
      } else {
        setFontSize('78px'); // Default font size for larger screens
      }
    };

    // Initial call and attach resize event listener
    updateFontSize();
    window.addEventListener('resize', updateFontSize);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', updateFontSize);
  }, []);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiry: '',
  });

  const notify = (success) => {
    toast.dismiss(); // Dismiss any existing toasts
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
    // Send email using EmailJS
    emailjs
      .send('service_yb3qrif', 'template_ue3ymy3', formData, 'iUvB38z2e-NjXXa8V')
      .then(() => {
        setLoading(false);
        notify(true);
        // Optionally, clear the form fields
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
          height: '100vh', // Adjust the height as needed
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
            zIndex: -1, // Ensure the video stays behind other content
            filter: 'blur(0px)', // Apply blur effect
          }}
        >
          <source src="/light/assets/videos/background.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>

        <div
          className="container pt-40"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '80px',
            flexWrap: 'wrap',
            textAlign:'center'
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
                <div >
                  <span style={{ color: 'white', fontSize }}>
                    We are a <br />
                    Development <span style={{ color: '#007aff' }}>Agency</span>
                  </span>
                </div>
                <div>
                  <p style={{ fontSize: '18px', color:'white'}}>
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
