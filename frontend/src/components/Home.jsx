import React, { useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

const Home = () => {

  const [isLoggedIn, setIsLoggdedIn] = useState(false)

  const getSession = async () => {
    try {
      const response = await axios.get('http://localhost:5000', {withCredentials: true})
      setIsLoggdedIn(response.data.loggedin)
    } catch (error) {
      setIsLoggdedIn(false)
    }
  }
  getSession()
  return (
    <div className='container home'>
      <h1>Welcome to the Flying Circus</h1>
      <h2>Here you can practice your English vocabulary and grammar knowledge</h2>
      { !isLoggedIn && <h3>Please <Link to="/login">Log in</Link> to start tests</h3> }
      { isLoggedIn && <h3>Please <Link to="/test">start tests</Link></h3> }
    </div>
  )
}

export default Home
