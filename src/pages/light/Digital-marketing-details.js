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
                 heading={"Digital Marketing"}
                 subheading={" Digital marketing details "}
              />
                    <Services 
              description={"Digital marketing encompasses a wide range of online strategies and tactics used to promote products or services through digital channels. It includes activities such as search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content marketing, and email campaigns. By leveraging these tools, businesses can effectively reach their target audience, increase brand awareness, drive traffic to their websites, and generate leads. Digital marketing enables precise targeting, measurable results, and real-time engagement, making it an essential component of any modern business strategy."}
              icon1= {'fa fa-mobile'}
              subheading1= {'Social Media Marketing'}
              subdescription1 = {"SMM involves creating and sharing content on social media platforms like Facebook, Instagram, and Twitter to engage with your audience and build brand awareness. Effective social media strategies can drive traffic, foster community engagement, and promote brand loyalty."}
              image1 = {"/light/assets/imgs/intro/DigitalMarketing.png"}
              icon2= {'fa fa-mobile'}
              subheading2 = {'Content Marketing'}
              subdescription2 = {"Content marketing focuses on creating and distributing valuable, relevant content to attract and engage your target audience. This includes blog posts, infographics, videos, and eBooks, designed to inform and provide solutions to your audience’s needs."}
              image2 = {"/light/assets/imgs/intro/DigitalMarketing2.png" }
             

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
