import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/userContext';
import '../../styles/NavbarStyles/SignupForm.css'


function Signup() {
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()
  const [signupErrors, setSignupErrors] = useState(null)
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    password_confirmation: '',
    is_admin: false
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({user: formData})
    })
      .then(r => {
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
        <input name="fname" placeholder="First Name" type="text" value={formData.fname} onChange={handleChange} />
        <input name="lname" placeholder="Last Name" type="text" value={formData.lname} onChange={handleChange} />
        <input name="email" placeholder="Email" type="text" value={formData.email} onChange={handleChange} />
        <input name="password" placeholder="Password" type="password" value={formData.password} onChange={handleChange} />
        <input name="password_confirmation" placeholder="Confirm Password" type="password" value={formData.password_confirmation} onChange={handleChange} />
        <button className='signup-btn' type="submit">Sign Up</button>
      </form>

      {signupErrors?.errors.length > 0 ?
        signupErrors?.errors?.map(error => <p key={uuidv4()}>{error}</p>)
        // console.log(signupErrors)
        : null
      }
    </div>
  );
}

export default Signup;