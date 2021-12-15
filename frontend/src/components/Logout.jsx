import axios from 'axios'
import  { useNavigate } from 'react-router-dom'


const Logout = ({setUser}) => {
  const navigate = useNavigate()
  
  const logout = async () => {
    try {
      window.sessionStorage.removeItem("email")
      setUser('')
      await axios.delete('http://localhost:5000/logout', {withCredentials: true})
    } catch (error) {
      return false
    }
    navigate("/")
  }
  logout()

  return null
}

export default Logout
