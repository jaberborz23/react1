import React from 'react'
import "./banner.css"
import banner from "../../assets/banner.png"
 
import grp3 from "../../assets/Group (3).png"
import grp4 from "../../assets/Group (10).png"
import grp5 from "../../assets/Group (8).png"
import grp6 from "../../assets/Group (9).png"
import grp7 from "../../assets/Group (7).png"
import grp8 from "../../assets/Group.png"
import grpfr from "../../assets/frame.png"

const Banner = () => {
  return (
    <div id='bann'>
      <div className="container">
        <div className="bn_fr">
          <div className="bn_txt">
            <h1>We Are Digital Product Design Agency</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <a className='BAN' href="#">Get Started</a>
          </div>
          <div className="bn_im">
            <img src={banner} alt="" />
          </div>

        </div>
     
        {/* <div className="main">
          <div className="bn_txt">
            <h1>We Are Digital Product Design Agency</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <a href="#">Get Started</a>

          </div>
          <div className="bn_im">

            <img src={grp1} className='im_1' alt="bn_im" />
            <img src={grp2} className='im_2'  alt="bn_im2" />
            <img src={grp3} className='im_3' alt="bn_im3" />
            <img src={grp4} className='im_4' alt="bn_im4" />
            <img src={grp5} className='im_5' alt="bn_im5" />
            <img src={grp6}className='im_6' alt="bn_im6" />
            <img src={grp7} className='im_7' alt="bn_im7" />
            <img src={grp8} className='im_8'  alt="bn_im8" />
            <img src={grpfr} className='im_8'  alt="bn_im8" />
          </div>
        </div> */}
      </div>

    </div>
  )
}

export default Banner