import React from 'react'
import { FaGraduationCap, FaTools, FaAward, FaBullseye } from 'react-icons/fa';

const About = () => {
return (
    <div id="about" className='max-w-screen-2xl container mx-auto px-4 md:px-15 mt-15 mb-4'>
        <h1 className='text-3xl font-bold mb-5 mt-5 flex items-center gap-3'>
            <span role="img" aria-label="waving hand" className="animate-bounce text-yellow-500 text-4xl">👋</span>
            About
        </h1>
        <h1 className='text-xl font-semibold mb-3'>
            Hello, I'm a passionate MERN Stack Developer. With a strong foundation in JavaScript and expertise in frameworks like React, I enjoy creating dynamic and responsive web applications.
        </h1>
            <h1 className='mt-6 mb-6 text-2xl font-bold text-green-800 flex items-center'>
                <FaGraduationCap className='mr-2' /> Education
            </h1>
                                    <p className='text-xl font-bold mb-6'>
                                        I completed my Bachelor of Technology in Computer Science and  from Mumbai University in 2024. During my studies, I gained a strong foundation in programming, algorithms, and software development, which has helped me build a solid technical background.
                                    </p>
        <br />
        
        <hr className="mt-6 border-gray-300" />

        <h1 className='mt-6 text-2xl font-bold mb-6 text-green-800 flex items-center'>
            <FaTools className='mr-2' /> Skills
        </h1>
                                    <p className='text-xl font-bold mb-6'>
                                        My skill set includes JavaScript, React, Node.js, Express, and MongoDB for full-stack development. I am also proficient in HTML, CSS, Python, Java, and SQl, allowing me to work on a wide range of projects and adapt to different technologies as needed.
                                    </p>
        <hr className="mt-6 border-gray-300" />
        <h1 className='mt-6 text-2xl font-bold mb-6 text-green-800 flex items-center'>
            <FaAward className='mr-2' /> Achievements & Awards
        </h1>
        <ul className='text-xl font-bold mb-6 list-disc ml-8'>
            <li>Web Development Bootcamp (2024) -ABIT</li>
            <li>Advance data Analytics course (2024) - Ramniranjan Jhunhunwala College</li>
    </ul>
    <hr className="mt-6 border-gray-300" />
        <h1 className='mt-6 mb-6 text-2xl font-bold text-green-800 flex items-center'>
            <FaBullseye className='mr-2' /> Mission Statement
        </h1>
        <p className='text-xl font-bold mb-6'>
            My mission is to leverage technology to create impactful, user-centric solutions that drive innovation and make a positive difference in people's lives. I strive for continuous learning, collaboration, and excellence in every project I undertake.
        </p>
        <hr className="mt-6 border-gray-300" />
    </div>
)
}

export default About
