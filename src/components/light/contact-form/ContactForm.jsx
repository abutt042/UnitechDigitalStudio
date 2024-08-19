import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="wpb_wrapper">
      <div className="tm-contact-form-7-box style-01 group-style-01 tm-animation move-up animate">
        <div className="wpcf7 js" id="wpcf7-f406-p152-o1" lang="en-US" dir="ltr">
          <div className="screen-reader-response">
            <p role="status" aria-live="polite" aria-atomic="true"></p>
            <ul></ul>
          </div>
          <form
            action="/homepage/it-agency/#wpcf7-f406-p152-o1"
            method="post"
            className="wpcf7-form init"
            aria-label="Contact form"
            noValidate
            data-status="init"
          >
            <div style={{ display: 'none' }}>
              <input type="hidden" name="_wpcf7" value="406" />
              <input type="hidden" name="_wpcf7_version" value="5.8" />
              <input type="hidden" name="_wpcf7_locale" value="en_US" />
              <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f406-p152-o1" />
              <input type="hidden" name="_wpcf7_container_post" value="152" />
              <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
            </div>
            <div className="row">
              <div className="col-md-12">
                <h4 className="form-title">Book appointment</h4>
                <p className="form-description">It's our pleasure to have a chance to cooperate.</p>
              </div>
              <div className="col-md-12">
                <div className="form-item">
                  <p>
                    <span className="wpcf7-form-control-wrap" data-name="your-name">
                      <input
                        size="40"
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Name *"
                        type="text"
                        name="your-name"
                      />
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-item">
                  <p>
                    <span className="wpcf7-form-control-wrap" data-name="your-email">
                      <input
                        size="40"
                        className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Email *"
                        type="email"
                        name="your-email"
                      />
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-item">
                  <p>
                    <span className="wpcf7-form-control-wrap" data-name="inquiry">
                      <select className="wpcf7-form-control wpcf7-select" aria-invalid="false" name="inquiry">
                        <option value="Your inquiry about">Your inquiry about</option>
                        <option value="General Information Request">General Information Request</option>
                        <option value="Partner Relations">Partner Relations</option>
                        <option value="Careers">Careers</option>
                        <option value="Software Licencing">Software Licencing</option>
                      </select>
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-submit">
                  <p>
                    <input className="wpcf7-form-control wpcf7-submit has-spinner" type="submit" value="Submit" />
                    <span className="wpcf7-spinner"></span>
                  </p>
                </div>
              </div>
            </div>
            <div className="wpcf7-response-output" aria-hidden="true"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
