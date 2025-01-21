import React from 'react'
import style from '../styles/nav.module.css'

const Nav = () => {
  return (
    <>
      <div className={` flex items-center justify-between genPad ${style.nav}`}>
        <h2 className={`header1 text-standard cursor-pointer` }>Ogidi</h2>

        <div className={ `flex items-center justify-between gap-10 ${style.navLinks} `}> 
          <p className={` text-standard`}>HOME</p>
          <p>ABOUT US</p>
          <div className=' flex items-start gap-3'><p>PORTALS  </p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
 </div>
          <p>PROJECTS</p>
          <p>EVENTS</p>
          <p>CONNECT</p>
          <p>NEWSROOM</p>
        </div>
      </div>
    </>
  )
}

export default Nav