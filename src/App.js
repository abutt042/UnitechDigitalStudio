import './App.css';
import { BrowserRouter as Router, Route, Routes, useHistory, useLocation  } from 'react-router-dom';


import LPortfolioMetro from './pages/light/portfolio-metro';
import LBlogClassic from './pages/light/blog-classic';
import LBlogDetails from './pages/light/blog-details';
import LBlogList from './pages/light/blog-list';
import LBlogList2 from './pages/light/blog-list2';
import LHomeAsymmetricPortfolio from './pages/light/home-asymmetric-portfolio';
import LHomeCreativeAgency from './pages/light/home-creative-agency';
import LHomeCreativePortfolio from './pages/light/home-creative-portfolio';
import LHomeDigitalAgency from './pages/light/home-digital-agency';
import LHomeFreelancer from './pages/light/home-freelancer';
import LHomeMain from './pages/light/home-main';
import LHomeMinimalPortfolio from './pages/light/home-minimal-portfolio';
import LHomeModernAgency from './pages/light/home-modern-agency';
import LHomePersonalVcard from './pages/light/home-personal-vcard';
import LHomeStartupOnePage from './pages/light/home-startup-onepage';
import LPageAbout from './pages/light/page-about';
import LPageAbout2 from './pages/light/page-about2';
import LPageAbout3 from './pages/light/page-about3';
import LPageContact from './pages/light/page-contact';
import LPageContact2 from './pages/light/page-contact2';
import LPageContact3 from './pages/light/page-contact3';
import LPageError404 from './pages/light/page-error404';
import LPageFAQS from './pages/light/page-FAQS';
import LPageServices from './pages/light/page-services';
import LPageServicesDetails from './pages/light/page-services-details';
import LPageServices2 from './pages/light/page-services2';
import LPageTeam from './pages/light/page-team';
import LPageTeamSingle from './pages/light/page-team-single';
import LPortfolioCaptionCursor from './pages/light/portfolio-caption-cursor';
import LPortfolioGallery from './pages/light/portfolio-gallery';
import LPortfolioMasonry from './pages/light/portfolio-masonry';
import LPortfolioOutline from './pages/light/portfolio-outline';
import LPortfolioParallax from './pages/light/portfolio-parallax';
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
import { useEffect } from 'react';
import EmpowerCare from './pages/light/empowercare';
import WeStack from './pages/light/westack';
import UnitedEstates from './pages/light/unitedestates';
import BareBeauty from './pages/light/BareBeauty';


function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  return (
    <Router>
            <ScrollToTop />
      <Routes>
        <Route path="/" element={<LHomeStartupOnePage />} />
        <Route path="/light/blog-classic" element={<LBlogClassic />} />
        <Route path="/light/blog-details" element={<LBlogDetails />} />
        <Route path="/light/blog-list" element={<LBlogList />} />
        <Route path="/light/blog-list2" element={<LBlogList2 />} />
        <Route
          path="/light/home-asymmetric-portfolio"
          element={<LHomeAsymmetricPortfolio />}
        />
        <Route
          path="/light/home-creative-agency"
          element={<LHomeCreativeAgency />}
        />
        <Route
          path="/light/home-creative-portfolio"
          element={<LHomeCreativePortfolio />}
        />
        <Route
          path="/light/home-digital-agency"
          element={<LHomeDigitalAgency />}
        />
        <Route path="/light/home-freelancer" element={<LHomeFreelancer />} />
        <Route path="/light/home-main" element={<LHomeMain />} />
        <Route
          path="/light/home-minimal-portfolio"
          element={<LHomeMinimalPortfolio />}
        />
        <Route
          path="/light/home-modern-agency"
          element={<LHomeModernAgency />}
        />
        <Route
          path="/light/home-personal-vcard"
          element={<LHomePersonalVcard />}
        />
        <Route
          path="/light/home-startup-onepage"
          element={<LHomeStartupOnePage />}
        />
        <Route path="/light/page-about" element={<LPageAbout />} />
        <Route path="/light/page-about2" element={<LPageAbout2 />} />
        <Route path="/light/page-about3" element={<LPageAbout3 />} />
        <Route path="/light/page-contact" element={<LPageContact />} />
        <Route path="/light/page-contact2" element={<LPageContact2 />} />
        <Route path="/light/page-contact3" element={<LPageContact3 />} />
        <Route path="/light/page-error404" element={<LPageError404 />} />
        <Route path="/light/page-FAQS" element={<LPageFAQS />} />
        <Route path="/light/page-services" element={<LPageServices />} />
        <Route
          path="/light/page-services-details"
          element={<LPageServicesDetails />}
        />
        <Route path="/light/page-services2" element={<LPageServices2 />} />
        <Route path="/light/page-team" element={<LPageTeam />} />
        <Route path="/light/page-team-single" element={<LPageTeamSingle />} />
        <Route
          path="/light/portfolio-caption-cursor"
          element={<LPortfolioCaptionCursor />}
        />
        <Route
          path="/light/portfolio-gallery"
          element={<LPortfolioGallery />}
        />
        <Route
          path="/light/portfolio-masonry"
          element={<LPortfolioMasonry />}
        />
        <Route path="/light/portfolio-metro" element={<LPortfolioMetro />} />
        <Route
          path="/light/portfolio-outline"
          element={<LPortfolioOutline />}
        />
        <Route
          path="/light/portfolio-parallax"
          element={<LPortfolioParallax />}
        />
        <Route path="/light/portfolio-sticky" element={<LPortfolioSticky />} />
        <Route path="/light/portfolio-sticky/empowercare" element={<EmpowerCare/>} />
        <Route path="/light/portfolio-sticky/westack" element={<WeStack />} />
        <Route path="/light/portfolio-sticky/unitedestates" element={<UnitedEstates />} />
        <Route path="/light/portfolio-sticky/barebeauty" element={<BareBeauty />} />
        <Route path="/light/project3" element={<LProject3 />} />
        <Route path="/light/project6" element={<LProject6 />} />
        <Route
          path="/light/showcase-carousel"
          element={<LShowcaseCarousel />}
        />
        <Route
          path="/light/showcase-fullscreen"
          element={<LShowcaseFullScreen />}
        />
        <Route
          path="/light/showcase-half-slider"
          element={<LShowcaseHalfSlider />}
        />
        <Route
          path="/light/showcase-interactive-center"
          element={<LShowcaseInteractiveCenter />}
        />
        <Route
          path="/light/showcase-interactive-full"
          element={<LShowcaseInteractiveFull />}
        />
        <Route
          path="/light/showcase-interactive-vertical"
          element={<LShowcaseInteractiveVertical />}
        />
      </Routes>
    </Router>
  );
}

export default App;
