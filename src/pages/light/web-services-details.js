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
              heading={"Web Development"}
              subheading={" Web development details "}
               />
                  <Services 
              description={"we believe in transforming ideas into digital realities. As a premier web development company, we specialize in creating robust, scalable, and visually stunning websites that drive success for businesses of all sizes."}
              icon1= {'fa fa-mobile'}
              subheading1= {'Mern Stack Development'}
              subdescription1 = {"Harness the power of the MERN stack (MongoDB, Express.js, React, and Node.js) to build dynamic, high-performance web applications. Our expert developers are adept at leveraging these technologies to deliver seamless, efficient, and scalable solutions tailored to your business needs."}
              image1 = {"/light/assets/imgs/intro/mern.png"}
              icon2= {'fa fa-mobile'}
              subheading2 = {'Mean Stack Development'}
              subdescription2 = {"Utilize the MEAN stack (MongoDB, Express.js, Angular, and Node.js) for building robust and maintainable web applications. Our team excels in creating end-to-end solutions that are both powerful and user-friendly, ensuring a smooth and engaging experience for your users."}
              image2 = {"/light/assets/imgs/intro/mean.png" }
              icon3= {'fa fa-mobile'}
              subheading3 = {'Shopify Development'}
              subdescription3 = {'Empower your e-commerce business with our Shopify development services. From setting up your store to customizing its functionalities, we provide end-to-end solutions that help you maximize your online sales. Our team ensures your Shopify store is attractive, functional, and optimized for conversions.'}
             image3 ={'/light/assets/imgs/intro/shopify.png'}
             icon4= {'fa fa-mobile'}
             subheading4 = {'Wordpress Development'}
              subdescription4 = {'Unitech Digital Studio offers top-notch WordPress development services, creating custom themes and plugins that make your website unique. Whether you need a simple blog or a complex e-commerce site, our WordPress experts ensure your site is user-friendly, SEO-optimized, and easy to manage.'}
             image4 ={'/light/assets/imgs/intro/wordpress.png'}
             icon5= {'fa fa-mobile'}
             subheading5 = {'PHP Laravel Development'}
              subdescription5 = {'Experience the versatility and efficiency of PHP with our Laravel development services. We develop secure, scalable, and high-performing web applications using the Laravel framework, providing custom solutions that cater to your specific business requirements.'}
             image5={'/light/assets/imgs/intro/php.png'}

             />
              {/* <Process /> */}
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
