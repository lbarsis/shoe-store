import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/userContext';
import '../../styles/NavbarStyles/LoginForm.css'

function Login() {
  const { setUser } = useContext(UserContext)
  const [loginErrors, setLoginErrors] = useState(null)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(r => {
        if (r.ok) {
          r.json().then(user => {
            setUser(user)
            // navigate('/')
          })
        } else {
          r.json().then(err => {
            setLoginErrors(err)
          })
        }
      }
      )
  }

  const displayErrors = loginErrors?.errors.map(e => <p key={e.indexOf(e, e)}>{e}</p>)

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
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
          required
          name="password"
          onChange={handleChange}
          value={formData.password}
        />

        <button type='submit' className='login-btn'>Submit</button>

        {loginErrors ? displayErrors : null}
      </form>
    </div>
  );
}

export default Login;