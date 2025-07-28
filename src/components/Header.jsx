import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
import linkedin from '../assets/linkedin.svg';
import facebook from '../assets/facebook.svg';
import github from '../assets/github.svg';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a href="" className="flex items-center hover:opacity-80 transition-opacity" aria-label="Home">
          <img src={logo} alt="Logo" className="h-8 w-8" />
        </a>
        
        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
            About Me
          </a>
          <a href="#credentials" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
            Credentials
          </a>
          <a href="#skills" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
            Skills
          </a>
          <a href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
            Projects
          </a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
      </nav>
    </header>
  )
}

export default Header