import React from 'react';
import { Link } from 'react-router-dom';
import Social from '../Icons/SocialMedia';
const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/20 py-12">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h2 className="font-serif text-2xl text-primary">Beauty Salon</h2>
        </div>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Est lorem sagittis sed feugiat elementum. Viverra nulla amet a ultrices massa dui.
          Tortor est purus morbi vitae arcu suspendisse amet.
        </p>
        <div className="mx-auto  space-x-4">
          <Link to="/Social" className="text-2xl font-serif"><Social /></Link>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;