import React, { useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import Button from '../Button'
import TextInput from '../TextInput'

export default function({ onClickLogin }) {
  const history = useHistory()

  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')
  
  const handleFormSubmit = (e) => {
    e.preventDefault()
    let dataNeedToBeStored = {
      name: name,
      email: email,
      password: password,
      mobile: mobile,
      loginType: 'email'
    }
    localStorage.setItem('isLoggedIn', true)
    let storedUsers = JSON.parse(localStorage.getItem('users')) || []

    storedUsers.push(dataNeedToBeStored)
    localStorage.setItem('users', JSON.stringify(storedUsers))

    if (!isFormNotValid) {
      history.push('/users')
    }
  }

  if (localStorage.getItem('isLoggedIn')) {
    return <Redirect to="/users" />
  }

  const isFormNotValid = password.length < 8 || password !== confPassword || mobile.length !== 10 || !name || !email || Number(mobile).toString() == 'NaN'

  return (
    <div>
      <h1>Hi, there</h1>
      <p>Please Fill out the details to get registered!</p>
      <br/>
      <form onSubmit={handleFormSubmit}>
        <TextInput 
          required 
          placeholder="Name" 
          onChange={(e) => setName(e.target.value)} 
          value={name} 
        />
        <TextInput 
          required 
          placeholder="Mobile" 
          maxLength="10"
          onChange={(e) => setMobile(e.target.value)}
          value={mobile} 
          errorText={mobile.length !== 0 && (mobile.length !== 10 || Number(mobile).toString() == 'NaN') && 'Enter a valid Mobile number'}
        />
        <TextInput 
          required 
          placeholder="Email" 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
        />
        <TextInput 
          required 
          placeholder="Password" 
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
          errorText={password.length !== 0 && password.length < 8 && 'Password must be greater than or equal to 8 characters.'}
        />
        <TextInput 
          required 
          placeholder="Confirm Password" 
          type="password" 
          onChange={(e) => setConfPassword(e.target.value)} 
          value={confPassword} 
          errorText={confPassword.length > 0 && password !== confPassword && "Passwords do not match"}
        />
        <br/>
        <Button disabled={isFormNotValid}>Register</Button>
      </form>
      <br/>
      <Link to="/" style={{ color: '#5FABB2', cursor: 'pointer' }}>Already have an account - Login</Link>
    </div>
  )
}
