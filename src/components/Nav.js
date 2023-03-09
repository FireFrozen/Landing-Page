import React,{useEffect} from 'react'
import SocialIconsMood from './SocialIconsMood/SocialIconsMood'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  
  useEffect(()=>{
    const MoodItem = document.querySelector('.mood-item');
    const BodyVery = document.querySelector('#body1');
    MoodItem.addEventListener('click', ()=>{
    BodyVery.classList.toggle('mood');
       
    });
  },[]);
 
  
  return (
    <nav>
        
        <ul>
            <li><NavLink to="/" className="active" >Home</NavLink></li>
            
            <li>About</li>
            <li><NavLink to="/skill" className="active">Skill</NavLink></li>
            
            <li>Service</li>
            <li>Portafolio</li>
            <li>Contact me</li>
            <li className='mood-item'><SocialIconsMood/></li>
        </ul>
    </nav>
  )
}

export default Nav


