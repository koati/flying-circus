import React, { useEffect, useState } from 'react'
import axios from 'axios';
import  { useNavigate } from 'react-router-dom'

const Result = () => {

  const navigate = useNavigate()

  const [result, setResult] = useState(0)
  const [all, setAll] = useState(0)

  const getResult = async () => {
    try {
      const response = await axios.get('http://localhost:5000/result', {withCredentials: true})
      if (!response.data.loggedin) {
        navigate("/login")
      }
      setResult(response.data.result)
      setAll(response.data.all)
    } catch (error) {
    }
  }
  useEffect(() => {
    getResult()
  }, [])
  return (
    <div className='container result'>
      <h1>{all} válaszból {result} volt helyes: {parseInt(result/all*100)}%</h1>
    </div>
  )
}

export default Result
