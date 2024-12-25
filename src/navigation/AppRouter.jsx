import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Services from '../pages/Services';
import Blogs from '../pages/Blogs';


const AppRouter = () => {
  return (
    <Router>
        <div>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/blogs' element={<Blogs />}/>
            </Routes>
        </div>
    </Router>
  )
}

export default AppRouter