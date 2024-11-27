import { Helmet } from 'react-helmet';
import Footer from '../../components/light/modern-agency/Footer';
import Lines from '../../components/light/common/Lines';
import ProgressScroll from '../../components/light/common/ProgressScroll';
import Cursor from '../../components/light/common/cusor';
import Navbar from '../../components/light/modern-startup/Navbar';
import Testimonials from '../../components/light/FAQS/Testimonials';
import Header from '../../components/light/services-details/Header';
import Services from '../../components/light/services-details/Services';
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
                   heading={"SEO"}
                   subheading={" Seo details "}
               />
                  <Services 
              description={"we believe in transforming ideas into digital realities. As a premier web development company, we specialize in creating robust, scalable, and visually stunning websites that drive success for businesses of all sizes."}
              icon1= {'fa fa-mobile'}
              subheading1= {'On-Page Seo'}
              subdescription1 = {"At Unitech Digital Studio, our On-Page SEO services focus on optimizing individual web pages to enhance search engine rankings and attract targeted traffic. We improve elements such as keywords, content quality, title tags, meta descriptions, and internal linking to ensure your site is both search engine and user-friendly. Our goal is to boost your online visibility and drive meaningful engagement with your audience."}
              image1 = {"/light/assets/imgs/intro/seo1.png"}
              icon2= {'fa fa-mobile'}
              subheading2 = {'Off-Page Seo'}
              subdescription2 = {"At Unitech Digital Studio, our Off-Page SEO services are designed to enhance your website's authority and reputation through strategic external efforts. We focus on acquiring high-quality backlinks, promoting your content across social media, and engaging in guest blogging to increase your site’s visibility and trustworthiness. Our goal is to drive more organic traffic and elevate your brand’s online presence."}
              image2 = {"/light/assets/imgs/intro/seo2.png" }
              

             />
              {/* <Process /> */}
              <Testimonials />
              <Services2 />
              <FAQS />
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
