import React from 'react';
import SocialMedia from '../Icons/SocialMedia';
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#DFBFA8] py-12">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h2 className="font-imperial text-3xl text-[#6B0606]">Pretty Glam</h2>
        </div>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Est lorem sagittis sed feugiat elementum. Viverra nulla amet a ultrices massa dui.
          Tortor est purus morbi vitae arcu suspendisse amet.
        </p>
        <div className="mx-auto  space-x-4 item-center">
          <SocialMedia/>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;