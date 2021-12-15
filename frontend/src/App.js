import './App.css';
import React, { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import Result from './components/Result'
import Test from './components/Test'

function App() {
  const email = window.sessionStorage.getItem("email") || ''
  const [user, setUser] = useState(email)
  
  return (
    <div className="App">
      <header>
        <nav className='container'>
          <ul>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/test">Test</Link></li>
            <li><Link to="/result">Result</Link></li>
          </ul>
          { user && (
            <ul>
              <li><span>{user}</span></li>
              <li><Link to="/logout">Logout</Link></li>
            </ul>
          )}
        </nav> 
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login setUser={setUser} />} />
        <Route path="logout" element={<Logout setUser={setUser} />} />
        <Route path="test" element={<Test />} />
        <Route path="result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
