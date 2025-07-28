import React from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, shopping cart, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/jsc-bay-dev/ecommerce-platform",
      thumbnail: "🛒"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Firebase.",
      technologies: ["React", "Firebase", "Material-UI", "WebSocket"],
      liveUrl: "https://example-taskmanager.com",
      githubUrl: "https://github.com/jsc-bay-dev/task-manager",
      thumbnail: "📋"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "An interactive weather dashboard that displays current conditions, forecasts, and weather maps. Integrates with multiple weather APIs for accurate data.",
      technologies: ["React", "OpenWeatherMap API", "Chart.js", "CSS3"],
      liveUrl: "https://example-weather.com",
      githubUrl: "https://github.com/jsc-bay-dev/weather-dashboard",
      thumbnail: "🌤️"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 bg-white">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Projects
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Here are some of my recent projects showcasing different technologies and skills.
          Click on the thumbnails to view live demos or visit the GitHub repositories.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div key={project.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden group hover:scale-105">
            
            {/* Thumbnail */}
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block relative overflow-hidden"
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center text-6xl cursor-pointer relative">
                <span className="relative z-10">{project.thumbnail}</span>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Live Demo →
                  </span>
                </div>
              </div>
            </a>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Live Demo
                </a>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-colors"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects