import React from 'react'
import { Router, Route } from 'react-router-dom'
import App from './App'

const Home = () => {
    return (
        <Router>
            <Route path="/" exact component={App} />
        </Router>


    )
}

export default Home