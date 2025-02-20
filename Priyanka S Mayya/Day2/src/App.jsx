import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/WorkFlow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonal";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
      </div>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <FeatureSection />
      </div>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Workflow />
      </div>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Pricing />
      </div>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Testimonials />
      </div>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Footer />
      </div>
    </>
  );
};
export default App;
