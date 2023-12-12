import React from 'react'
import "./team.css"
import t_1 from "../../assets/team1.png"
import t_2 from "../../assets/team2.png"
import t_3 from "../../assets/team3.png"
import pag from "../../assets/Pagination.png"

const Team = () => {
  return (
    <div id='team'>
        <div className="container">
        <div className="ser_m">
                <h2>Our Expert Team Member</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
            <div className="t_man">
                <div className="t_1">
                    <img src={t_1} alt="t_1"  />
                    <div className="t_wr">
                        <div className="t_wr1">
                        <h2>Mahid Ahmed</h2>
                        <h3>UX Designer</h3>
                        </div>
                        
                    </div>
                           </div>
                           <div className="t_1">
                           <img src={t_2} alt="t_2"  />
                    <div className="t_wr">
                        <div className="t_wr1">
                        <h2>Hasan Imam</h2>
                        <h3>UI Designer</h3>
                        </div>
                        
                    </div>
                           </div>
                

                           <div className="t_1">
                           <img src={t_3} alt="t_3" />
                    <div className="t_wr">
                        <div className="t_wr1">
                        <h2>Kazi Afia</h2>
                        <h3>Digital Marketer</h3>
                        </div>
                        
                    </div>
                           </div>
               

            </div>
            <div className="t_pa">
                <img src={pag} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Team