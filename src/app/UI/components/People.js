import React from 'react'
import style from '../styles/people.module.css'
import person1 from '../../../../public/notablepic.png'
import person2 from '../../../../public/notablepic2.png'
import person3 from '../../../../public/notablepic3.png'
import person4 from '../../../../public/notablepic4.png'
import Card from './Card'

const People = () => {
  return (
    <>
      <div className={` genPad ${style.people}`}>
        <h1 className={` header2`}>Notable People</h1>
        <hr className={`${style.line}`} />
        <div className={`flex justify-between items-center cardList `}>
          <Card title={'Person Name'} sub={'Person Position'} img={person1} />
          <Card title={'Person Name'} sub={'Person Position'} img={person2} />
          <Card title={'Person Name'} sub={'Person Position'} img={person3} />
          <Card title={'Person Name'} sub={'Person Position'} img={person4} />
        </div>
      </div>
    </>
  )
}

export default People