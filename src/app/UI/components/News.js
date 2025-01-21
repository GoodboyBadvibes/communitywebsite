import React from 'react'
import style from '../styles/news.module.css'
import Image from 'next/image'
import pic1 from '../../../../public/newspic.png'
import pic2 from '../../../../public/newspic2.png'
import pic3 from '../../../../public/newspic3.png'

const News = () => {
  return (
    <>
      <div className={`${style.news} genPad`}>
        <h1 className={`${style.header} header2`}>News & Update</h1>
        <div className={` flex justify-between items-center ${style.cardList}`}>
          <div className={`${style.card}`}>
            <Image className={`${style.newsPic}`} src={pic1} alt='news image' />
            <div className={`${style.head} flex justify-between items-center`}>
              <p className={` text-standard ${style.title}`}>Tourism</p>
              <p className={` ${style.date}`}>12 Jan 2024</p>
            </div>
            <h3 className={` ${style.content}`}>Igwe Set to Dialogue with Developers property Owners on Dist...</h3>
          </div>
          <div>
            <Image className={`${style.newsPic}`} src={pic2} alt='news image' />
            <div className={`${style.head} flex justify-between items-center`}>
              <p className={` text-standard ${style.title}`}>Media</p>
              <p className={` ${style.date}`}>12 Jan 2024</p>
            </div>
            <h3 className={` ${style.content}`}>Igwe Set to Dialogue with Developers property Owners on Dist...</h3>
          </div>
          <div>
            <Image className={`${style.newsPic}`} src={pic3} alt='news image' />
            <div className={`${style.head} flex justify-between items-center`}>
              <p className={` text-standard ${style.title}`}>Environment</p>
              <p className={` ${style.date}`}>12 Jan 2024</p>
            </div>
            <h3 className={` ${style.content}`}>Igwe Set to Dialogue with Developers property Owners on Dist...</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default News