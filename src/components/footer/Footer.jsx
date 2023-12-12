
import React from 'react'
import "./footer.css"
import logo from "../../assets/Group 1.png"
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div id='footer'>
        <div className="container">
          <div className="foot">
            <div className="f_1">
              <img src={logo} alt="logo" />
              <h3>Creative</h3>
              <div className="f_tex">
                <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                <div className="f_icon">
                <CiFacebook />
                <FaTwitter />
                <FaInstagramSquare />

                </div>
              </div>


            </div>
            <div className="f_2">
              <ul>
                <li>About Us</li>
                <li>Work</li>
                <li>Latest News</li>
                <li>Careers</li>
                
              </ul>
            </div>
            <div className="f_2">
              <ul>
                <li>Product</li>
                <li>Prototype </li>
                <li> Plans & Pricing</li>
                <li>Customers </li>
                <li> Integrations </li>
                
              </ul>
            </div>
            <div className="f_2">
              <ul>
                <li>Support</li>
                <li>Help Desk </li>
                <li>  Sales</li>
                <li>Become a Partner </li>
                <li> Developers </li>
                
              </ul>
            </div>
            <div className="f_2">
              <ul>
                <li>Contact</li>
                <li>  524 Broadway , NYC</li>
                <li>+1 777 - 978 - 5570 </li>
              
                
              </ul>
            </div>



          </div>

        </div>
    </div>
  )
}

export default Footer