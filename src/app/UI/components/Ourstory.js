import React from 'react'
import style from '../styles/story.module.css'
import Button from './Button'
import Image from 'next/image'
import pic from '../../../../public/ourstorypic.png'

const Ourstory = () => {
  return (
    <>
      <div className={` genPad ${style.story} flex justify-between items-center`}>
        <div>
          <h1 className={`${''} header2`}>Our Story <br /> Who We Are</h1>
          <p className={`${style.sub} sub`}>A town in the Idemili North Local Government area of Anambra state. It&apos;s the headquaters of the area and is home to an estimated 70,000 people. Ogidi is an Igbo speaking town and shares borders with neighboring towns like Abatete, Eziowelle, and Ogbunike </p>
          <Button title={"Read More"} />
        </div>
        {/* <div > */}
          <Image className={`${style.card}`} src={pic} alt='our story' />
        {/* </div> */}
      </div>
    </>
  )
}

export default Ourstory