import { Helmet } from 'react-helmet';
import Lines from '../../components/light/common/Lines';
import ProgressScroll from '../../components/light/common/ProgressScroll';
import Cursor from '../../components/light/common/cusor';
import LoadingScreen from '../../components/light/common/loader';
import Services from '../../components/light/modern-agency/Services';
import Header from '../../components/light/modern-startup/Header';
import Navbar from '../../components/light/modern-startup/Navbar';
import About from '../../components/light/modern-startup/About';
import Marquee from '../../components/light/modern-startup/Marquee';
import Portfolio from '../../components/light/modern-startup/Portfolio';
import Testimonials from '../../components/light/modern-agency/Testimonials';
import Clients from '../../components/light/modern-startup/Clients';
import Contact from '../../components/light/contact3/Contact';
import Footer from '../../components/light/modern-agency/Footer';
import logo from '../../favicon.ico';
export default function LHomeStartupOnePage() {
  
  return (
    <>
      <link rel="icon" href={logo} />
      <link rel="shortcut icon" href={logo} />
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
        <LoadingScreen />
        <Cursor />
        <ProgressScroll />
        <Lines />
        <div id="smooth-wrapper">
          <Navbar />
          <div id="smooth-content">
            <main className="main-bg o-hidden">
              <Header />
              <Services />
              <Clients />
              <About />
              <Marquee />
              <Portfolio />
              {/* <Skills /> */}
              <Testimonials />
              {/* <Blog /> */}
              <Contact />         
                 </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
