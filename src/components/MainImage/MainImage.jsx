import React from 'react'
import './MainImage.css'
import Assets from '../MainImage/assets/img/computer1.jpg'

const MainImage = () => {
  return (
    <div className='PerfilImg'>
      <img className='logo' src={Assets} alt='image'/>
      
    </div>
  )
}

export default MainImage