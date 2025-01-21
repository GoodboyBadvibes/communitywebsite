import React from 'react'
import style from '../styles/button.module.css'

const Button = ({title, gradient,icon}) => {
  return (
    <>
      <div className={`${style.button} ${gradient? style.gradient : ' bg-standard'}`}>
        <div className={`${icon? 'flex items-center gap-3':''} `}>
        <p>{title}</p> 
        {icon}
        </div>
      </div>
    </>
  )
}

export default Button