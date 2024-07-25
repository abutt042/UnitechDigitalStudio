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
                heading={"Lead Generation"}
                subheading={" Lead generation details "}
              />
              <Services
                description={"Lead generation marketing is the strategic process of attracting and converting prospective customers into leads. By deploying targeted strategies such as content marketing, SEO optimization, social media engagement, email campaigns, and paid advertising, businesses can effectively capture and nurture potential customers. This approach not only increases brand visibility and customer engagement but also drives sustainable growth by generating qualified leads that are more likely to convert into loyal customers."}
                icon1={'fa fa-mobile'}
                subheading1={'Content Marketing'}
                subdescription1={"Engage your audience with valuable content that educates, informs, and inspires. Through blogs, eBooks, and informative videos, we help you attract and convert prospects into leads."}
                image1={"/light/assets/imgs/intro/mern.png"}
                icon2={'fa fa-mobile'}
                subheading2={'SEO Optimization'}
                subdescription2={"Enhance your online visibility and attract organic traffic through strategic SEO practices. By optimizing your website and content, we ensure your business ranks higher in search engine results, driving qualified leads."}
                image2={"/light/assets/imgs/intro/mean.png"}
                icon3={'fa fa-mobile'}
                subheading3={'Paid Advertising (PPC)'}
                subdescription3={'Reach your ideal customers instantly through paid advertising campaigns. With strategic ad placements on Google, Bing, and social media channels, we drive targeted traffic to your website and capture high-quality leads.'}
                image3={'/light/assets/imgs/intro/shopify.png'}

              />                 <Process />
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
