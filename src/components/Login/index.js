import React, { useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import Button from '../Button'
import Modal from '../Modal'
import RememberMe from '../RememberMe'
import TextInput from '../TextInput'

export default function() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [fbEmail, setFbEmail] = useState('')
  const [fbPassword, setFbPassword] = useState('')

  const [showFbLogin, setShowFbLogin] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isUserAlreadyRegistered()) {
      localStorage.setItem('isLoggedIn', true)
      history.push('/users')
    }
  }

  const handleFbSubmit = () => {
    let dataNeedToBeStored = {
      name: '-',
      email: fbEmail,
      password: fbPassword,
      mobile: '-',
      loginType: 'fb'
    }
    localStorage.setItem('isLoggedIn', true)
    let storedUsers = JSON.parse(localStorage.getItem('users')) || []
    storedUsers.push(dataNeedToBeStored)
    localStorage.setItem('users', JSON.stringify(storedUsers))
    history.push('/users')
  }

  const isUserAlreadyRegistered = () => {
    let storedUsers = JSON.parse(localStorage.getItem('users')) || []

    if (storedUsers.filter(user => user.email === email && user.password === password).length > 0) {
      return true;
    } else if (storedUsers.filter(user => user.email === email && user.password !== password).length > 0) {
      alert('Incorrect password!!')
      return false;
    } else {
      alert("You are not registered, Please register first!")
      return false
    }
  }

  if (localStorage.getItem('isLoggedIn')) {
    return <Redirect to="/users" />
  }

  const isFormNotValid = !email || !password

  return (
    <div>
      <h1>Welcome Back!</h1>
      <p>Please login to your account</p>
      <br/>
      <form onSubmit={handleSubmit}>
        <TextInput required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
        <TextInput required value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        <RememberMe />
        <br/>
        <Button disabled={isFormNotValid}>Login</Button>
      </form>
      <br/>
      <Button onClick={() => setShowFbLogin(true)} background="#3b5998">Continue With Facebook</Button>
      <br/>
      <br/>
      <Link to='/register' style={{ color: '#5FABB2', cursor: 'pointer' }}>Don't have an account - Register</Link>


      {showFbLogin && 
        <Modal dissmissModal={() => setShowFbLogin(false)}>
          <h1>Facebook Login</h1>
          <div style={{ maxWidth: '26rem', margin: '0 auto' }}>
            <TextInput required value={fbEmail} onChange={(e) => setFbEmail(e.target.value)} placeholder="Email" type="email" />
            <TextInput required value={fbPassword} onChange={(e) => setFbPassword(e.target.value)} type="password" placeholder="Password" />
            <br/>
            <Button disabled={!fbEmail || !fbPassword} onClick={handleFbSubmit} background="#3b5998">Login</Button>
            <br/>
          </div>
        </Modal>}
    </div>
  )
}
