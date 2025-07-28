import { useState } from 'react'
import Header from './components/Header'
import Contact from './components/Contact'
import About from './components/About'
import Blog from './components/Blog'
import Projects from './components/Projects'
import Credentials from './components/Credentials'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="space-y-16">
        <section id="about" className="bg-white">
          <About />
        </section>
        <section id="credentials" className="bg-gray-50 py-16">
          <Credentials />
        </section>
        <section id="projects" className="bg-white">
          <Projects />
        </section>
        <section id="blog" className="bg-gray-50">
          <Blog />
        </section>
        <section id="contact" className="bg-white">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App
