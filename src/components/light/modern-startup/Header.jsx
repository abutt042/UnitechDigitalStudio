'use client';
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';

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
        <div className="container pt-40" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="caption">
            <div className="lg-text fw-600" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
              <div className="text" style={{ marginBottom: '20px' }}>
                <span style={{ color: 'black', fontSize: '50px' }}>
                  We are a <br />
                  Web Design <span style={{ color: '#007aff' }}>Agency</span>
                </span>
                <span>
                <p>Elevate your brand with our customized solutions. From dynamic websites to effective marketing strategies, we bring your vision to life. Contact us today to start your digital journey!</p>

                </span>
              </div>
            </div>
            <br/>
            <div>

            </div>
          </div>
          <div className="contact-form" style={{ backgroundColor: '#fff',textAlign:'center', padding: '42px 30px 51px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',width:'100%' }}>
            <h4 style={{ color: '#333', marginBottom: '10px' }}>Book appointment</h4>
            <p style={{ color: '#666', marginBottom: '20px' }}>It's our pleasure to have a chance to cooperate.</p>
            <form action="/homepage/it-agency/#wpcf7-f406-p152-o1" method="post" aria-label="Contact form" noValidate>
              <div style={{ marginBottom: '15px' }}>
                <input
                  size="40"
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', color: '#333',backgroundColor :'#f5f5f5' }}
                  placeholder="Name *"
                  type="text"
                  name="your-name"
                  required
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <input
                  size="40"
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', color: '#333',backgroundColor :'#f5f5f5' }}
                  placeholder="Email *"
                  type="email"
                  name="your-email"
                  required
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <select
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '16px', color: '#333',backgroundColor :'#f5f5f5' }}
                  name="inquiry"
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
                <input
                  style={{ width: '50%', padding: '10px', border: 'none', borderRadius: '4px', fontSize: '16px', color: '#fff', backgroundColor: '#007aff', cursor: 'pointer' }}
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
