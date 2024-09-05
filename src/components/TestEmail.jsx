// import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useState } from 'react'

export const TestEmail = ({ time, score, animals }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

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
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )
  }

  return (
    <div>
      <div className='field'>
        <label>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          onChange={() => {
            setName(event.target.value)
          }}
        />
      </div>
      {/* <div className='field'>
        <label htmlFor='time'>time</label>
        <input type='text' name='time' id='time' />
      </div> */}
      <div className='field'>
        {/* <label htmlFor='animals'>animals</label>
        <input
          type='text'
          name='animals'
          id='animals'
          style={{ height: '100px' }}
        /> */}
        <br />
        <label>Email</label>
        <input
          type='email'
          name='user_email'
          onChange={() => {
            setEmail(event.target.value)
          }}
        />
      </div>
      {/* <div className='field'>
        <label htmlFor='score'>score</label>
        <input type='text' name='score' id='score' />
      </div> */}

      <input
        type='submit'
        id='button'
        value='Send Results'
        onClick={sendEmail}
      />
    </div>
  )
}
