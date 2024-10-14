import { FeatureSection } from "components/FeatureSection";
import { HeroSection } from "components/HeroSection";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="bg-custom-gradient">
      <HeroSection />
      <FeatureSection />
    </div>
  );
};

export default HomePage;
