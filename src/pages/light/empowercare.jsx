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
        <script src="/light/assets/js/smoother-script.js"></script>
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
               name={"EmpowerCare"}
               category={"Development"}
               client={"Envato"}
               date={"7 August 2021"}          
               designer={"UiCamp"}  
              
               />
              <Challenge />
              <Wroks id = {'1'}/>
              <Solution />
              <Next prvlink ={'/portfolio/unitedestates'} fwdlink = {'/portfolio/westack'} prvname = {'United Estates'} fwdname = {'We Stack'} />
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
