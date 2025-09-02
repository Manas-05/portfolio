import React from 'react'
import { FaTwitter, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { ReactTyped } from "react-typed";  
import ProfilePic from "/profile.jpg";

const Home = () => {
  return (
    <>
      <div  id='home' className='max-w-screen-2xl container mx-auto px-4 md:px-17 mt-17 mb-4'>
        <div className='flex flex-col md:flex-row'>
          <div className='md:w-1/2 md:mt-5 mt-8 space-y-4 order-2'>
            <span className='text-2xl font-bold'>Welcome to my portfolio !</span>

            {/* Typing Animation Section */}
            <div className='flex flex-wrap items-center text-2xl md:text-3xl mt-4 font-extrabold'>
              <h1>
                    Hi 👋, I'm a{" "}
                    <span className="text-green-700 font-bold ml-1">
                        <ReactTyped
                        strings={["Developer", "Coder", "Programmer"]}
                        typeSpeed={80}
                        backSpeed={50}
                        loop
                        />
                    </span>
                    </h1>
                        
            </div>

            <br />
            <p className='text-xl md:text-md text-gray-600 text-justify'>
               I’m <span className="font-bold">
                Mana<span className="text-green-600">s</span>
              </span>, a MERN Stack Developer passionate about building full-stack web applications.
              I specialize in working with MongoDB, Express.js, React, and Node.js to create scalable,
              efficient, and user-friendly solutions. From crafting responsive front-end interfaces
              to developing robust back-end APIs, I enjoy bringing complete ideas to life.
              Always curious and eager to learn, I strive to deliver projects that blend functionality with clean design.
            </p>

            {/* Social Media Section */}
            <div>
              <p className="text-lg font-semibold mb-1">Available on</p>
              <div className="flex space-x-4 text-xl"> {/* reduced spacing + smaller size */}
                <a href="https://x.com/Manas_k05?t=9iCn5zGbEDMKAYG2RgX69g&s=09" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                  <FaTwitter />
                </a>
                <a href="https://www.instagram.com/manas.05_?igsh=MWJ1Nzh3Y3BldDF3Ng==" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/manas-khude-a0085a24a" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                  <FaLinkedin />
                </a>
                <a href="https://t.me/Leo_nidas" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500">
                  <FaTelegram />
                </a>
                <a href="https://wa.me/9702700849" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* Working On Section */}
            <div className="mt-4">
              <p className="text-lg font-semibold mb-2">Working On</p>
              <div className="flex space-x-3">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-8 h-8 hover:scale-110 transition-transform duration-300" />
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" alt="Express" className="w-8 h-8 hover:scale-110 transition-transform duration-300" />
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" className="w-8 h-8 hover:scale-110 transition-transform duration-300" />
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-8 h-8 hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
          </div>
          
          {/* Right Content Placeholder */}
          <div className='md:w-1/2 flex justify-center items-center order-1 md:ml-15 md:mt-0 md:order-2'>
            <img 
              src={ProfilePic} 
              alt="Profile" 
              className="w-[425px] h-[425px] object-cover rounded-full shadow-md
              transform transition-transform duration-300 
              hover:scale-105 hover:rotate-3" 
            />
          </div>
        </div>
      </div>

      {/* Thin Line Divider */}
      <hr className="border-t-2 border-gray-300 w-11/12 mx-auto mt-6 mb-6" />
    </>
  )
}

export default Home
