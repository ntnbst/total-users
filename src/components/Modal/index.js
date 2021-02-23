import React from 'react'
import './style.css'

export default function ({ children, dissmissModal }) {
  return (
    <>
      <div onClick={dissmissModal} className="popup-backdrop"></div>
      <div className="popup-info">
        {children}
        <button className="btn-close-modal" onClick={dissmissModal}> ❌ </button>
      </div>
    
    </>
  )
}