import React, { useEffect, useState } from 'react'
import axios from 'axios';
import  { useNavigate } from 'react-router-dom'

const Result = () => {
  
  const [result, setResult] = useState(0)
  const [all, setAll] = useState(0)
  const [error, setError] = useState(null)
  
  const navigate = useNavigate()

  const getResult = async () => {
    try {
      const response = await axios.get('http://localhost:5000/result', {withCredentials: true})
      setResult(response.data.result || 0)
      setAll(response.data.all)
    } catch (error) {
      setError(error.response)
    }
  }
  useEffect(() => {
    getResult()
  }, [])

  if (error) {
    if (error.status === 401) {
      navigate('/login')
    } else {
      return (
        <div className='container result'>
          <h2 className='error'>Error: {error.statusText}</h2>
        </div>
      )
    }
  } 

  return (
    <div className='container result'>
      <h1>{all} válaszból {result} volt helyes: {parseInt(result/all*100)}%</h1>
    </div>
  )
}

export default Result
