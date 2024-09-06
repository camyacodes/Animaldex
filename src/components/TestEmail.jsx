// import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const TestEmail = ({ time, score, animals }) => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const animalString = Object.entries(animals)
    .map(([animal, count]) => `${animal} x ${count}`) // Convert each animal and count to a string
    .join('\n\t\t') // Join all strings with a comma

  const sendEmail = (e) => {
    e.preventDefault()

    const emailContent = {
      user_name: name,
      user_email: email,
      time: time,
      score: score,
      animals: animalString,
    }

    emailjs
      .send('service_2vq55su', 'template_nc8stjj', emailContent, {
        publicKey: 'OTJM2W66XKnM0RLzD',
      })
      .then(
        () => {
          console.log('SUCCESS!')
          navigate('/')
        },
        (error) => {
          console.log('FAILED...', error.text)
          setErrorMsg(error.text)
        }
      )
  }

  return (
    <div>
      {errorMsg ? <h2>{errorMsg}</h2> : <div></div>}
      <div className='field'>
        <label>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          onChange={() => {
            setName(event.target.value)
          }}
          required
        />
      </div>
      <div className='field'>
        <br />
        <label>Email</label>
        <input
          type='text'
          name='user_email'
          onChange={() => {
            setEmail(event.target.value)
          }}
          required
        />
      </div>
      <button
        type='submit'
        value='Send Results'
        onClick={sendEmail}
        style={{ margin: '20px' }}
      >
        Send Results
      </button>
    </div>
  )
}
