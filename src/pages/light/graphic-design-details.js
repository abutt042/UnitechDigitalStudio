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
import Services2 from '../../components/light/services-details/Services2';
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
                 heading={"Graphic Design"}
                 subheading={" Graphic Design details "}
              />
 <Services
                description={"Graphic design is the art and practice of planning and projecting ideas and experiences with visual and textual content. It involves creativity and technical skills to communicate messages through imagery, typography, color, and layout. From branding and marketing materials to digital interfaces and print publications, graphic design plays a crucial role in shaping how audiences perceive and interact with visual information. At its core, graphic design aims to captivate, inform, and inspire, ensuring that every design element serves a purpose in conveying a compelling visual narrative."}
                icon1={'fa fa-mobile'}
                subheading1={'Branding Design'}
                subdescription1={"Branding design focuses on creating visual identities that represent a company's values, mission, and personality. It includes designing logos, color schemes, typography, and brand guidelines to ensure consistency across all communication channels."}
                image1={"/light/assets/imgs/intro/mern.png"}
                icon2={'fa fa-mobile'}
                subheading2={'Web Design'}
                subdescription2={"Web design encompasses designing interfaces and user experiences (UI/UX) for websites and web applications. It involves creating layouts, navigation elements, graphics, and interactive features that enhance user engagement and functionality."}
                image2={"/light/assets/imgs/intro/mean.png"}
                icon3={'fa fa-mobile'}
                subheading3={'Advertising Design'}
                subdescription3={'Advertising design focuses on creating visually appealing and persuasive advertisements across various media channels, including print, digital, outdoor, and broadcast. It involves understanding target audiences and effectively communicating messages through compelling visuals.'}
                image3={'/light/assets/imgs/intro/shopify.png'}
                icon4={'fa fa-mobile'}
                subheading4={'Illustration and Infographic Design:'}
                subdescription4={'Illustration and infographic design involve creating visual representations of concepts, data, or stories through illustrations, icons, charts, and diagrams. It aims to simplify complex information and make it more understandable and engaging for the audience.'}
                image4={'/light/assets/imgs/intro/shopify.png'}
              />                <Process />
              <Testimonials />
              {/* <Services2 /> */}
              <FAQS />
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
