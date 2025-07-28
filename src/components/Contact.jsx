import facebook from '../assets/facebook.svg'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 bg-white">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          I'm always open to discussing new opportunities, or simply having a conversation about technology and interesting projects!
        </p>
      </div>

      {/* Contact Info */}
      <div className="text-center mb-12">
        <div className="inline-flex flex-col sm:flex-row gap-8 sm:gap-12">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-xl">✉️</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
            <a href="mailto:justin@example.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              jsc.bay.dev@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-xl">📍</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
            <span className="text-gray-600">San Francisco, CA</span>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="text-center">
        <ul className="flex justify-center gap-6">
          <li>
            <a 
              href="https://facebook.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-200 hover:scale-110"
            >
              <img src={facebook} alt="Facebook" className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-200 hover:scale-110"
            >
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-200 hover:scale-110"
            >
              <img src={github} alt="GitHub" className="w-6 h-6" />
            </a>
          </li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
       
      </div>
    </div>
  )
}

export default Contact