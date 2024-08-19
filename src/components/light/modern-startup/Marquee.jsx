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
      src="https://unitechdigitalstudio.com/wp-content/uploads/2024/05/clutch-3.png"
      alt="Image 1"
      style={imgStyle}
    />
    <img
      src="https://unitechdigitalstudio.com/wp-content/uploads/2024/05/google.png"
      alt="Image 2"
      style={imgStyle}
    />
    <img
      src="https://unitechdigitalstudio.com/wp-content/uploads/2024/05/trustpilot.png"
      alt="Image 3"
      style={imgStyle}
    />
    <img
      src="https://unitechdigitalstudio.com/wp-content/uploads/2024/05/themanifest.png"
      alt="Image 4"
      style={imgStyle}
    />
    <img
      src="https://unitechdigitalstudio.com/wp-content/uploads/2024/05/shopify-1024x171.png"
      alt="Image 5"
      style={imgStyle}
    />
  </div>
);
}

export default Marquee;
