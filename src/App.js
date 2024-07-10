import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PortfolioMetro from './pages/dark/portfolio-metro';
import BlogClassic from './pages/dark/blog-classic';
import BlogDetails from './pages/dark/blog-details';
import BlogList from './pages/dark/blog-list';
import BlogList2 from './pages/dark/blog-list2';
import HomeAsymmetricPortfolio from './pages/dark/home-asymmetric-portfolio';
import HomeCreativeAgency from './pages/dark/home-creative-agency';
import HomeCreativePortfolio from './pages/dark/home-creative-portfolio';
import HomeDigitalAgency from './pages/dark/home-digital-agency';
import HomeFreelancer from './pages/dark/home-freelancer';
import HomeMain from './pages/dark/home-main';
import HomeMinimalPortfolio from './pages/dark/home-minimal-portfolio';
import HomeModernAgency from './pages/dark/home-modern-agency';
import HomePersonalVcard from './pages/dark/home-personal-vcard';
import HomeStartupOnePage from './pages/dark/home-startup-onepage';
import PageAbout from './pages/dark/page-about';
import PageAbout2 from './pages/dark/page-about2';
import PageAbout3 from './pages/dark/page-about3';
import PageContact from './pages/dark/page-contact';
import PageContact2 from './pages/dark/page-contact2';
import PageContact3 from './pages/dark/page-contact3';
import PageError404 from './pages/dark/page-error404';
import PageFAQS from './pages/dark/page-FAQS';
import PageServices from './pages/dark/page-services';
import PageServicesDetails from './pages/dark/page-services-details';
import PageServices2 from './pages/dark/page-services2';
import PageTeam from './pages/dark/page-team';
import PageTeamSingle from './pages/dark/page-team-single';
import PortfolioCaptionCursor from './pages/dark/portfolio-caption-cursor';
import PortfolioGallery from './pages/dark/portfolio-gallery';
import PortfolioMasonry from './pages/dark/portfolio-masonry';
import PortfolioOutline from './pages/dark/portfolio-outline';
import PortfolioParallax from './pages/dark/portfolio-parallax';
import PortfolioSticky from './pages/dark/portfolio-sticky';
import Project1 from './pages/dark/project1';
import Project2 from './pages/dark/project2';
import Project3 from './pages/dark/project3';
import Project4 from './pages/dark/project4';
import Project5 from './pages/dark/project5';
import Project6 from './pages/dark/project6';
import ShowcaseCarousel from './pages/dark/showcase-carousel';
import ShowcaseFullScreen from './pages/dark/showcase-fullscreen';
import ShowcaseHalfSlider from './pages/dark/showcase-half-slider';
import ShowcaseInteractiveCenter from './pages/dark/showcase-interactive-center';
import ShowcaseInteractiveFull from './pages/dark/showcase-interactive-full';
import ShowcaseInteractiveVertical from './pages/dark/showcase-interactive-vertical';
import Home from './pages';

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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LHomeStartupOnePage />} />
        <Route path="/dark/blog-classic" element={<BlogClassic />} />
        <Route path="/dark/blog-details" element={<BlogDetails />} />
        <Route path="/dark/blog-list" element={<BlogList />} />
        <Route path="/dark/blog-list2" element={<BlogList2 />} />
        <Route
          path="/dark/home-asymmetric-portfolio"
          element={<HomeAsymmetricPortfolio />}
        />
        <Route
          path="/dark/home-creative-agency"
          element={<HomeCreativeAgency />}
        />
        <Route
          path="/dark/home-creative-portfolio"
          element={<HomeCreativePortfolio />}
        />
        <Route
          path="/dark/home-digital-agency"
          element={<HomeDigitalAgency />}
        />
        <Route path="/dark/home-freelancer" element={<HomeFreelancer />} />
        <Route path="/dark/home-main" element={<HomeMain />} />
        <Route
          path="/dark/home-minimal-portfolio"
          element={<HomeMinimalPortfolio />}
        />
        <Route path="/dark/home-modern-agency" element={<HomeModernAgency />} />
        <Route
          path="/dark/home-personal-vcard"
          element={<HomePersonalVcard />}
        />
        <Route
          path="/dark/home-startup-onepage"
          element={<HomeStartupOnePage />}
        />
        <Route path="/dark/page-about" element={<PageAbout />} />
        <Route path="/dark/page-about2" element={<PageAbout2 />} />
        <Route path="/dark/page-about3" element={<PageAbout3 />} />
        <Route path="/dark/page-contact" element={<PageContact />} />
        <Route path="/dark/page-contact2" element={<PageContact2 />} />
        <Route path="/dark/page-contact3" element={<PageContact3 />} />
        <Route path="/dark/page-error404" element={<PageError404 />} />
        <Route path="/dark/page-FAQS" element={<PageFAQS />} />
        <Route path="/dark/page-services" element={<PageServices />} />
        <Route
          path="/dark/page-services-details"
          element={<PageServicesDetails />}
        />
        <Route path="/dark/page-services2" element={<PageServices2 />} />
        <Route path="/dark/page-team" element={<PageTeam />} />
        <Route path="/dark/page-team-single" element={<PageTeamSingle />} />
        <Route
          path="/dark/portfolio-caption-cursor"
          element={<PortfolioCaptionCursor />}
        />
        <Route path="/dark/portfolio-gallery" element={<PortfolioGallery />} />
        <Route path="/dark/portfolio-masonry" element={<PortfolioMasonry />} />
        <Route path="/dark/portfolio-metro" element={<PortfolioMetro />} />
        <Route path="/dark/portfolio-outline" element={<PortfolioOutline />} />
        <Route
          path="/dark/portfolio-parallax"
          element={<PortfolioParallax />}
        />
        <Route path="/dark/portfolio-sticky" element={<PortfolioSticky />} />
        <Route path="/dark/project1" element={<Project1 />} />
        <Route path="/dark/project2" element={<Project2 />} />
        <Route path="/dark/project3" element={<Project3 />} />
        <Route path="/dark/project4" element={<Project4 />} />
        <Route path="/dark/project5" element={<Project5 />} />
        <Route path="/dark/project6" element={<Project6 />} />
        <Route path="/dark/showcase-carousel" element={<ShowcaseCarousel />} />
        <Route
          path="/dark/showcase-fullscreen"
          element={<ShowcaseFullScreen />}
        />
        <Route
          path="/dark/showcase-half-slider"
          element={<ShowcaseHalfSlider />}
        />
        <Route
          path="/dark/showcase-interactive-center"
          element={<ShowcaseInteractiveCenter />}
        />
        <Route
          path="/dark/showcase-interactive-full"
          element={<ShowcaseInteractiveFull />}
        />
        <Route
          path="/dark/showcase-interactive-vertical"
          element={<ShowcaseInteractiveVertical />}
        />

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
