import React, { useEffect, useState } from 'react'
import axios from 'axios';
import  { useNavigate } from 'react-router-dom'

const Test = () => {

  const [question, setQuestion] = useState('')
  const [choices, setChoices] = useState([])
  const [test, setTest] = useState(null)
  const [selected, setSelected] = useState(null)
  const navigate = useNavigate()

  const getTest = async () => {
    try {
      const response = await axios.post('http://localhost:5000/test', {test, selected}, {withCredentials: true})
      if (!response.data.loggedin) {
        navigate("/login")
      }
      if (response.data.question) {
        setQuestion(response.data.question)
        setChoices(response.data.choices)
        setTest(response.data.test)
      } else if (response.data.done) {
        navigate("/result")
      } else {
        return <div className="error">Hiba történt</div>
      }
      console.log(response.data);
    } catch (error) {
    }
  }
  useEffect(() => {
    getTest()
    return () => {
      setQuestion('')
    };
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    getTest() 
  }

  const handleChange = (e) => {
    setSelected(e.target.value)
  }

  return (
    <div className='container test'>
      <h1>{ question } </h1>
      <form onSubmit={handleSubmit}>
      { choices.map((choice, index) => (
        <React.Fragment key={index}>
          <label>
            <input type="radio" name="answer" value={index} onChange={handleChange} required />
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
