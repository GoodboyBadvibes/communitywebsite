import React from 'react'
import style from '../styles/incident.module.css'
import Button from './Button'
import Image from 'next/image'
import pic from '../../../../public/incidentpic.png'

const incident = () => {
  return (
    <>
      <div className={`${style.incident} genPad bg-offWhite flex flex-row-reverse justify-between items-center`}>
        <div>
          <h1 className={` header3 ${style.title}`}>Incident & Accident Report and Management</h1>
          <p className={`sub  ${style.sub}`}>Report incidents quickly and securely to ensure a safer community for everyone. Your voice plays a crucial role in addressing challenges and fostering accountability. Together, we can build a more responsive and supportive environment</p>
          <Button title={'Send a report'} />
        </div>
        <Image src={pic} alt='donations' />
      </div>
    </>
  )
}

export default incident