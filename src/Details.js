import React from 'react'
import { useState } from 'react'

import './App.css'

const Details = () => {

    const [userData, setUserData] = useState({
        userName: '',
        FirstName: '',
        LastName: '',
        Email: '',
    })
    const allData = (e) => {
        e.preventDefault();
        console.log(userData);
    }

    return (<div className="container">
        <h2>Register</h2>
        <input onChange={(e) => {
            setUserData({ ...userData, FirstName: e.target.value })
        }} className="itext" type="text" placeholder="First Name" required />
        <input onChange={(e) => {
            setUserData({ ...userData, LastName: e.target.value })
        }} className="itext" type="text" placeholder="Last Name" required />
        <input onChange={(e) => {
            setUserData({ ...userData, Email: e.target.value })
        }} className="itext" type="email" placeholder="Email" required />


        <button onClick={allData} className="submit">Submit</button>
    </div>)
}

export default Details