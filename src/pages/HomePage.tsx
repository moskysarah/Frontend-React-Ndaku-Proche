import React from 'react';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Treatments from '../components/Treatments/Treatments';
import Testimonials from '../components/Testimonials/Testimonials';
import VideoSection from '../components/VideoSections/VideoSections';
import Features from '../components/Features/Features';
import Shop from '../components/Shop/Shop';
import InstagramFeed from '../components/InstagramFeed/InstagramFeed';

import BookingForm from '../components/BookingForm/BookingForm';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero/>
      <Services/>
      <Treatments />
      <Testimonials />
      <VideoSection/>
      <Features />
      <Shop/>
      <InstagramFeed />
    
      <BookingForm />
    </main>
  );
}

export default HomePage;