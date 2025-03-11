import React from 'react';
import { Link } from 'react-router-dom';
import NewsLetter from './NewsLetter';
import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  const footerSections = [
    {
      title: "COMPANY",
      links: [
        { name: "About", path: "/aboutus" },
        { name: "Features", path: "/products" },
        { name: "Works", path: "/" },
        { name: "Career", path: "/" },
      ],
    },
    {
      title: "HELP",
      links: [
        { name: "Customer Support", path: "/" },
        { name: "Delivery Details", path: "/" },
        { name: "Terms & Conditions", path: "/" },
        { name: "Privacy Policy", path: "/" },
      ],
    },
    {
      title: "FAQ",
      links: [
        { name: "Account", path: "/" },
        { name: "Manage Deliveries", path: "/" },
        { name: "Orders", path: "/" },
        { name: "Payment", path: "/" },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        { name: "Free eBook", path: "/" },
        { name: "Development Tutorial", path: "/" },
        { name: "How to blog", path: "/" },
        { name: "YouTube Playlist", path: "/" },
      ],
    },
  ];

  return (
    <div className="bg-[#F2F0F1]  text-black pt-32 md:pt-28 p-8 md:p-5 md:px-10">
      <div className='relative'>
        <NewsLetter />
      </div>
      <div className="md:flex md:items-center">
        {/* Top Section */}
        <div className="space-y-4">
          <h1 className="font-extrabold text-4xl md:text-5xl">
            <Link to="/">Jyash Fashion</Link>
          </h1>
          <p className="text-[14px] text-gray-600 w-[90%] md:w-[70%]">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          {/* Social Media Icons */}
          <div className="flex gap-4  text-gray-700">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={25} fill='black' />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={25} fill='black' />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub size={25} fill='black' />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={25} fill='black' />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-6 mt-6">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-2">{section.title}</h3>
              <ul className="space-y-2 text-gray-600">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col text-gray-500 items-center">
        <hr className="w-[70%] my-4" />
        <h4 className="text-black">JyashFashion, All Rights Reserved</h4>
      </div>
    </div>
  );
};

export default Footer;
