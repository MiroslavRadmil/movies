import { Outlet } from "react-router-dom";
import Foot from "../components/foot"
import Navbar from "../components/navbar"

import React from 'react'

const SharedLayout = () => {
  return <>
  <Navbar />
  <Outlet />
  <Foot />
  
  
  </>
}

export default SharedLayout
