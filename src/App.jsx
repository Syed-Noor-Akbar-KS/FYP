import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Router from './Router/Router'
import Dataprovider from './Components/ContextAPI/Dataprovider'

function App() {


  return (
    <>
    {/* <h1> Hello</h1> */}
  <Dataprovider>
    <Navbar/>
  <Router/>
   <Footer/>
   </Dataprovider>
    </>
  )
}

export default App
