import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaTelegramPlane } from "react-icons/fa"; // Import des icônes

const SocialMediaIcons: React.FC = () => {
  const socialLinks = [
    { name: "Facebook", icon: <FaFacebookF />, url: "https://www.facebook.com/pretty_glaminc/" },
    { name: "Twitter", icon: <FaTwitter />, url: "https://www.twitter.com/pretty_glaminc/" },
    { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/pretty_glaminc/" },
    { name: "Telegram", icon: <FaTelegramPlane />, url: "https://www.telegram.com/pretty_glaminc/" },
  ];

  return (
    <div className="flex justify-center space-x-4 mt-6">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="flex items-center justify-center w-7 h-7 rounded-full bg-[#5e1212] hover:bg-[#3c0e0e] transition duration-300"
        >
          <span className="text-[#f5e3dc] text-xl">{social.icon}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
