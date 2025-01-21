import React from 'react'
import style from '../styles/project.module.css'
import Button from './Button'

const Project = () => {
  return (
    <>
      <div className={`${style.project} genPad`}>
        <h1 className={` header2 ${style.header}`}>Our Community <br /> Best Project</h1>
        <div className={`${style.cardList} `}>
          <div className={`${style.card}`} style={{backgroundImage:`url('/projectpic.png')`}} >
            <div className={`${style.label} flex justify-between items-center`}>
              <div>
                <h1 className={`${style.title} `}>Town  Renovation</h1>
                <p className={`${style.sub} text-standard`}>Project Completed</p>
              </div>
              <Button title={'-'} />
            </div>
          </div>
          <div className={`${style.card}`} style={{backgroundImage:`url('/projectpic2.png')`}}>
            <div className={`${style.label} flex justify-between items-center`}>
              <div>
                <h1 className={`${style.title} `}>Treasury Tower</h1>
                <p className={`${style.sub} text-standard`}>Project Completed</p>
              </div>
              <Button title={'-'} />
            </div>
          </div>
          <div className={`${style.card}`} style={{backgroundImage:`url('/projectpic3.png')`}}>
            <div className={`${style.label} flex justify-between items-center`}>
              <div>
                <h1 className={`${style.title} `}>Women in Engineering Fundraising</h1>
                <p className={`${style.sub} text-standard`}>Fundraising</p>
              </div>
              <Button title={'-'} />
            </div>
          </div>
          <div className={`${style.card}`} style={{backgroundImage:`url('/projectpic4.png')`}}>
            <div className={`${style.label} flex justify-between items-center`}>
              <div>
                <h1 className={`${style.title} `}> Community Hotel</h1>
                <p className={`${style.sub} text-standard`}>Donation</p>
              </div>
              <Button title={'-'} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project