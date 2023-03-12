import React from 'react'
import './Skill.css'
import Assets from '../Skill/assets/image-skills.jpg'

const Skill = () => {
  return (
    <div className='skill-container'>
      <section className='section-skill'>
        <h1>Skills</h1>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Bootstrap</li>
          <li>React</li>
          <li>Angular</li>
          <li>Typescript</li>
          <li>Git</li>
        </ul>
        
      </section>

      <section className='section-skill'>
        <h1>Soft Skills</h1>
        <ul>
          <li>Autodidacta</li>
          <li>Aprendizaje rápido</li>
          <li>Capacidad de análisis</li>
          <li>Trabajo en equipo</li>                
        </ul>
        
      </section>

      <div className='skill-imagen'>
        <img className='logo-skill' src={Assets} alt=''/>
      </div>
      
    </div>
  )
}

export default Skill