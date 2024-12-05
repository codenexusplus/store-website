// components/Header.tsx
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa'; // Importing the icons

const Header: React.FC = () => {
  return (
    <>
      {/* Black Header Section */}
      <header className="bg-black text-white py-3">
        <div className="container mx-auto max-w-screen-xl flex items-center justify-between">
          {/* Summer Sale Message with Shop Now Underlined */}
          <div className="flex items-center justify-center space-x-4 w-full">
            <span className="text-sm font-semibold">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            </span>
            <span className="font-bold text-lg underline cursor-pointer">
              Shop Now
            </span>
          </div>

          {/* Language Selector (English ^) on the Right */}
          <div className="flex items-center space-x-4">
            <select
              className="bg-transparent text-white font-medium outline-none"
              defaultValue="English"
            >
              <option value="English">English</option>
              <option value="Spanish">Español</option>
              <option value="French">Français</option>
            </select>
          </div>
        </div>
      </header>

      {/* Second Section (Navigation and Search Bar) */}
      <div className="bg-white py-2 shadow-md">
        <div className="container mx-auto flex items-center justify-between h-[38px] max-w-[1170px]">
          {/* Navigation Links and Search Bar Container */}
          <div className="flex items-center justify-center w-full space-x-8">
            {/* Navigation Links */}
            <nav className="flex space-x-6">
              <a href="#" className="text-lg font-semibold text-gray-700 hover:text-blue-600">
                Exclusive
              </a>
              <a href="#" className="text-lg font-semibold text-gray-700 hover:text-blue-600">
                Home
              </a>
              <a href="#" className="text-lg font-semibold text-gray-700 hover:text-blue-600">
                Contact
              </a>
              <a href="#" className="text-lg font-semibold text-gray-700 hover:text-blue-600">
                About
              </a>
              <a href="#" className="text-lg font-semibold text-gray-700 hover:text-blue-600">
                Sign Up
              </a>
            </nav>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Icons on the Right (Heart and Cart) */}
          <div className="flex space-x-6 items-center">
            {/* Heart Icon */}
            <FaHeart className="text-xl text-gray-600 hover:text-red-600 cursor-pointer" />

            {/* Cart Icon */}
            <FaShoppingCart className="text-xl text-gray-600 hover:text-green-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};
// components/Sidebar.js
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-5">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <ul className="space-y-4">
        <li>
          <Link href="/womens-fashion">
            <a className="hover:text-gray-400">Woman’s Fashion</a>
          </Link>
        </li>
        <li>
          <Link href="/mens-fashion">
            <a className="hover:text-gray-400">Men’s Fashion</a>
          </Link>
        </li>
        <li>
          <Link href="/electronics">
            <a className="hover:text-gray-400">Electronics</a>
          </Link>
        </li>
        <li>
          <Link href="/home-lifestyle">
            <a className="hover:text-gray-400">Home & Lifestyle</a>
          </Link>
        </li>
        <li>
          <Link href="/medicine">
            <a className="hover:text-gray-400">Medicine</a>
          </Link>
        </li>
        <li>
          <Link href="/sports-outdoor">
            <a className="hover:text-gray-400">Sports & Outdoor</a>
          </Link>
        </li>
        <li>
          <Link href="/babies-toys">
            <a className="hover:text-gray-400">Baby’s & Toys</a>
          </Link>
        </li>
        <li>
          <Link href="/groceries-pets">
            <a className="hover:text-gray-400">Groceries & Pets</a>
          </Link>
        </li>
        <li>
          <Link href="/health-beauty">
            <a className="hover:text-gray-400">Health & Beauty</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

;


export default Header;