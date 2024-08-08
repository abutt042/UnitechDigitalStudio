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
               heading={"UI-UX Design"}
               subheading={" UI-UX details "}
               />
                 <Services 
              description={"UI/UX (User Interface/User Experience) design is the art of crafting digital experiences that are intuitive, functional, and delightful for users. UI design focuses on the look and feel of a product, ensuring interfaces are visually appealing and easy to navigate. UX design, on the other hand, centers around enhancing user satisfaction by improving usability, accessibility, and overall interaction experience. Together, UI/UX design harmonizes aesthetics with functionality, creating seamless digital journeys that engage users and drive meaningful interactions."}
              icon1= {'fa fa-mobile'}
              subheading1= {'Interaction Design'}
              subdescription1 = {"Our Interaction Design services prioritize creating engaging and intuitive user interfaces. We meticulously design user flows and interactive elements to ensure a seamless and enjoyable user experience. By focusing on usability and aesthetic appeal, we aim to transform digital products into tools that users love to interact with."}
              image1 = {"/light/assets/imgs/intro/ui.png"}
              icon2= {'fa fa-mobile'}
              subheading2 = {'Visual Design'}
              subdescription2 = {"Our Visual Design services are all about transforming your digital landscape with innovative and compelling aesthetics. We harness the power of color, typography, and imagery to create visually stunning interfaces that reflect your brand's unique identity. Our mission is to craft designs that not only look beautiful but also deliver an unforgettable user experience."}
              image2 = {"/light/assets/imgs/intro/ui2.png" }
              icon3= {'fa fa-mobile'}
              subheading3 = {'Usability Design'}
              subdescription3 = {'Our Usability Design services focus on making your digital products intuitive and effortless to use. We prioritize creating seamless user experiences by simplifying interactions and enhancing functionality. Our approach ensures that every element is designed for maximum ease and efficiency, turning complex tasks into smooth and enjoyable journeys for your users.'}
             image3 ={'/light/assets/imgs/intro/ui3.png'}
             icon4= {'fa fa-mobile'}
             subheading4 = {'Wireframming'}
              subdescription4 = {'Involves creating skeletal structures of the interface, laying out essential elements without detailed design. Wireframes are crucial in planning the layout and functionality of a product, providing a blueprint for development.'}
             image4 ={'/light/assets/imgs/intro/wireframing.png'}
             icon5= {'fa fa-mobile'}
             subheading5 = {'Prototyping'}
              subdescription5 = {"Prototyping involves creating interactive models of a product to simulate user interactions and test functionality before development begins. These prototypes can vary from low-fidelity sketches to high-fidelity designs, allowing for iterative refinement of the user experience."}
             image5={'/light/assets/imgs/intro/prototyping.png'}

             />
              <Process />
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
