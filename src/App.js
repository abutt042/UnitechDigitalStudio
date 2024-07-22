import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';


import LBlogClassic from './pages/light/blog-classic';
import LBlogDetails from './pages/light/blog-details';
import LBlogList from './pages/light/blog-list';
import LBlogList2 from './pages/light/blog-list2';

import LHomeStartupOnePage from './pages/light/home-startup-onepage';
import LPageAbout from './pages/light/page-about';

import LPageContact3 from './pages/light/page-contact3';
import LPageError404 from './pages/light/page-error404';
import LPageFAQS from './pages/light/page-FAQS';
import LPageServices from './pages/light/page-services';
import LWebServicesDetails from './pages/light/web-services-details';
import LMarketingDetails from './pages/light/Digital-marketing-details';
import LAppServicesDetails from './pages/light/app-development-details';
import LUiServicesDetails from './pages/light/ui-ux-details';
import LSeoServicesDetails from './pages/light/seo-details';
import LEmailServicesDetails from './pages/light/email-marketing-details';
import LLeadServicesDetails from './pages/light/lead-generation-details';
import LGraphicServicesDetails from './pages/light/graphic-design-details';
import LPageTeam from './pages/light/page-team';

import LPortfolioSticky from './pages/light/portfolio-sticky';
import LProject1 from './pages/light/project1';
import LProject2 from './pages/light/project2';
import LProject3 from './pages/light/project3';
import LProject4 from './pages/light/project4';
import LProject5 from './pages/light/project5';
import LProject6 from './pages/light/project6';
import LShowcaseCarousel from './pages/light/showcase-carousel';
import LShowcaseFullScreen from './pages/light/showcase-fullscreen';
import LShowcaseHalfSlider from './pages/light/showcase-half-slider';
import LShowcaseInteractiveCenter from './pages/light/showcase-interactive-center';
import LShowcaseInteractiveFull from './pages/light/showcase-interactive-full';
import LShowcaseInteractiveVertical from './pages/light/showcase-interactive-vertical';
import { useEffect, useState } from 'react';
import EmpowerCare from './pages/light/empowercare';
import WeStack from './pages/light/westack';
import UnitedEstates from './pages/light/unitedestates';
import BareBeauty from './pages/light/BareBeauty';
import LoadingSpinner from './components/light/LoadingSpinner/LoadingSpinner';
import Portfolio from './components/light/modern-startup/Portfolio';
import LPrivacyPolicy from './pages/light/privacy-policy';
import LTerms from './pages/light/Terms';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000); // Set to 5 seconds

    return () => clearTimeout(timer);
  }, []);
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <>
      {loading ? <LoadingSpinner /> :
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<LHomeStartupOnePage />} />
            <Route path="/light/blog-details" element={<LBlogDetails />} />
            <Route path="/light/blog-list" element={<LBlogList />} />
            <Route path="/blog" element={<LBlogList2 />} />
            <Route
              path="/light/home-startup-onepage"
              element={<LHomeStartupOnePage />}
            />
            <Route path="about" element={<LPageAbout />} />
            <Route path="/contact" element={<LPageContact3 />} />
            <Route path="/light/page-error404" element={<LPageError404 />} />
            <Route path="/FAQS" element={<LPageFAQS />} />
            <Route path="/services" element={<LPageServices />} />
            <Route
              path="/services/web-services-details"
              element={<LWebServicesDetails />}
            />
            <Route
              path="/services/Digital-marketing-details"
              element={<LMarketingDetails />}
            />
            <Route
              path="/services/app-development-details"
              element={<LAppServicesDetails />}
            />

            <Route
              path="/services/seo-details"
              element={<LAppServicesDetails />}
            />


            <Route
              path="/services/ui-ux-details"
              element={<LSeoServicesDetails />}
            />

            <Route
              path="/services/email-marketing-details"
              element={<LEmailServicesDetails />}
            />

            <Route
              path="/services/lead-generation-details"
              element={<LLeadServicesDetails />}
            />

            <Route
              path="/services/graphic-design-details"
              element={<LGraphicServicesDetails />}
            />

            <Route path="/team" element={<LPageTeam />} />




            <Route path="/portfolio" element={<LPortfolioSticky />} />
            <Route path="/portfolio/empowercare" element={<EmpowerCare />} />
            <Route path="/portfolio/westack" element={<WeStack />} />
            <Route path="/portfolio/unitedestates" element={<UnitedEstates />} />
            <Route path="/portfolio/barebeauty" element={<BareBeauty />} />
            <Route path="/light/project3" element={<LProject3 />} />
            <Route path="/light/project6" element={<LProject6 />} />





            <Route
              path="/privacy-policy"
              element={<LPrivacyPolicy />} />
            <Route
              path="/Terms"
              element={<LTerms />} />
          </Routes>
        </Router>
      }

    </>
  );
}

export default App;
