import React from 'react'
import "./customer.css"
import elli from "../../assets/Ellipse 7.png"
import star from "../../assets/star.png"
import quote from "../../assets/quote.png"
import pa_cus from "../../assets/Pagination.png"

const Customer = () => {
  return (
    <div id='customer'>
        <div className="container">
        <div className="cus_m">
                <h2>We Care About Our Customer Experience Too</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
            <div className="cus_card">
                <div className="card">
                    <div className="card_bdy">
                        <div className="cr_im">
                         <img src={elli} alt="elli" />
                         <img src={star} className='star1' alt="star" />
                         </div>
                         <p className='para'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                       
                         <div className="icon">
                         <h2>Mahid Ahmed</h2>
                         <h3>UX Designer</h3>
                         <img src={quote} alt="" />
                         


                         </div>
                    </div>

                </div>
                <div className="card">
                    <div className="card_bdy">
                        <div className="cr_im">
                         <img src={elli} alt="elli" />
                         <img src={star} className='star1' alt="star" />
                         </div>
                         <p className='para'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                       
                         <div className="icon">
                         <h2>Mahid Ahmed</h2>
                         <h3>UX Designer</h3>
                         <img src={quote} alt="" />
                         


                         </div>
                    </div>

                </div>
                <div className="card">
                    <div className="card_bdy">
                        <div className="cr_im">
                         <img src={elli} alt="elli" />
                         <img src={star} className='star1' alt="star" />
                         </div>
                         <p className='para'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                       
                         <div className="icon">
                         <h2>Mahid Ahmed</h2>
                         <h3>UX Designer</h3>
                         <img src={quote} alt="" />
                         


                         </div>
                    </div>

                </div>
                <div className="cus_p">
                    <img src={pa_cus} alt="" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Customer