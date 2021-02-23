import React from 'react'
import './style.css'

export default function({ children, disabled, background="#5FABB2", onClick }) {
  return (
    <button 
      onClick={onClick}
      disabled={disabled} 
      className="btn"
      style={{ cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? '0.6' : '1', background: background }}
    >
      {children}
    </button>
  )
}
