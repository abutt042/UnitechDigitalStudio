import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import LBlogDetails from "./pages/light/blog-details";
import LBlogList from "./pages/light/blog-list";
import LBlogList2 from "./pages/light/blog-list2";
import LHomeStartupOnePage from "./pages/light/home-startup-onepage";
import LPageAbout from "./pages/light/page-about";
import LPageContact3 from "./pages/light/page-contact3";
import LPageError404 from "./pages/light/page-error404";
import LPageFAQS from "./pages/light/page-FAQS";
import LPageServices from "./pages/light/page-services";
import LWebServicesDetails from "./pages/light/web-services-details";
import LMarketingDetails from "./pages/light/Digital-marketing-details";
import LAppServicesDetails from "./pages/light/app-development-details";
import LSeoServicesDetails from "./pages/light/seo-details";
import LEmailServicesDetails from "./pages/light/email-marketing-details";
import LLeadServicesDetails from "./pages/light/lead-generation-details";
import LGraphicServicesDetails from "./pages/light/graphic-design-details";
import LUiServicesDetails from "./pages/light/ui-ux-details";
import LPageTeam from "./pages/light/page-team";
import LPortfolioSticky from "./pages/light/portfolio-sticky";
import LShowcaseInteractiveCenter from "./pages/light/showcase-half-slider";

import { useEffect, useState } from "react";
import EmpowerCare from "./pages/light/empowercare";
import WeStack from "./pages/light/westack";
import UnitedEstates from "./pages/light/unitedestates";
import BareBeauty from "./pages/light/BareBeauty";
import LoadingSpinner from "./components/light/LoadingSpinner/LoadingSpinner";
import LPrivacyPolicy from "./pages/light/privacy-policy";
import LTerms from "./pages/light/Terms";
import Itgenics from "./pages/light/Itgenics";
import Coretal from "./pages/light/coretal";
import Beastmodesoccer from "./pages/light/beastmodesoccer";

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
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<LHomeStartupOnePage />} />
            <Route path="/blog-details/:id" element={<LBlogDetails />} />
            <Route path="/light/blog-list" element={<LBlogList />} />
            <Route path="/blog" element={<LBlogList2 />} />
            <Route
              path="/light/home-startup-onepage"
              element={<LHomeStartupOnePage />}
            />
            <Route path="/about" element={<LPageAbout />} />
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
              element={<LSeoServicesDetails />}
            />

            <Route
              path="/services/ui-ux-details"
              element={<LUiServicesDetails />}
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

            <Route path="/portfolio" element={<LPortfolioSticky/>} />
            <Route path="/portfolio/empowercare" element={<EmpowerCare />} />
            <Route path="/portfolio/westack" element={<WeStack />} />
            <Route
              path="/portfolio/unitedestates"
              element={<UnitedEstates />}
            />
            <Route path="/portfolio/barebeauty" element={<BareBeauty />} />
            <Route path="/portfolio/itgenics" element={<Itgenics/>} />

            <Route path="/portfolio/coretal" element={<Coretal />} />

            <Route path="/portfolio/beastmodesoccer" element={<Beastmodesoccer/>} />

          

            <Route path="/privacy-policy" element={<LPrivacyPolicy />} />
            <Route path="/Terms" element={<LTerms />} />
            <Route path="/*" element={<LPageError404 />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
