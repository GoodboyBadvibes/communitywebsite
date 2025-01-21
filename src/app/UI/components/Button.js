import React from 'react'
import style from '../styles/button.module.css'

const Button = ({title, gradient,icon}) => {
  return (
    <>
      <div className={`${style.button} ${gradient? style.gradient : ' bg-standard'}`}>
        <p>{title}</p> {icon}
      </div>
    </>
  )
}

export default Button