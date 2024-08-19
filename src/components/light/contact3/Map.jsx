import React from 'react';

function Map() {
  return (
    <div className="google-map">
      <iframe
        id="gmap_canvas"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.3700626777527!2d0.06848538156034147!3d51.56144914449578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a68b712e06c1%3A0xbbcbec05899c9a40!2s9%20Thorold%20Rd%2C%20Ilford%20IG1%204JF%2C%20UK!5e0!3m2!1sen!2s!4v1724074937274!5m2!1sen!2s"
      ></iframe>
    </div>
  );
}

export default Map;
