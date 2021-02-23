import React from 'react'
import heroImg from '../../assets/img/hero-img.jpg'
import './style.css'

export default function({ children }) {
  return (
    <div className="layout">
      <figure>
        <img className="hero-img" src={heroImg} alt=""/>
      </figure>
      {children}
    </div>
  )
}
