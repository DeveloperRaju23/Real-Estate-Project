
import React from 'react'
import NavBar from '../Share/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Share/Footer'

const Main = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>  
    </div>
  )
}

export default Main