import './App.css';
import React, { useState, useMemo } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import Result from './components/Result'
import Test from './components/Test'
import { UserContext } from './components/UserContext'

function App() {
  const email = window.sessionStorage.getItem("email") || ''

  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  
  return (
    <div className="App">
      <UserContext.Provider value={value}>
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
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="test" element={<Test />} />
          <Route path="result" element={<Result />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
