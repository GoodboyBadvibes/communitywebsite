import React from 'react'
import style from '../styles/connect.module.css'
import Button from './Button'
import Image from 'next/image'
import pic from '../../../../public/connectpic.png'
import DP from '../../../../public/connectpic2.png'

const Connect = () => {
  return (
    <>
      <div className={`${style.outerConnect} genPad`}>
        <div className={`  flex flex-row-reverse justify-between items-center relative ${style.innerConnect}`}>
          <div>
            <h1 className={`${''} header2`}>Connect With Our Team</h1>
            <p className={`${style.sub} sub`}>All our teams are professional and competent in their fields and will help you realize your dream building with the excellent result </p>
            <Button title={"Connect"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
} />
          </div>

          <Image className={`${style.card}`} src={pic} alt='our story' />

          <div className={`${style.flyCard}`}>
            <Image src={DP} alt='profile picture' />
            <h1 className={` ${style.flyCardTitle}`}>Dianne Russell</h1>
            <p className={` sub`}>Community PRO and Manager with experience and knowledge in Ogidi</p>

          </div>
        </div>
      </div>
    </>
  )
}

export default Connect