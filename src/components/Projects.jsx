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
    <div className="projects-section" style={{
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333'
      }}>Projects</h1>
      
      <p style={{
        textAlign: 'center',
        fontSize: '1.1rem',
        color: '#666',
        marginBottom: '40px',
        maxWidth: '600px',
        margin: '0 auto 40px auto'
      }}>
        Here are some of my recent projects showcasing different technologies and skills.
        Click on the thumbnails to view live demos or visit the GitHub repositories.
      </p>

      <div className="projects-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '30px',
        marginTop: '30px'
      }}>
        {projects.map(project => (
          <div key={project.id} className="project-card" style={{
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            border: '1px solid #e0e0e0'
          }}>
            {/* Thumbnail as clickable link */}
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div className="project-thumbnail" style={{
                height: '200px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <span style={{ zIndex: 2 }}>{project.thumbnail}</span>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  color: 'white',
                  fontSize: '1.2rem',
                  fontWeight: 'bold'
                }} className="hover-overlay">
                  View Live Demo →
                </div>
              </div>
            </a>

            <div className="project-content" style={{
              padding: '25px'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '12px',
                color: '#333'
              }}>{project.title}</h3>
              
              <p style={{
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '20px',
                fontSize: '0.95rem'
              }}>{project.description}</p>

              <div className="technologies" style={{
                marginBottom: '20px'
              }}>
                <h4 style={{
                  fontSize: '0.9rem',
                  color: '#888',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>Technologies Used:</h4>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px'
                }}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} style={{
                      backgroundColor: '#f0f0f0',
                      color: '#555',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      border: '1px solid #ddd'
                    }}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-links" style={{
                display: 'flex',
                gap: '12px'
              }}>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    backgroundColor: '#007bff',
                    color: 'white',
                    padding: '10px 16px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    textAlign: 'center',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'background-color 0.3s ease'
                  }}
                >
                  Live Demo
                </a>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    backgroundColor: '#333',
                    color: 'white',
                    padding: '10px 16px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    textAlign: 'center',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'background-color 0.3s ease'
                  }}
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