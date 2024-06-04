import BlogSection from "../Components/ui/landingPage.jsx/BlogSection";
import FeaturesSection from "../Components/ui/landingPage.jsx/FeaturesSection";
import HeroSection from "../Components/ui/landingPage.jsx/HeroSection";
import Feature2 from "../Components/ui/landingPage.jsx/Feature2";
import Feature3Section from "../Components/ui/landingPage.jsx/Feature3Section";
import StoreSection from "../Components/ui/landingPage.jsx/StoreSection";
import Footer from "../Components/ui/general/Footer";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <Feature2 />
      <Feature3Section />
      <StoreSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
