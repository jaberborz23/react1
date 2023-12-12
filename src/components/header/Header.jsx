import React from 'react'
import "./header.css"
import Logo from "../../assets/Group 1.png"

const Header = () => {
  return (
   <div id='nav'>
  <div className='container'>
    <div className='main'>

    
        <div className="logo">
            <img src={Logo} className='l_1' alt="logo" />
            <h3>Creative</h3>

        </div>
        <div className="menu">
            <ul>
                <li><a href="nav" className='home'>Home</a></li>
                <li><a href="#bann">About</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#portfolio">Blog</a></li>
                <li><a href="#team">Contact</a></li>
                <a  href="#latest" className='btn1'> Contact Us</a>

            
            </ul>
        </div>
    </div>
    </div> 
   </div>
    
  
    


    
  )
}

export default Header