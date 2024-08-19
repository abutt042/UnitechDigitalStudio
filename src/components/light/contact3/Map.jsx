import React from 'react';

function Map() {
  return (
    <div className="google-map">
      <iframe
        id="gmap_canvas"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.3216991441773!2d74.16511257477872!3d31.37769205417883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ff236d7e1051%3A0x64d99dcf829ed3aa!2sHashim%20Center!5e0!3m2!1sen!2s!4v1720694891567!5m2!1sen!2s"
      ></iframe>
    </div>
  );
}

export default Map;
