import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDocker,
  FaGithub,
  FaTools,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const Box = ({ children }) => (
  <div className="flex flex-col items-center p-3 sm:p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
    {children}
  </div>
);

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-xl sm:text-2xl font-semibold mb-4 pl-3 border-l-4 border-green-700">
      {title}
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 text-center">
      {children}
    </div>
  </section>
);

const Skills = () => {
  return (
    <div
      id="skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-12 mt-12 mb-8"
    >
      {/* Title */}
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-3 animate-bounce text-left">
        <FaTools className="text-green-800 text-4xl" />
        Skills
      </h1>

      {/* Frontend */}
      <Section title="Frontend">
        <Box>
          <FaReact className="text-blue-500 text-5xl sm:text-6xl mb-2" />
          <p className="text-base sm:text-lg font-semibold">React.js</p>
        </Box>
        <Box>
          <SiJavascript className="text-yellow-500 text-5xl sm:text-6xl mb-2" />
          <p className="text-base sm:text-lg font-semibold">JavaScript</p>
        </Box>
        <Box>
          <SiTailwindcss className="text-cyan-500 text-5xl sm:text-6xl mb-2" />
          <p className="text-base sm:text-lg font-semibold">Tailwind CSS</p>
        </Box>
        <Box>
          <SiHtml5 className="text-orange-600 text-5xl sm:text-6xl mb-2" />
          <p className="text-base sm:text-lg font-semibold">HTML5</p>
        </Box>
        <Box>
          <SiCss3 className="text-blue-600 text-5xl sm:text-6xl mb-2" />
          <p className="text-base sm:text-lg font-semibold">CSS3</p>
        </Box>
      </Section>

      {/* Backend */}
      <Section title="Backend">
        <Box>
          <FaNodeJs className="text-green-700 text-5xl sm:text-6xl mb-2" />
          <p className="text-base sm:text-lg font-semibold">Node.js</p>
        </Box>
        <Box>
          <SiExpress className="text-gray-700 text-5xl sm:text-6xl mb-2" />
          <p className="text-base sm:text-lg font-semibold">Express.js</p>
        </Box>
      </Section>

      {/* Databases */}
      <Section title="Databases">
        <Box>
          <SiMongodb className="text-green-600 text-5xl sm:text-6xl mb-2" />
          <p className="text-base sm:text-lg font-semibold">MongoDB</p>
        </Box>
      </Section>

      {/* Programming Languages */}
      <Section title="Programming Languages">
        <Box>
          <FaPython className="text-yellow-500 text-5xl sm:text-6xl mb-2" />
          <p className="text-base sm:text-lg font-semibold">Python</p>
        </Box>
        <Box>
          <FaJava className="text-red-600 text-5xl sm:text-6xl mb-2" />
          <p className="text-base sm:text-lg font-semibold">Java</p>
        </Box>
      </Section>

      {/* DevOps & Tools */}
      <Section title="DevOps & Tools">
        <Box>
          <FaDocker className="text-blue-600 text-5xl sm:text-6xl mb-2" />
          <p className="text-base sm:text-lg font-semibold">Docker</p>
        </Box>
        <Box>
          <FaGithub className="text-black text-5xl sm:text-6xl mb-2" />
          <p className="text-base sm:text-lg font-semibold">GitHub</p>
        </Box>
      </Section>
      <hr className="border-t-2 border-gray-300 mt-12" />
      
    </div>
  );
};

export default Skills;
