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
<<<<<<< HEAD
      src="/light/assets/imgs/clients/clutch-3.png"
=======
      src="https://unitechdigitalstudio.com/wp-content/uploads/2024/05/clutch-3.png"
>>>>>>> ac0d212597fb7b06f081de15ea6ff44131030444
      alt="Image 1"
      style={imgStyle}
    />
    <img
<<<<<<< HEAD
      src="/light/assets/imgs/clients/google.png"
=======
      src="https://unitechdigitalstudio.com/wp-content/uploads/2024/05/google.png"
>>>>>>> ac0d212597fb7b06f081de15ea6ff44131030444
      alt="Image 2"
      style={imgStyle}
    />
    <img
<<<<<<< HEAD
      src="/light/assets/imgs/clients/shopify.png"
=======
      src="https://unitechdigitalstudio.com/wp-content/uploads/2024/05/trustpilot.png"
>>>>>>> ac0d212597fb7b06f081de15ea6ff44131030444
      alt="Image 3"
      style={imgStyle}
    />
    <img
<<<<<<< HEAD
      src="/light/assets/imgs/clients/themanifest.png"
=======
      src="https://unitechdigitalstudio.com/wp-content/uploads/2024/05/themanifest.png"
>>>>>>> ac0d212597fb7b06f081de15ea6ff44131030444
      alt="Image 4"
      style={imgStyle}
    />
    <img
<<<<<<< HEAD
      src="/light/assets/imgs/clients/trustpilot.png"
=======
      src="https://unitechdigitalstudio.com/wp-content/uploads/2024/05/shopify-1024x171.png"
>>>>>>> ac0d212597fb7b06f081de15ea6ff44131030444
      alt="Image 5"
      style={imgStyle}
    />
  </div>
);
}

export default Marquee;
