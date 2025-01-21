import React from 'react'
import style from '../styles/banner.module.css'
import Button from './Button'

const Banner = () => {
  return (
    <>
      <div className={`${style.banner} `}>
        <div className={`${style.divTitle} genPad`} >
          <h1 className={`${style.title}`}>Celebrating Community, Culture and Connection in Ogidi</h1>

          <p className={`${style.subTitle}`}> Discover the rich heritage, vibrant culture and inspiring stories of our community. Today, we celebrate our traditions while fostering growth and connection for future generations</p>

          <Button title={'Discover More'} gradient={true} />
        </div>


          <div className={`${style.bannerFooter} sm:flex justify-between items-start`}>
            <div className={`${style.bannerFigures} sm:flex justify-between items-center`}>
              <div className={`${style.fig}`}>
                <h1 className={`${style.num}`}>70,000 <span className={` text-standard -ml-2`} >+</span></h1>
                <p className={`${style.numTitle}`}>Est. Population</p>
              </div>
              <div className={`${style.fig}`}>
                <h1 className={`${style.num}`}>900 <span className={` text-standard -ml-2`} >+</span></h1>
                <p className={`${style.numTitle}`}>Amazing Projects</p>
              </div>
              <div className={`${style.fig}`}>
                <h1 className={`${style.num}`}>Anambra</h1>
                <p className={`${style.numTitle}`}>State, South-East Nigeria</p>
              </div>
            </div>

            <div className={`${style.dyk} flex justify-around items-center`}>
                <h1 className={`${style.dykHead}`}>DID YOU KNOW?</h1>
                <p className={`${style.dykSub}`}>Ogidi is known for its mid-july annual Nwafor Festival, an 11-day festival in july that takes place after cultivation of yams.</p>
            </div>
          </div>

        </div>
    </>
  )
}

export default Banner