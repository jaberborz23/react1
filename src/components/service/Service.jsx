import React from 'react'
import "./service.css"

import ser_i from "../../assets/line spacing.png"
import serv_i from "../../assets/horizontal.png"
import serv1_i from "../../assets/minus path.png"
import object from "../../assets/object ungroup.png"
import object1 from "../../assets/object group.png"
import trans from "../../assets/transform tool.png"
const Service = () => {
  return (
    <div id='service'>
        <div className="container">
            <div className="ser_m">
                <h2>Our Services</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
            <div className="main1">
                <div className="card">
                    <div className="c_sh">
                    <div className="c_body1">
                   
                    </div>
                    <img className='c_1' src={ser_i} alt="" />
                  
                    <h3>UI/UX Design</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="c_sh">
                <div className="c_body">
                   
                   </div>
                    <img className='c_1' src={serv_i} alt="serv-i" />
                    <h3>Web Development</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="c_sh">
                <div className="c_body1">
                   
                   </div>
                    <img src={serv1_i} className='c_1' alt="serv-i2" />
                <h3>Digital Marketing</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    </div>
                </div>
            </div>
            <div className="main1">
                <div className="card">
                    <div className="c_sh">
                    <div className="c_body1">
                   
                    </div>
                    <img className='c_1' src={object} alt="" />
                  
                    <h3>Graphic Design</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="c_sh">
                <div className="c_body1">
                   
                   </div>
                    <img className='c_1' src={object1} alt="serv-i" />
                    <h3>Web Design</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="c_sh">
                    
                <div className="c_body1">
                   
                   </div>
                    <img src={trans} className='c_1' alt="serv-i2" />
                <h3>Motion Design</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    </div>
                </div>
            </div>

        </div>


    </div>
  )
}

export default Service