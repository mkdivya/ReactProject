import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

import Services from './Services'
import Blogs from './Blogs'
import Carousal from '../components/Carousal'
import Navbar from '../components/Navbar'

const Homepage = () => {
  return (
    <div>
        <Navbar />
        {/* <Carousal /> */}
        <Hero />
        <Services/>
        <Blogs />
        <Footer />
    </div>
  )
}

export default Homepage