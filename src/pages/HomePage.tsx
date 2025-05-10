import React from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import PromoBanner from '../components/PromoBanner/PromoBanner';
import VideoSection from '../components/VideoSection/VideoSection';



const HomePage: React.FC = () => {
  return (
    <main >
      <Hero/>
      <Features/>
      <VideoSection/>
      <PromoBanner/>
     
      
      
      
    </main>
  );
}

export default HomePage;