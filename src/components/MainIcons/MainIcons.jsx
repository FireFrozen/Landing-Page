import React from 'react'
import {SlSocialLinkedin} from 'react-icons/sl'
import {BiBasketball} from 'react-icons/bi'
import {FiGithub} from 'react-icons/fi'
import './MainIcons.css'

const MainIcons = () => {
  return (
    <div className='icons-social'>
      <a><SlSocialLinkedin/></a>
      <a><BiBasketball/></a>
      <a><FiGithub/></a>
    </div>
  )
}

export default MainIcons