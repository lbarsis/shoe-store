import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContext';
import '../styles/SignupForm.css'


function Signup() {
  const {setUser} = useContext(UserContext)
  const navigate = useNavigate()
  const [signupErrors, setSignupErrors] =useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then( r => {
      if (r.ok) {
        r.json().then(user => {
          setUser(user)
          setSignupErrors(null)
          navigate('/')
        })
      } else {
        r.json().then(error => setSignupErrors(error))
      }
    })
  }

  return (
    <div className='signup'>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />

        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          required
          onChange={handleChange}
          value={formData.password}
        />

        <button className='signup-btn' type='submit'>Submit</button>
      </form>
      {signupErrors ? 
        signupErrors.errors.map(error => <p key={uuidv4()}>{error}</p>)
      :
        null
    }
    </div>
  );
}

export default Signup;