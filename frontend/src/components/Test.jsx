import React, { useEffect, useState } from 'react'
import axios from 'axios';
import  { useNavigate } from 'react-router-dom'

const Test = () => {

  const [question, setQuestion] = useState('')
  const [choices, setChoices] = useState([])
  const [test, setTest] = useState(null)
  const [selected, setSelected] = useState(null)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const getTest = async () => {
    try {
      const response = await axios.post('http://localhost:5000/test', {test, selected}, {withCredentials: true})
      if (response.data.question) {
        setSelected(null)
        setQuestion(response.data.question)
        setChoices(response.data.choices)
        setTest(response.data.test)
      } else if (response.data.done) {
        navigate("/result")
      } else {
        return setError({statusText: 'Unknown error'})
      }
    } catch (error) {
      setError(error.response)
    }
  }
  useEffect(() => {
    getTest()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    getTest() 
  }

  const handleChange = (e) => {
    setSelected(e.target.value)
  }

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
    <div className='container test'>
      <h1>{ question } </h1>
      <form onSubmit={handleSubmit}>
      { choices.map((choice, index) => (
        <React.Fragment key={index}>
          <label>
            <input type="radio" name="answer" value={index} onChange={handleChange} checked={selected == index} required />
            {choice}
          </label><br />
        </React.Fragment>
      )) }
       { choices.length && <input type="submit" value="Submit" />}
      </form>
    </div>
  )
}

export default Test
