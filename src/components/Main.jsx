import React from 'react'
import MainIcons from './MainIcons/MainIcons'
import MainTitles from './MainTitles'
import MainImage from './MainImage/MainImage'
import './Main.css'

const Main = () => {
  return (
    <main>
        <MainIcons/>
        <article>
            <MainTitles/>
            <MainImage/>
        </article>        
    </main>
  )
}

export default Main