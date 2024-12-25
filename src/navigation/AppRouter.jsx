import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Services from '../pages/Services';
import Blogs from '../pages/Blogs';
import Contact from '../pages/Contact';
import About from '../pages/About';


const AppRouter = () => {
  return (
    <Router>
        <div>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/blogs' element={<Blogs />}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/About' element={<About/>}/>
            </Routes>
        </div>
    </Router>
  )
}

export default AppRouter