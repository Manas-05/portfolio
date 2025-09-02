import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Credits */}
        <p className="text-xl text-center md:text-left">
          © {new Date().getFullYear()} Manas Khude. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://github.com/Manas-05"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/manas-khude-a0085a24a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/manas.05_?igsh=MWJ1Nzh3Y3BldDF3Ng=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 text-xl"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
