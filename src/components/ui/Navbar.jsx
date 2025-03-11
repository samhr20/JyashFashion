import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiDark, CiLight } from "react-icons/ci";
import { BsCart4 } from "react-icons/bs";
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import useTheme from '../../contexts/ThemeContext';

const Navbar = () => {
  const { themeMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={'fixed w-full z-50 dark:bg-gray-900 dark:text-white bg-white text-gray-900 shadow-lg md:px-10'}>
      <div className="container mx-auto flex justify-between items-center p-4">
        
        <Link to={'/'} className="text-2xl font-bold ">
          Jyash Fashion
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-blue-500 transition-colors">Products</Link>
          </li>
          <li>
            <Link to="/aboutus" className="hover:text-blue-500 transition-colors">About</Link>
          </li>
          <li>
            <Link to="/contactus" className="hover:text-blue-500 transition-colors">Contact</Link>
          </li>
        </ul>

        <div className="flex items-center gap-6">
          <Link to="/cart" className="relative ">
            <BsCart4 className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1.5 py-0.5">{0}</span>
          </Link>
          <button onClick={toggleTheme} className="cursor-pointer transition-colors focus:outline-none">
            {themeMode === 'light' ? <CiDark className="text-2xl" /> : <CiLight className="text-2xl" />}
          </button>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <RxCross1 size={25} /> : <RxHamburgerMenu size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-16 left-0 w-full h-screen bg-white dark:bg-gray-900 transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="flex flex-col items-center py-8 gap-6 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Products</Link>
          </li>
          <li>
            <Link to="/aboutus" className="hover:text-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/contactus" className="hover:text-blue-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;