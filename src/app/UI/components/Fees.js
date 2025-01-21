import React from 'react'
import style from '../styles/fees.module.css'

const Fees = () => {
  return (
    <>
      <div className={`${style.fees} genPad`}>
        <div>
          <h1 className={` header2 ${style.header}`}>Community Fees and Contributions</h1>
          <p className={`${style.sub}`}>&quot;Community fees and levies support essential services, development projects, and the well-being of our community. Your contributions drive progress and strengthen our shared future&quot;</p>
        </div>
        <div className={`${style.cardList} flex justify-start items-center`}>
          <div className={`${style.card} bg-offWhite`}>
            <h1 className={`${style.cardHeader}`}>Community Development Levy</h1>
            <p className={`sub`}>The community development levy supports projects that enhance infrastructure, education, and overall well-being. Your contributions drive progress and improve the quality of life for everyone in our community 
            </p>
            <div className= {`flex justify-between items-center bg-standard ${style.btn}`}>
              <p>Pay</p>
              <p className={` ${style.arrow}`}>{'>'}</p>
            </div>
          </div>
          <div className={`${style.card} bg-offWhite`}>
            <h1 className={`${style.cardHeader}`}>Security Levy</h1>
            <p className={`sub`}>The security levy helps fund community safety initiatives, including neighborhood patrols and emergency response services. It ensures a secure environment for all residents and their properties
            </p>
            <div className= {`flex justify-between items-center bg-standard ${style.btn}`}>
              <p>Pay</p>
              <p className={` ${style.arrow}`}>{'>'}</p>
            </div>
          </div>
          <div className={`${style.card} bg-offWhite`}>
            <h1 className={`${style.cardHeader}`}>Donations to the community</h1>
            <p className={`sub`}>Your donations help fund community projects, support local initiatives, and improve the overall well-being of our community. Every contribution makes a meaningful impact 
            </p>
            <div className= {`flex justify-between items-center bg-standard ${style.btn}`}>
              <p>Donate</p>
              <p className={` ${style.arrow}`}>{'>'}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Fees