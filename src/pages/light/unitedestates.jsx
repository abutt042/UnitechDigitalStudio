import { Helmet } from 'react-helmet';
import Footer from '../../components/light/modern-agency/Footer';
import Lines from '../../components/light/common/Lines';
import ProgressScroll from '../../components/light/common/ProgressScroll';
import Cursor from '../../components/light/common/cusor';
import LoadingScreen from '../../components/light/common/loader';
import Navbar from '../../components/light/modern-startup/Navbar';
import Challenge from '../../components/light/project1/Challenge';
import Header from '../../components/light/project1/Header';
import Solution from '../../components/light/project3/Solution';
import Wroks from '../../components/light/project1/Wroks';
import logo from '../../favicon.ico';

export default function UnitedEstates() {
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
        <script src="/light/assets/js/scripts.js"></script>
        
      </Helmet>
      <body>
         <LoadingScreen/>
        <Cursor />
        <ProgressScroll />
        <Lines />
        <div id="smooth-wrapper">
          <Navbar />
          <div id="smooth-content">
            <main className="main-bg">
              <Header
               name={"United Estates"}
               />
              <Challenge
               heading={"United Estates"}
              description={"United Estates project a sophisticated website designed for a real estate and builders company. This project highlights our expertise in creating dynamic and user-friendly digital platforms tailored to the real estate industry, featuring seamless navigation, comprehensive property listings, and interactive tools to enhance user engagement and support the company’s growth"}
               />
              <Wroks id = {'3'} />
              <Solution />
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
