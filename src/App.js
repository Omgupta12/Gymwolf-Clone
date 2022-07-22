import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import HomePage from './Pages/Home/HomePage'


import AllRoutes from './Routes/AllRoutes'

const App = () => {
  return (
    <>
<Navbar/>
    <AllRoutes/>
      <Footer />
    </>
  )
}

export default App