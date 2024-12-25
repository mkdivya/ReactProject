import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

import Services from './Services'
import Blogs from './Blogs'
import Carousal from '../components/Carousal'
import Navbar from '../components/Navbar'
import Contact from './Contact'
import About from './About'

const Homepage = () => {
  return (
    <div>
        <Navbar />
        {/* <Carousal /> */}
        <Hero />
        <About />
        <Services/>
        <Blogs />
        <Contact />
        <Footer />
    </div>
  )
}

export default Homepage