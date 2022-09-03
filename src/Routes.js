import React from 'react'
import { Routes, Route } from 'react-router-dom' 

import Home from './pages/Home'
import About from './pages/About'

export default () => {
    return (
        <Routes>
            <Route exact path="/" element={<home />} />
            <Route exact path="/about" element={<About />} />
        </Routes>
    )
}