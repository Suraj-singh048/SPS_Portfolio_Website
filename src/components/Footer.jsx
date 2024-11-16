import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-gray-300 py-10 mt-1 px-20" id="contact">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-4 gap-10">
        {/* Logo and Copyright */}
        <div className="sm:col-span-1 flex flex-col items-center sm:items-start">
          <div className="mb-4">
            {/* Replace this with an actual logo */}
            <a href="#">Suraj Singh</a>
          </div>
          <p className="font-bold text-lg">© 2024 Suraj Singh</p>
          <p className="font-bold text-lg">All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div className="sm:col-span-1 text-center sm:text-left">
          <h3 className="font-extrabold text-xl mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-white font-bold text-lg">Home</a></li>
            <li className="mb-2"><a href="#about" className="hover:text-white font-bold text-lg">About</a></li>
            <li className="mb-2"><a href="#about" className="hover:text-white font-bold text-lg">Services</a></li>
            <li><a href="#" className="hover:text-white font-bold text-lg">Portfolio</a></li>
          </ul>
        </div>

        {/* Explore More */}
        <div className="sm:col-span-1 text-center sm:text-left">
          <h3 className="font-extrabold text-xl mb-4">Explore More</h3>
          <ul>
            <li className="mb-2"><a href="#contact" className="hover:text-white font-bold text-lg">Contact</a></li>
            <li className="mb-2"><a href="#Experience" className="hover:text-white font-bold text-lg">Experiences</a></li>
            <li className="mb-2"><a href="#blog" className="hover:text-white font-bold text-lg">Blog</a></li>
            <li><a href="#Certificates" className="hover:text-white font-bold text-lg">Certifications</a></li>
          </ul>
        </div>

        {/* Connect With Me */}
        <div className="sm:col-span-1 text-center sm:text-left">
          <h3 className="font-extrabold text-xl mb-4">Connect With Me</h3>
          <ul className="flex flex-col items-center sm:items-start gap-3">
            <li>
              <a href="https://www.linkedin.com/in/suraj-singh-093a6822a/" className="flex items-center gap-3 hover:text-white font-bold text-lg">
                <FaLinkedin className="text-2xl" /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/Suraj-singh048" className="flex items-center gap-3 hover:text-white font-bold text-lg">
                <FaGithub className="text-2xl" /> GitHub
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/mr_suraj_singh_000/profilecard/?igsh=cDM4bmIzZWNnOWg5" className="flex items-center gap-3 hover:text-white font-bold text-lg">
                <FaInstagram className="text-2xl" /> Instagram
              </a>
            </li>
            <li>
              <a href="mailto:surajpratapsingh9798@gmail.com" className="flex items-center gap-3 hover:text-white font-bold text-lg">
                <FaEnvelope className="text-2xl" /> Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
