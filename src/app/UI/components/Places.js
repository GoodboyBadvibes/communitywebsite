import React from 'react'
import style from '../styles/places.module.css'
// import place1 from '../../../../public/eventspic.png'
import place2 from '../../../../public/placespic.png'
import place3 from '../../../../public/placespic2.png'
import place4 from '../../../../public/placespic3.png'
import Card from '../components/Card'
const Places = () => {
  return (
    <>
      <div className={` genPad bg-offWhite ${style.places}`}>
        <div className={`${style.placesHead} flex items-center`}>
          <h1 className={` header2 ${style.title1}` }  >Popular Places & Landmarks</h1>
          <p className={` sub ${style.sub1}`}>Check out our best service you can possibly orders in building your company and dont forget to ask via our email or our customer service if you are interested in using our services</p>
        </div>

        <div className={`flex justify-between items-center cardList `} >
          <Card title={'Location Name'} sub={'Town Hall'} img={place3} />
          <Card title={'Location Name'} sub={'Zoo'} img={place2} />
          <Card title={'Location Name'} sub={'Palace'} img={place3} />
          <Card title={'Location Name'} sub={'Airport'} img={place4} />
          
        </div>
      </div>
    </>
  )
}

export default Places