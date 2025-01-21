import Image from 'next/image'
import React from 'react'
import style from '../styles/events.module.css'
import pic1 from '../../../../public/eventspic.png'
import pic2 from '../../../../public/eventspic2.png'
import pic3 from '../../../../public/eventspic3.png'

const Events = () => {
  return (
    <>
      <div className={` genPad bg-offWhite ${style.events}`}>
        <h1 className={` header2 ${style.header}`}>Events and Reports</h1>
        <div className={` flex justify-around items-center ${style.cardList}`}>
          <div className={`${style.card}`}>
            <Image className={`${style.eventPic}`} src={pic1} alt='event image' />
            <div className={`${style.detail} flex justify-between items-start`}>
              <div>
                <p className={` text-standard sub justify-end `} >JAN</p>
                <h1 className={` header3`}>12</h1>
              </div>
              <div>
                <h2 className={`${style.deTitle} `}>Industrial Pool Launc...</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

                <p  className={`${style.deSub}`}>Odumodu park </p>
              </div>
            </div>
          </div>
          <div>
            <Image className={`${style.eventPic}`} src={pic2} alt='news image' />
            <div className={`${style.detail} flex justify-between items-center`}>
            <div>
                <p className={` text-standard sub justify-end `} >JAN</p>
                <h1 className={` header3`}>12</h1>
              </div>
              <div>
                <h2 className={`${style.deTitle} `}>Industrial Pool Launc...</h2>
                <p  className={`${style.deSub}`}>Odumodu park </p>
              </div>
            </div>
          </div>
          <div>
            <Image className={`${style.eventPic}`} src={pic3} alt='news image' />
            <div className={`${style.detail} flex justify-between items-center`}>
            <div>
                <p className={` text-standard sub justify-end `} >JAN</p>
                <h1 className={` header3`}>12</h1>
              </div>
              <div>
                <h2 className={`${style.deTitle} `}>Industrial Pool Launc...</h2>
                <p  className={`${style.deSub}`}>Odumodu park </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Events