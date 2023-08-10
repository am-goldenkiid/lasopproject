import React from 'react'
import { FaGripHorizontal, FaUserCircle } from 'react-icons/fa'
import "./staffprofile.css"
import img from "./../../../assets/user1.png"
import before from "./../../../assets/profile-circle.svg"
import after from "./../../../assets/Line.png"
import message from "./../../../assets/messages.svg"
import { Link } from 'react-router-dom'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'

function StudentProfile({ id }) {
    return (
        <div className="profile">
            <div className='border-bottom border-primary border-1 p-1'>
                <div className="row justify-content-between">
                    <div className="col-md-6 col-12"><h3> Student/Profile</h3></div>
                    <div className="col-12 col-md-6">
                        <div className="d-flex gap-2 justify-content-md-end justify-content-center">
                            <div className="border border-primary rounded p-1">
                                <img src={message} alt="message" />
                                <p className="text-primary d-inline">message</p>
                            </div>
                            <div className="rounded p-1">
                              <Dropdown >
                                <DropdownToggle className='bg-white'>
                                <FaGripHorizontal color='#999'/>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem className="">
                                    <Link className='nav-link'>Confirm Payment</Link>
                                    </DropdownItem>
                                    <DropdownItem className="">
                                    <Link className='nav-link'>Re-admit</Link>
                                    </DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="info">
                <div className="topinfo">
                    <div className=' '>
                        <small className='ms-2'>PERSONAL INFORMATION</small>
                    </div>

                    <div className="info-body py-3">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-3 col-sm-6 col-12">
                                    <img src={img} alt="profile" />
                                </div>
                                <div className="col-md-3 col-sm-6 col-12">
                                    <div>
                                        <label htmlFor="">Name</label>
                                        <h6>Yusuf Jimoh</h6>
                                    </div>
                                    <div>
                                        <label htmlFor="">Phone Number</label>
                                        <h6>0987654568</h6>
                                    </div>

                                    <div>
                                        <label htmlFor="">Current Address</label>
                                        <h6>No, 2 Ajah cresent road</h6>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-12">
                                    <div>
                                        <label htmlFor="">Sex</label>
                                        <h6>Male</h6>
                                    </div>
                                    <div>
                                        <label htmlFor="">Status</label>
                                        <h6>Paid</h6>
                                    </div>
                                    <div>
                                        <label htmlFor="">Registration Date</label>
                                        <h6>11/11/2022</h6>
                                    </div>

                                </div>
                                <div className="col-md-3 col-sm-6 col-12">
                                    <div>
                                        <label htmlFor="">Deffered To</label>
                                        <h6>11/01/2023</h6>
                                    </div>
                                    <div>
                                        <label htmlFor="">Cohort</label>
                                        <h6>1.0</h6>
                                    </div>
                                    <div>
                                        <label className='' htmlFor="">Center</label>
                                        <h6 className=''>Online</h6>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottominfo">
                    <div>
                        <small className='ms-2'>COURSE INFORMATION</small>
                    </div>

                    <div className="info-body py-3">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-3 col-sm-6 col-12">
                                    <img src={img} alt="profile" />
                                </div>
                                <div className="col-md-3 col-sm-6 col-12">
                                    <div>
                                        <label htmlFor="">Course Of Study</label>
                                        <h6>Frontend Development</h6>
                                    </div>
                                    <div>
                                        <label htmlFor="">Course Duration</label>
                                        <h6>12weeks</h6>
                                    </div>
                                    <div>
                                        <label htmlFor="">Started</label>
                                        <h6>Mar 16, 2023</h6>
                                    </div>

                                </div>
                                <div className="col-md-3 col-sm-6 col-12">
                                    <div>
                                        <label htmlFor="">Tuition Fee</label>
                                        <h6>200,000</h6>
                                    </div>
                                    <div>
                                        <label htmlFor="">Fee Balance</label>
                                        <h6>None</h6>
                                    </div>
                                    <div>
                                        <label htmlFor="">Due Date </label>
                                        <h6>None</h6>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentProfile