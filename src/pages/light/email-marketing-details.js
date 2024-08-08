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
                heading={"Email Marketing"}
                subheading={" Email Marketing details "}
              />
              <Services
                description={"Email marketing is a powerful digital strategy that enables businesses to reach and engage with their audience directly through personalized email communications. By delivering relevant content, promotions, and updates straight to subscribers' inboxes, email marketing fosters customer relationships, drives conversions, and builds brand loyalty. With targeted campaigns such as promotional offers, newsletters, and personalized messages, businesses can effectively nurture leads, increase sales, and achieve marketing goals efficiently."}
                icon1={'fa fa-mobile'}
                subheading1={'Transactional Emails'}
                subdescription1={"Transactional emails are automated messages sent to individual recipients based on specific actions they've taken on your website or app. Examples include order confirmations, password resets, and shipping notifications. These emails are essential for providing timely and relevant information to users."}
                image1={"/light/assets/imgs/intro/email.png"}
                icon2={'fa fa-mobile'}
                subheading2={'Promotional Emails'}
                subdescription2={"Promotional emails are designed to promote a product, service, or special offer to a targeted audience. They often include discounts, new product announcements, or seasonal promotions. Effective promotional emails focus on engaging content and compelling calls-to-action to drive conversions."}
                image2={"/light/assets/imgs/intro/promotional.png"}
                icon3={'fa fa-mobile'}
                subheading3={'Newsletter Emails'}
                subdescription3={'Newsletter emails provide subscribers with regular updates, news, and valuable content related to your industry or brand. They aim to build long-term relationships with subscribers by offering insights, tips, and exclusive content that keeps them informed and engaged.'}
                image3={'/light/assets/imgs/intro/newsletter.png'}

              />              <Process />
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
