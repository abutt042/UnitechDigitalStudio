import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation  } from 'react-router-dom';


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
import LPageServicesDetails from './pages/light/page-services-details';
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
import { useEffect } from 'react';

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
          path="/light/home-startup-onepage"
          element={<LHomeStartupOnePage />}
        />
        <Route path="/light/page-about" element={<LPageAbout />} />
     
    
        <Route path="/light/page-contact3" element={<LPageContact3 />} />
        <Route path="/light/page-error404" element={<LPageError404 />} />
        <Route path="/light/page-FAQS" element={<LPageFAQS />} />
        <Route path="/light/page-services" element={<LPageServices />} />
        <Route
          path="/light/page-services-details"
          element={<LPageServicesDetails />}
        />
     
        <Route path="/light/page-team" element={<LPageTeam />} />
       
       
       
        <Route path="/light/portfolio-sticky" element={<LPortfolioSticky />} />
        <Route path="/light/project1" element={<LProject1 />} />
        <Route path="/light/project2" element={<LProject2 />} />
        <Route path="/light/project3" element={<LProject3 />} />
        <Route path="/light/project4" element={<LProject4 />} />
        <Route path="/light/project5" element={<LProject5 />} />
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
