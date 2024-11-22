import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Lines from '../../components/light/common/Lines';
import ProgressScroll from '../../components/light/common/ProgressScroll';
import Cursor from '../../components/light/common/cusor';
import LoadingScreen from '../../components/light/common/loader';
import Header from '../../components/light/showcase-half-slider/Header';
import logo from '../../favicon.ico';
import Navbar from '../../components/light/modern-startup/Navbar';
import Footer from '../../components/light/modern-agency/Footer';

export default function LShowcaseHalfSlider() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/light/assets/js/scripts.js';
    script.async = true;

    // Append the script to the body or head
    document.body.appendChild(script);

    // Cleanup to avoid duplicate script loading
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Unitech Digital Studio</title>
        <link rel="icon" href={logo} />
        <link rel="shortcut icon" href={logo} />
        <link
          rel="stylesheet"
          type="text/css"
          href="/light/assets/css/plugins.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/light/assets/css/style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/light/assets/css/satoshi.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght..200;300;400;500;600;700&display=swap"
        />
      </Helmet>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <Navbar />
      <Header />
    </>
  );
}
