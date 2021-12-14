import './App.css';
import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import Result from './components/Result'
import Test from './components/Test'

function App() {
  const email = window.sessionStorage.getItem("email") || ''
  
  return (
    <div className="App">
      <header>
        <nav className='container'>
          <ul>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            { email && <li><Link to="/logout">Logout</Link></li>}
            <li><Link to="/test">Test</Link></li>
            <li><Link to="/result">Result</Link></li>
          </ul>
          <span>{email}</span>  
        </nav> 
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route path="test" element={<Test />} />
        <Route path="result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
