import { FaInstagram } from 'react-icons/fa';
import { IoLogoFacebook } from "react-icons/io";

const Icons = () => {
  return (
    <div className="flex space-x-4">
      <a href="#">
        <FaInstagram className="w-5 h-5" />
      </a>
      <a href="#">
        <IoLogoFacebook className="w-5 h-5" />
      </a>
    </div>
  );
};

export default Icons;
