import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiDark, CiLight } from 'react-icons/ci';
import { BsCart4 } from 'react-icons/bs';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import useTheme from '../../contexts/ThemeContext';
import useCart from '../../contexts/CartContext';

const Navbar = () => {
  const { themeMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {cart} = useCart()

  return (
    <nav className="fixed w-full z-50 text-black dark:text-white bg-gradient-to-l from-[#F2F0F1] to-[#E0E7FF] dark:from-[#1E1E1E] dark:to-[#2C2C2C]  shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4 md:px-10">
        <Link
          to={'/'}
          className="text-2xl font-bold"
        >
          Jyash Fashion
        </Link>

        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contactus"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-6">
          <Link
            to="/cart"
            className="relative hover:text-blue-500 transition-colors duration-300"
          >
            <BsCart4 className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1.5 py-0.5">
              {cart.length}
            </span>
          </Link>

          <button
            onClick={toggleTheme}
            className="cursor-pointer hover:text-blue-500 transition-colors duration-300 focus:outline-none"
          >
            {themeMode === 'light' ? (
              <CiDark className="text-2xl" />
            ) : (
              <CiLight className="text-2xl" />
            )}
          </button>

          <button
            className="md:hidden focus:outline-none hover:text-blue-500 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <RxCross1 size={25} /> : <RxHamburgerMenu size={25} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed top-16 left-0 w-full h-screen text-black dark:text-white bg-gradient-to-l from-[#F2F0F1] to-[#E0E7FF] dark:from-[#1E1E1E] dark:to-[#2C2C2C] transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="flex flex-col items-center py-8 gap-6 text-lg font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-blue-500 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="hover:text-blue-500 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              className="hover:text-blue-500 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contactus"
              className="hover:text-blue-500 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;