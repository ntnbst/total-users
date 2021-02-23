import React, { useEffect } from 'react'
import './style.css'

export default function () {

  const users = JSON.parse(localStorage.getItem('users')) || []

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    window.location.href = '/'
  }

  return (
    <div>
      <h1>All registered users</h1>
      <h4>Total count {users.length}</h4>
      <br/>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Login Type</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr> 
              <td>{user.name}</td> 
              <td>{user.email}</td> 
              <td>{user.mobile}</td> 
              <td>{user.loginType}</td> 
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
      <br/>
      <br/>
      <br/>
      <button style={{ width: '4rem', height: '4rem', padding: '0.4rem', borderRadius: '50%', cursor: 'pointer' }} onClick={handleLogout}>Logout</button>
      
    </div>
  )
}
