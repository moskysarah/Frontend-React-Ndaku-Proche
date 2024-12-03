import { FaInstagram } from 'react-icons/fa';
import { IoLogoFacebook } from "react-icons/io";

const SocialMedia = () => {
  return (
    <div className="flex space-x-4 item-center">
        <a href="#">
        <IoLogoFacebook className="w-5 h-5" />
      </a>
      <a href="#">
        <FaInstagram className="w-5 h-5 " />
      </a>
    </div>
  );
};

export default SocialMedia;
