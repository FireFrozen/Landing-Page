import React,{useEffect,useState} from 'react'
import SocialIconsMood from './SocialIconsMood/SocialIconsMood'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {

  const [dark,setDark] = useState(false);
  useEffect(()=>{
    
    const BodyVery = document.querySelector('#body1');
    
    BodyVery.classList.toggle('mood',dark);
       
  },[dark]);
 
  
  return (
    <nav>
        
        <ul>
            <li><NavLink to="/" className="active" >Home</NavLink></li>
            
            <li>About</li>
            <li><NavLink to="/skill" className="active">Skill</NavLink></li>
            
            <li>Service</li>
            <li>Portafolio</li>
            <li>Contact me</li>
            <li className='mood-item' onClick={()=> setDark(!dark)}><SocialIconsMood/></li>
        </ul>
    </nav>
  )
}





export default Nav


