import { Helmet } from 'react-helmet';
import Footer from '../../components/light/modern-agency/Footer';
import Lines from '../../components/light/common/Lines';
import ProgressScroll from '../../components/light/common/ProgressScroll';
import Cursor from '../../components/light/common/cusor';
import LoadingScreen from '../../components/light/common/loader';
import Navbar from '../../components/light/modern-startup/Navbar';
import Challenge from '../../components/light/project1/Challenge';
import Header from '../../components/light/project1/Header';
import Solution from '../../components/light/project7/Solution';
import Wroks from '../../components/light/project1/Wroks';
import logo from '../../favicon.ico';

export default function Beastmodesoccer() {
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
               name={"Beast Mode Soccer"}
              />
              <Challenge 
              heading={"Beast Mode Soccer"}
              description={"This platform enhances player connectivity and facilitates comprehensive development through accessible, anytime, anywhere training resources.Beast Mode Soccer+ harnesses technology and innovative design to unite soccer players, empowering them to excel and 'Own Your Development' at their convenience."}
              />
              <Wroks id = {'7'} />
              <Solution  />

            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
