import React from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import './MainTitles.css'

const MainTitles = () => {
  return (
    <section className='titles'>
      <div className='section-titles'>
        <h1>Hi, I'm Alejandro</h1>
        <h5>Frontend developer</h5>

      </div>
      <p>Medium level of experience in web design and learning constantly</p>
      <button>Contact Me <BsFillArrowRightCircleFill/></button>
    </section>
  )
}

export default MainTitles