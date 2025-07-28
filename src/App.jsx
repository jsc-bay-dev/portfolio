import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Contact from './components/Contact'
import About from './components/About'
import Blog from './components/Blog'
import Projects from './components/Projects'
import Credentials from './components/Credentials'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <About></About>
      <Credentials></Credentials>
      <Projects></Projects>
      <Blog></Blog>
      <Contact></Contact>
    </>
  )
}

export default App
