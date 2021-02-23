import React from 'react'
import './style.css'

export default function() {
  return (
    <div className="remember-me-section">
      <label htmlFor="rememberMe">
      <input id="rememberMe" type="checkbox" /> Remember Me
      </label>    
      <p>Forgot password</p>
    </div>
  )
}
