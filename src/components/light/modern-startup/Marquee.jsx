import React from 'react';

function Marquee() {const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px'
};

const imgStyle = {
  width: '100px', // Fixed width for all images
  height: 'auto',
  margin: '0 10px' // Equal spacing between images
};

return (
  <div className='container' style={containerStyle}>
    <img
      src="/light/assets/imgs/clients/clutch-3.png"
      alt="Clucth"
      style={imgStyle}
    />
    <img
      src="/light/assets/imgs/clients/google.png"
      alt="Google"
      style={imgStyle}
    />
    <img
      src="/light/assets/imgs/clients/trustpilot.png"
      alt="TrustPilot"
      style={imgStyle}
    />
    <img
      src="/light/assets/imgs/clients/themanifest.png"
      alt="Themanifest"
      style={imgStyle}
    />
    <img
      src="/light/assets/imgs/clients/shopify.png"
      alt="Shopyfyc"
      style={imgStyle}
    />
  </div>
);
}

export default Marquee;
