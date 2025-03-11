import React from 'react'
import Navbar from '../ui/Navbar'
import Footer from '../ui/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default AppLayout