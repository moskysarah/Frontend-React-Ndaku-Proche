import React from 'react';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Testimonials from '../components/Testimonials/Testimonials';
import VideoSection from '../components/VideoSections/VideoSections';
import Shop from '../components/Shop/Shop';
import InstagramFeed from '../components/InstagramFeed/InstagramFeed';


const HomePage: React.FC = () => {
  return (
    <main>
      <Hero/>
      <Services/>
      <VideoSection/>
      <Testimonials />
      <Shop/>
      <InstagramFeed />
    </main>
  );
}

export default HomePage;