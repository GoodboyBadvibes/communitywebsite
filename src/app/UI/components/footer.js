import React from 'react'
import style from '../styles/footer.module.css'
import logo1 from '../../../../public/footerpic.png'
import logo2 from '../../../../public/footerpic2.png'
import logo3 from '../../../../public/footerpic3.png'
import image from '../../../../public/notablepic.png'
import Image from 'next/image'

const footer = () => {
  return (
    <>
      <div className={`${style.footer} genPad flex  items-start relative`}>
        <div className={` w-1/2 `}>
        <div className=' flex items-end'>
          <h1 className={`${style.header1}`}>Ogidi, Good Evening</h1> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>
        </div>
          

          <p className={`${style.sub} sub`}>is a general contractor company based in Jakarta. More than 25 years of experience in building and carving out indonesia&apos;s development</p>
          <div className={`${style.logos} flex items-center`}>
            <Image className= {` bg-standard rounded-full bg-opacity-50 `} src={logo1} alt='twitter' width={42} />
            <Image className= {` bg-standard rounded-full bg-opacity-50 `} src={logo2} alt='instagram' width={42} />
            <Image className= {` bg-standard rounded-full bg-opacity-50 `} src={logo3} alt='linkedIn' width={42}/>
          </div>
        </div>

        <div  className={` flex justify-between items-start ${style.compAndMore}`}>
        <div>
          <h1 className={`${style.header2}`}>Company</h1>
          <p className={`${style.sub} sub`}>About</p>
          <p className={`${style.sub} sub`}>How it works</p>
          <p className={`${style.sub} sub`}>Terms</p>
          <p className={`${style.sub} sub`}>Privacy Policy</p>
        </div>

        <div>
          <h1 className={`${style.header2}`}>More</h1>
          <p className={`${style.sub} sub`}>Documentation</p>
          <p className={`${style.sub} sub`}>License</p>
        </div>
        </div>

        <div className={` absolute genPad flex justify-between items-center ${style.footerCard}`}>
          <div style={{backgroundColor:'null'}} className={` relative ${style.imgCard}`} >
            <Image src={image} alt='guy' />
            <div className={` absolute ${style.floatTitleCard}`}>
              <p className={`${style.quoteIcon}`}>&quot;</p>
              <h3 className={` ${style.header3} text-center `}>Jacob Molen</h3>
              <p className=''>We like the final result of this project, in extraordinary and also provides the best service to the client</p>
            </div>
          </div>
          <div className={` ${style.footerCardTxt}`}>
            <h3 className={` ${style.sub}`}>We are to help you build a excellent build, with us nothing is impossible. See what we have done and what they have to say about our work perform</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default footer