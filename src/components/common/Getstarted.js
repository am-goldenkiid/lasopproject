import React from 'react'
import "./getstarted.css"
import doubleline from "./../../assets/double.png"
function Getstarted() {
    return (
        <div className="getstarted">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-5 ">
                        <h5 className='h5 fw-bold '>Everything You<br /> Need To Know To <br /> Get Started</h5>

                    </div>
                    <div className="col-md-2">
                        <img className='d-block  ' src={doubleline} alt="" />
                    </div>
                    <div className="col-md-5">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam alias a id molestias voluptatibus doloribus.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam alias a id molestias voluptatibus doloribus.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam alias a id molestias voluptatibus doloribus.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam alias a id molestias voluptatibus doloribus.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Getstarted