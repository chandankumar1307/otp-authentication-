import React from 'react'
import './App.css'

const Details = () => {
    <div className="container">
        <h2>Register</h2>
        <input className="itext" type="text" placeholder="First Name" required />
        <input className="itext" type="text" placeholder="Last Name" required />
        <input className="itext" type="email" placeholder="Email" required />
        <p className="gender"> Gender</p>
        <input name="gender" className="iradio" type="radio" />Male
        <input name="gender" className="iradio" type="radio" />Female
        <button className="submit">Submit</button>

    </div>
}

export default Details