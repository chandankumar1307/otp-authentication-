import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import Details from './Details';

const Home = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<App />} />
                <Route path="/details" element={<Details />} />
            </Routes>
        </Router>


    )
}

export default Home