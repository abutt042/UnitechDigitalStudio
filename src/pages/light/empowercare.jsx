import { Helmet } from 'react-helmet';
import Footer from '../../components/light/modern-agency/Footer';
import Lines from '../../components/light/common/Lines';
import ProgressScroll from '../../components/light/common/ProgressScroll';
import Cursor from '../../components/light/common/cusor';
import LoadingScreen from '../../components/light/common/loader';
import Navbar from '../../components/light/modern-startup/Navbar';
import Challenge from '../../components/light/project1/Challenge';
import Header from '../../components/light/project1/Header';
import Next from '../../components/light/project1/Next';
import Solution from '../../components/light/project1/Solution';
import Wroks from '../../components/light/project1/Wroks';
import logo from '../../favicon.ico';

export default function EmpowerCare() {
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
               name={"Empower Care"}
              
               />
              <Challenge 

              heading={"EmpowerCare"}
              description={"Empower Care is a cutting-edge headless CMS project that combines the power of a React frontend with the flexibility of a WordPress backend. This innovative solution allows for seamless content management and dynamic user experiences, leveraging the strengths of both technologies to deliver a high-performance, scalable platform tailored to meet the unique needs of our client."}
              
               />
              <Wroks id = {'1'}/>
              <Solution casestudy = {"Empower Care is an innovative headless CMS project designed for seamless job posting and application management, combining the dynamic capabilities of a React frontend with the robust content management of a WordPress backend. The platform facilitates easy job creation, management, and publication through a user-friendly admin dashboard while providing job seekers with an intuitive interface to browse and apply for jobs. By integrating RESTful APIs, Empower Care ensures smooth data flow between the frontend and backend, allowing for a high-performance, scalable solution that delivers a responsive and consistent user experience across all devices. The project addresses challenges such as API integration, content consistency, and security by implementing optimized RESTful APIs, caching mechanisms, and secure authentication methods. Empower Care exemplifies the power of headless CMS architecture in delivering tailored, scalable, and efficient solutions for modern businesses."} />
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
