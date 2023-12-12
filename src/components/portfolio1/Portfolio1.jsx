import React from 'react'
import "./portfolio1.css"
import rec1 from "../../assets/Rectangle 12.png"
import rec2 from "../../assets/Rectangle 13.png"
import rec3 from "../../assets/Rectangle 14.png"
import rec4 from "../../assets/Rectangle 15.png"
import rec5 from "../../assets/Rectangle 16.png"
import rec6 from "../../assets/Rectangle 17.png"
import rec7 from "../../assets/Rectangle 18.png"
import rec8 from "../../assets/Rectangle 19.png"
import { FaArrowRight } from "react-icons/fa";

const Portfolio1 = () => {
  return (
    <div id='portfolio'>
         <div className="container">
    <div className="ser_m">
            <h2>Our Work Portfolio</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        </div>
        <div className="port">
            <ul>
                <li>All</li>
                <li>Graphic Design</li>
                <li>Mobile App</li>
                <li> Web Development</li>
                <li>Web Design</li>
                
            </ul>
        </div>
        <div className="por_img">
            <div className="p_1">
                <img src={rec1} alt="rec1" />
                <a href="#" className='p_a'>
                <h5>Graphic Design</h5>
                <h6>See Details <FaArrowRight /> </h6>
                </a> 
            </div>
            <div className="p_1">
            <img src={rec2} alt="rec2" />
                <a href="#" className='p_a'>
                <h5>Graphic Design</h5>
                <h6>See Details <FaArrowRight /> </h6>
                </a> 
            </div>
            <div className="p_1">
            <img src={rec3} alt="rec3" />
                <a href="#" className='p_a'>
                <h5>Graphic Design</h5>
                <h6>See Details <FaArrowRight /> </h6>
                </a> 
            </div>
            <div className="p_1">
            <img src={rec4} alt="rec4" />
                <a href="#" className='p_a'>
                <h5>Graphic Design</h5>
                <h6>See Details <FaArrowRight /> </h6>
                </a> 
            </div>
            
           
        </div>

        <div className="por_img">
        <div className="p_1">
        <img src={rec5} alt="rec5" />
                <a href="#" className='p_a'>
                <h5>Graphic Design</h5>
                <h6>See Details <FaArrowRight /> </h6>
                </a> 
            </div>
            <div className="p_1">
            <img src={rec6} alt="rec6" />
                <a href="#" className='p_a'>
                <h5>Graphic Design</h5>
                <h6>See Details <FaArrowRight /> </h6>
                </a> 
            </div>
            <div className="p_1">
            <img src={rec7} alt="rec7" />
                <a href="#" className='p_a'>
                <h5>Graphic Design</h5>
                <h6>See Details <FaArrowRight /> </h6>
                </a> 
            </div>
            <div className="p_1">
            <img src={rec8} alt="rec8" />
                <a href="#" className='p_a'>
                <h5>Graphic Design</h5>
                <h6>See Details <FaArrowRight /> </h6>
                </a> 
            </div>
           
          
        </div>
    </div>

    </div>
  )
}

export default Portfolio1