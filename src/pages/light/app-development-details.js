import { Helmet } from 'react-helmet';
import Footer from '../../components/light/modern-agency/Footer';
import Lines from '../../components/light/common/Lines';
import ProgressScroll from '../../components/light/common/ProgressScroll';
import Cursor from '../../components/light/common/cusor';
import LoadingScreen from '../../components/light/common/loader';
import Navbar from '../../components/light/modern-startup/Navbar';
import Testimonials from '../../components/light/modern-agency/Testimonials';
import Header from '../../components/light/services-details/Header';
import Services from '../../components/light/services-details/Services';
import Process from '../../components/light/services-details/Process';
import Services2 from '../../components/light/modern-agency/Services';
import FAQS from '../../components/light/services-details/FAQS';
import logo from '../../favicon.ico';

export default function LPageServicesDetails() {
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
        <script src="/light/assets/js/smoother-script.js"></script>
      </Helmet>
      <body>
         
        <Cursor />
        <ProgressScroll />
        <Lines />
        <div id="smooth-wrapper">
          <Navbar />
          <div id="smooth-content">
            <main className="main-bg">
              <Header 
                 heading={"App Development"}
                 subheading={" App development details "}
              />
              <Services 
               description={"If you need to develop an app with custom functions, visit our company, Unitech Digital Studio is a top software house in Pakistan we will study your case personally. Your mobile application in the Google Play and AppStore markets. Tell us your idea. We design and develop native mobile apps for iOS and Android platforms, custom programming of apps for companies available in the official app stores: App Store and Google Play. We manage all phases of development from the initial design and architecture phase, followed by the development and testing phases, ensuring the quality of the software through rigorous and strict control processes."}
               />
              <Process />
              <Testimonials />
             ß {/* <Services2 /> */}
              <FAQS />
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
