import React from 'react'

const About = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 bg-white min-h-screen">
            {/* Header Section */}
            <div className="mb-12">
                <h1 className="name text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Justin Choi
                </h1>
                <p className="title text-xl text-gray-600 mb-4 font-medium">
                    Software Engineer
                </p>
                <p className="location text-sm text-gray-500 mb-8 flex items-center hover:text-gray-700 transition-colors">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    San Francisco, CA
                </p>
                
                {/* Contact Links */}
                <div className="flex flex-wrap gap-3 mb-8">
                    <a href="mailto:justin@example.com" className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email
                    </a>
                    <a href="https://github.com/jsc-bay-dev" className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200 shadow-sm hover:shadow-md">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/justinschoi93" className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200 shadow-sm hover:shadow-md">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                    </a>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                
                {/* Profile Image */}
                <div className="lg:col-span-1 flex justify-center lg:justify-start">
                    <div className="relative group">
                        <div className="w-48 h-48 rounded-full bg-gray-100 border-4 border-white shadow-2xl flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                            <img 
                                src="/api/placeholder/200/200" 
                                className="w-full h-full object-cover rounded-full"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50">
                                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                        </div>
                        {/* Decorative ring */}
                        <div className="absolute -inset-2 rounded-full bg-gray-400 opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                </div>

                {/* About Content */}
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                        About Me
                    </h2>
                    
                    <div className="prose prose-lg text-gray-700 leading-relaxed">
                        <p className="mb-6 text-base leading-7">
                            Software engineering... it's <span className="font-semibold text-gray-900">honest, hard work</span> that plays to my strengths, and it's something I strive to master. I enjoy solving complex problems, collaborating with others, and take pride in contributing to products and services that make a positive impact.
                        </p>
                        
                        <p className="mb-6 text-base leading-7">
                            I also derive a tremendous amount of comfort and joy in the fact that humanity's relationship with technology has had an incredibly <span className="font-semibold text-gray-900">stabilizing effect on economies</span> all around the world, and it's a movement that I am thrilled to be a part of!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About