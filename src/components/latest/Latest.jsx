
import React from 'react'
import "./latest.css"
import r_1 from "../../assets/Rectangle 22.png"

import { BiCalendar } from "react-icons/bi";
import { CiUser } from "react-icons/ci";

const Latest = () => {
  return (
    <div id='latest'>
        <div className="container">
        <div className="ser_m">
                <h2>Our Latest News</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
            <div className="lat_cr">
                <div className="crd_lt">
                    <div className="lt_b">
                        <img src={r_1} alt="R_1" />
                    </div>
                    <div className="lt_b1">
                        <div className="user">
                            <p> <CiUser /> Admin</p>
                            <p> <BiCalendar/> 07/11/2021</p>
                        </div>
                   
                    <h2>Business Plans That Fit Your Best Blog</h2>
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <a  href="#">Learn More</a>
                    </div>
                </div>
                <div className="crd_lt">
                    <div className="lt_b">
                        <img src={r_1} alt="R_1" />
                    </div>
                    <div className="lt_b1">
                        <div className="user">
                            <p> <CiUser /> Admin</p>
                            <p> <BiCalendar/> 07/11/2021</p>
                        </div>
                   
                    <h2>Business Plans That Fit Your Best Blog</h2>
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <a href="#">Learn More</a>
                    </div>
                </div>
                <div className="crd_lt">
                    <div className="lt_b">
                        <img src={r_1} alt="R_1" />
                    </div>
                    <div className="lt_b1">
                        <div className="user">
                            <p> <CiUser /> Admin</p>
                            <p> <BiCalendar/> 07/11/2021</p>
                        </div>
                   
                    <h2>Business Plans That Fit Your Best Blog</h2>
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <a href="#">Learn More</a>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Latest