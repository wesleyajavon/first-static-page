import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import NavBar from './NavBar'
import MainContent from './MainContent'
import Header from './Header'
import Footer from './Footer'




function App() {
  return (
    <div className="container-fluid">
      <NavBar/>
      <MainContent/>
      <Footer/>
    </div>

  )

}

export default App

