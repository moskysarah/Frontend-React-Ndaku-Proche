import React from "react";
import AboutHero from "../components/AllSectionAbout/AboutHero";
import AboutSection from "../components/AllSectionAbout/AboutSection";
import MissionValues from "../components/AllSectionAbout/MissionValues";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#F8F6F4] text-[#4A2501]">
      <AboutHero />
      <AboutSection />
      <MissionValues />
    </div>
  );
};

export default AboutPage;
