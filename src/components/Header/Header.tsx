import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Icons/Cart';
import Social from '../Icons/SocialMedia';
const Header: React.FC = () => {
  return (
    <header>
      <div className="bg-[#6B0606] text-white text-center py-2 px-4">
        <p className="text-sm">ONLY THIS MONTH 20% DISCOUNT ON ALL SERVICES</p>
      </div>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/Social" className="text-2xl font-serif"><Social /></Link>
        <div className="flex items-center space-x-6">
          
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-sm">Accueil</Link>
            <Link to="/services" className="text-sm">Services</Link>
            <Link to="/" className="p-2">
                <img src="/photo pretty glam/logo pretty glam.png" 
                    alt="logo du site" 
                    className="h-12 w-12  rounded-full  shadow-md" 
                  />
            
            </Link>

            
            <Link to="/about" className="text-sm">A propos</Link>
            <Link to="/contact" className="text-sm">Contact</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="p-2"><Cart /></Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;