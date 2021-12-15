import React, { useState, useContext } from 'react'
import axios from 'axios'
import  { useNavigate } from 'react-router-dom'
import { UserContext } from "./UserContext";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:5000/login', {email, password}, { withCredentials: true })
      setUser(res.data.email)
      setErrorMessage('')
      navigate("/")
    } catch (error) {
      setErrorMessage('Invalid login attempt')
    }    
  }

  return (
    <div className='container login'>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <input type="submit" value="Login" />
        { errorMessage && <p className='error'>{ errorMessage }</p> }
      </form>
    </div>
  )
}

export default Login
