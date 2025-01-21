import React from 'react'
import style from '../styles/donations.module.css'
import Button from './Button'
import Image from 'next/image'
import pic from '../../../../public/donationspic.png'

const Donations = () => {
  return (
    <>
      <div className={`${style.donations} genPad flex justify-between items-center`}>
        <div>
          <h1 className={` header3 ${style.title}`}>Donations & Fundraisers</h1>
          <p className={`sub  ${style.sub}`}>Contribute to the development and progress of our community through transparent and accountable fees. Every contribution goes towards building better infrastructure, funding community projects, and ensuring essential services for everyone. Together, we can achieve sustainable growth and development . Your support makes a lasting difference in the lives of our people</p>
          <Button title={'View Available'} />
        </div>
        <Image src={pic} alt='donations' />
      </div>
    </>
  )
}

export default Donations