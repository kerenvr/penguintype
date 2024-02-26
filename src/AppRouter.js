import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Homepage from './Homepage/Homepage.js'
import Typingpage from './Typingpage/Typingpage.js'

function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>

            <Route path ="/home" element={<Homepage />}/>

            <Route path ="/practice-tests" element={<Typingpage />}/>


        </Routes>
    
    </BrowserRouter>
  )
}

export default AppRouter