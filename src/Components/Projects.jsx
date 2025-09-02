import React, { useState } from "react";
import projects from "./projects.json";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const closeModal = () => {
    setSelectedProject(null);
    setSelectedIndex(0);
  };

  const prevImage = () => {
    if (selectedProject) {
      setSelectedIndex(
        (prev) =>
          (prev - 1 + selectedProject.images.length) %
          selectedProject.images.length
      );
    }
  };

  const nextImage = () => {
    if (selectedProject) {
      setSelectedIndex(
        (prev) => (prev + 1) % selectedProject.images.length
      );
    }
  };

  return (
    <div
      id="projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-12 mt-12 mb-8"
    >
      {/* Heading */}
      <h1 className="flex items-center text-3xl font-bold mb-8">
        <span className="text-green-800 mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block w-8 h-8 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7a2 2 0 012-2h3.172a2 2 0 011.414.586l1.828 1.828A2 2 0 0012.828 8H19a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
            />
          </svg>
        </span>
        Projects
      </h1>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white w-full max-w-sm p-5 rounded-2xl shadow-lg hover:shadow-2xl transition border border-gray-300"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>

            {/* Multiple screenshots */}
            <div className="flex gap-2 overflow-x-auto">
              {project.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-40 h-28 object-cover rounded-lg border cursor-pointer hover:scale-105 transition"
                  onClick={() => {
                    setSelectedProject(project);
                    setSelectedIndex(index);
                  }}
                />
              ))}
            </div>

            {/* Links */}
            <div className="mt-4 flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
              >
                GitHub
              </a>

              {/* Show Live Demo for all except project with id = 1 */}
              {project.id !== 1 && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for enlarged image */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
          {/* Cancel Button */}
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-3xl font-bold hover:text-red-400"
          >
            ✕
          </button>

          {/* Image with side scroll buttons */}
          <div className="flex items-center justify-center w-full max-w-5xl px-4">
            {/* Prev button */}
            <button
              onClick={prevImage}
              className="text-white text-4xl font-bold px-4 hover:text-green-400"
            >
              ‹
            </button>

            <img
              src={selectedProject.images[selectedIndex]}
              alt="Enlarged project screenshot"
              className="max-w-full max-h-[85vh] rounded-lg shadow-lg"
            />

            {/* Next button */}
            <button
              onClick={nextImage}
              className="text-white text-4xl font-bold px-4 hover:text-green-400"
            >
              ›
            </button>
          </div>

          {/* Small thumbnails inside modal */}
          <div className="flex gap-2 mt-4 overflow-x-auto max-w-4xl">
            {selectedProject.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumbnail"
                className={`w-24 h-16 object-cover rounded cursor-pointer border ${
                  index === selectedIndex
                    ? "border-green-500"
                    : "border-gray-400"
                }`}
                onClick={() => setSelectedIndex(index)}
              />
            ))}
          </div>
        </div>
      )}

      <hr className="border-t-2 border-gray-300 mt-12" />
    </div>
  );
};

export default Projects;
