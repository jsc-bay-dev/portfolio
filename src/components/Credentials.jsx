import React from 'react'

const Credentials = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Skills & Credentials
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Front-End Development */}
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:scale-105">
          <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
            <span className="w-3 h-3 bg-gray-500 rounded-full mr-3"></span>
            Front-End Development
          </h4>
          <ul className="space-y-2">
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">HTML5</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">CSS3</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">JavaScript (ES6+)</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">React.js</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">jQuery</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Bootstrap</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Responsive Web Design</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">AJAX</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">DOM Manipulation</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Local Storage</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Web APIs</li>
          </ul>
        </div>

        {/* Back-End Development */}
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:scale-105">
          <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
            <span className="w-3 h-3 bg-gray-500 rounded-full mr-3"></span>
            Back-End Development
          </h4>
          <ul className="space-y-2">
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Node.js</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Express.js</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">RESTful APIs</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">GraphQL</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Authentication (JWT)</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Session Management</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Server-Side Routing</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Middleware</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Template Engines (Handlebars)</li>
          </ul>
        </div>

        {/* Database Technologies */}
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:scale-105">
          <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
            <span className="w-3 h-3 bg-gray-500 rounded-full mr-3"></span>
            Database Technologies
          </h4>
          <ul className="space-y-2">
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">MySQL</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">MongoDB</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Mongoose ODM</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Sequelize ORM</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Database Design</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">SQL Queries</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">NoSQL Concepts</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">CRUD Operations</li>
          </ul>
        </div>

        {/* Development Tools & Practices */}
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:scale-105">
          <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
            <span className="w-3 h-3 bg-gray-500 rounded-full mr-3"></span>
            Development Tools & Practices
          </h4>
          <ul className="space-y-2">
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Git & GitHub</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Command Line Interface</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">npm & Package Management</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Webpack</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">VS Code</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Chrome DevTools</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Agile Methodology</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Test-Driven Development</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Code Review Process</li>
          </ul>
        </div>

        {/* Deployment & Cloud Services */}
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:scale-105">
          <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
            <span className="w-3 h-3 bg-gray-500 rounded-full mr-3"></span>
            Deployment & Cloud Services
          </h4>
          <ul className="space-y-2">
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Heroku</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Netlify</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">GitHub Pages</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">MongoDB Atlas</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Environment Variables</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Production Builds</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">CI/CD Basics</li>
          </ul>
        </div>

        {/* Additional Technologies */}
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:scale-105">
          <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
            <span className="w-3 h-3 bg-gray-500 rounded-full mr-3"></span>
            Additional Technologies
          </h4>
          <ul className="space-y-2">
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Progressive Web Apps (PWA)</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">State Management (Redux/Context API)</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Third-Party APIs Integration</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Data Visualization</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Performance Optimization</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Accessibility (WCAG)</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Cross-Browser Compatibility</li>
            <li className="px-3 py-2 bg-gray-50 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Mobile-First Design</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Credentials