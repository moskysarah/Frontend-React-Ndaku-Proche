import React from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import OffersSection from '../components/OffersSection/OfferSection';
import PromoBanner from '../components/PromoBanner/PromoBanner';
import IconsSection from '../components/IconsSection/IconsSection';


const HomePage: React.FC = () => {
  return (
    <main>
      <Hero/>
      <Features/>
      <OffersSection/>
      <PromoBanner/>
      <IconsSection/>
      
      
      
    </main>
  );
}

export default HomePage;