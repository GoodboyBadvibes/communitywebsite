import Image from 'next/image'
import React from 'react'
import sponsor1 from '../../../../public/sponsor1.png'
import sponsor2 from '../../../../public/sponsor2.png'
import sponsor3 from '../../../../public/sponsor3.png'
import sponsor4 from '../../../../public/sponsor4.png'
import style from '../styles/patners.module.css' 

const Patners = () => {
  return (
    <>
      <div className={`${style.patners} flex justify-between items-center`}>
        <Image alt='patner1'  src={sponsor1} />
        <Image alt='patner2'  src={sponsor2} />
        <Image alt='patner3'  src={sponsor3} />
        <Image alt='patner4'  src={sponsor4} />
      </div>
    </>
  )
}

export default Patners