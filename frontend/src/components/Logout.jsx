import{ useContext } from 'react'
import axios from 'axios'
import  { useNavigate } from 'react-router-dom'
import { UserContext } from "./UserContext";


const Logout = () => {
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext);

  const logout = async () => {
    try {
      await axios.delete('http://localhost:5000/logout', {withCredentials: true})
      setUser('')
    } catch (error) {
      return false
    }
    navigate("/")
  }
  logout()

  return null
}

export default Logout
