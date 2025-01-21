import Image from 'next/image'
import React from 'react'
import style from '../styles/card.module.css'

const Card = ({title, sub, img}) => {
  return (
    <>
      <div style={{ backgroundColor: 'white' }} className={` ${style.card}`}>
        <Image src={img} width={310} height={307} alt='location name' />
        <div className={` ${style.cardFooter}`}>
          <h1 className={` ${style.title2}`}>{title}</h1>
          <p className={`${style.sub2}`}>{sub}</p>
        </div>
      </div>
    </>
  )
}

export default Card