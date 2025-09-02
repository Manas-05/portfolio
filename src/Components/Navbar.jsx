import React, { useState } from "react";
import pic from "/avatar2.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar after clicking a link
  const handleLinkClick = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 bg-white z-40">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Title */}
          <div className="flex space-x-2 items-center">
            <img src={pic} alt="logo" className="w-16 h-16 rounded-full" />
            <div className="flex flex-col">
              <h1 className="font-semibold text-2xl cursor-pointer">
                <span className="text-black">MANA</span>
                <span className="text-green-600">S</span>
              </h1>
              <p className="text-sm text-gray-600">Software Developer</p>
            </div>
          </div>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6 [&>li]:cursor-pointer [&>li]:text-lg [&>li]:transition-colors [&>li]:duration-200 [&>li:hover]:text-green-600">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* Hamburger (only on small devices) */}
          <div className="md:hidden">
            <button onClick={() => setSidebarOpen(true)}>
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar + Backdrop */}
      <div
        className={`fixed inset-0 z-50 flex transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={() => setSidebarOpen(false)}
        />

        {/* Sidebar (Right-side Drawer) */}
        <div
          className={`absolute top-0 right-0 w-64 h-full bg-white shadow-lg flex flex-col p-4 transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <button
            onClick={() => setSidebarOpen(false)}
            className="self-end mb-4"
          >
            <FaTimes size={24} />
          </button>
          <ul className="space-y-4 [&>li]:cursor-pointer [&>li]:text-lg [&>li:hover]:text-green-600 transition-colors duration-200">
            <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
            <li><a href="#about" onClick={handleLinkClick}>About</a></li>
            <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
            <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
            <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
