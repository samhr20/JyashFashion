import React from 'react';
import { Link } from 'react-router-dom';
import NewsLetter from './NewsLetter';
import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const footerSections = [
    {
      title: 'COMPANY',
      links: [
        { name: 'About', path: '/aboutus' },
        { name: 'Features', path: '/products' },
        { name: 'Works', path: '/' },
        { name: 'Career', path: '/' },
      ],
    },
    {
      title: 'HELP',
      links: [
        { name: 'Customer Support', path: '/' },
        { name: 'Delivery Details', path: '/' },
        { name: 'Terms & Conditions', path: '/' },
        { name: 'Privacy Policy', path: '/' },
      ],
    },
    {
      title: 'FAQ',
      links: [
        { name: 'Account', path: '/' },
        { name: 'Manage Deliveries', path: '/' },
        { name: 'Orders', path: '/' },
        { name: 'Payment', path: '/' },
      ],
    },
    {
      title: 'RESOURCES',
      links: [
        { name: 'Free eBook', path: '/' },
        { name: 'Development Tutorial', path: '/' },
        { name: 'How to blog', path: '/' },
        { name: 'YouTube Playlist', path: '/' },
      ],
    },
  ];

  return (
    <div className="text-black dark:text-white bg-gradient-to-r from-[#F2F0F1] to-[#E0E7FF] dark:from-[#1E1E1E] dark:to-[#2C2C2C] pt-32 md:pt-28 p-8 md:p-5 md:px-10">
      <div className="relative">
        <NewsLetter />
      </div>
      <div className="md:flex md:items-start md:justify-between">
        {/* Top Section */}
        <div className="space-y-4 mb-8 md:mb-0">
          <h1 className="font-extrabold text-4xl md:text-5xl">
            <Link to="/">Jyash Fashion</Link>
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 w-[90%] md:w-[70%]">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          {/* Social Media Icons */}
          <div className="flex gap-4 text-gray-700 dark:text-gray-300">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black hover:bg-white rounded-full transition-colors duration-300"
            >
              <FaInstagram size={25} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black hover:bg-white rounded-full transition-colors duration-300"
            >
              <FaFacebook size={25} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black hover:bg-white rounded-full transition-colors duration-300"
            >
              <FaGithub size={25} />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black hover:bg-white rounded-full transition-colors duration-300"
            >
              <FaWhatsapp size={25} />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-6 mt-6 md:mt-0">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-2">{section.title}</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.path}
                      className="hover:text-blue-500 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col items-center mt-8">
        <hr className="w-[70%] my-4 border-gray-300 dark:border-gray-600" />
        <h4 className="text-gray-600 dark:text-gray-300 text-sm">
          JyashFashion, All Rights Reserved
        </h4>
      </div>
    </div>
  );
};

export default Footer;