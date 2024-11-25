import { FaShoppingCart, FaSearch } from 'react-icons/fa';

const Icons = () => {
  return (
    <div className="flex space-x-4">
      <a href="#">
        <FaShoppingCart className="w-5 h-5" />
      </a>
      <a href="#">
        <FaSearch className="w-5 h-5" />
      </a>
    </div>
  );
};

export default Icons;
