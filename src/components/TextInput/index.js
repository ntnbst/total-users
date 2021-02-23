import React from 'react'
import './style.css'

export default function({ type="text", placeholder="Please enter a placeholder", required, onChange, value, errorText, maxLength }) {
  return (
    <div className="text-input-wrapper">
      <input maxLength={maxLength} value={value} onChange={onChange} type={type} placeholder={placeholder} required={required} />
      {errorText && <span style={{ textAlign: 'left', color: 'red', display: 'block' }}>{errorText}</span>}
    </div>
  )
}
