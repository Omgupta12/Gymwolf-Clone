import React from 'react'
import HomePage from '../Pages/Home/HomePage'
import {Routes,Route} from "react-router-dom"
import Sign_in from '../Pages/Sign In/Sign_in'
import Register from '../Pages/Register/Register'
import Feature from '../Pages/Feataure Page/Feature'

const AllRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/signin" element={<Sign_in/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/feature" element={<Feature/>}></Route>
    </Routes>

    </>
  )
}

export default AllRoutes