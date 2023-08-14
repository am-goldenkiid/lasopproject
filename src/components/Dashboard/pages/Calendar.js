import React, { useState } from 'react'
import { FaEye, FaGreaterThan, FaLessThan } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { BsFilter, BsPlus, BsThreeDots } from 'react-icons/bs'
import { CiLocationArrow1 } from "react-icons/ci"
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
function Calendar() {

    const [activeTab, setActiveTab] = useState(0)
    const [pagination, setPagination] = useState(1)
    const [notificationOpen, setNotificationOpen] = useState(false)

    const toggleNotification = () => setNotificationOpen((prevState) => !prevState);

    const data = [
        { id: 1, chrt: "OGBA FEB Weekdays", code: "FEBOG1", start: "feb 23, 2023", end: "july 30, 2023", },
        { id: 2, chrt: "OGBA FEB Weekdays", code: "FEBOG1", start: "feb 23, 2023", end: "july 30, 2023", },
        { id: 3, chrt: "OGBA FEB Weekdays", code: "FEBOG1", start: "feb 23, 2023", end: "july 30, 2023", },
        { id: 4, chrt: "OGBA FEB Weekdays", code: "FEBOG1", start: "feb 23, 2023", end: "july 30, 2023", },
        { id: 5, chrt: "OGBA FEB Weekdays", code: "FEBOG1", start: "feb 23, 2023", end: "july 30, 2023ra" },
        { id: 6, chrt: "OGBA FEB Weekdays", code: "FEBOG1", start: "feb 23, 2023", end: "july 30, 2023", },
        { id: 7, chrt: "OGBA FEB Weekdays", code: "FEBOG1", start: "feb 23, 2023", end: "july 30, 2023", },
        { id: 8, chrt: "OGBA FEB Weekdays", code: "FEBOG1", start: "feb 23, 2023", end: "july 30, 2023", },
    ]


    return (
        <div className="students">

            <div className="p-3 container-fluid d-flex justify-content-between flex-md-row flex-column">
                <h5 className='h3'>Calendar</h5>

                <div className="d-flex gap-3 ">


                    <button type="button" class="btn btn-outline-primary px-3 d-flex  pt-1 rounded  btn-lg" data-bs-toggle="modal" data-bs-target="#share">

                        <div className="text-center">
                            <CiLocationArrow1 color="blue" size={20} />
                        </div>
                        <span className='text-primary'>Share</span>

                    </button>


                    <div class="modal fade" id="share" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalTitleId">Share</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <FacebookShareButton className='mx-1'>
                                        <FacebookIcon size={20} round />
                                    </FacebookShareButton>

                                    <TwitterShareButton className='mx-1'>
                                        <TwitterIcon size={20} round />
                                    </TwitterShareButton>

                                    <LinkedinShareButton className='mx-1'>
                                        <LinkedinIcon size={20} round />
                                    </LinkedinShareButton>

                                    <WhatsappShareButton className='mx-1'>
                                        <WhatsappIcon size={20} round />
                                    </WhatsappShareButton>
                                </div>

                            </div>
                        </div>
                    </div>




                    <form className='calendar d-flex gap-2'>
                        <div className='input-group border border-muted justify-content-around align-items-center'>
                            <BsFilter color='blue' />
                            <small>filter</small>
                            <select name="" className="">
                                <option value=""></option>
                                <option value="" className='form-control'>24hrs</option>
                            </select>
                        </div>

                    </form>

                    <Dropdown isOpen={notificationOpen} toggle={toggleNotification}>
                        <DropdownToggle className="bg-primary gap-1 d-flex align-items-center ">
                        
                        <span className='rounded border border-white d-flex justify-content-center align-items-center'>
                                <BsPlus color='#fff' />
                            </span>
                            create
                        
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem className=''>
                            <button type="button" class="btn btn-lg" data-bs-toggle="modal" data-bs-target="#addchrt">
                                Add Cohort
                            </button>
                            </DropdownItem>
                            <DropdownItem className=''>
                            <button type="button" class="btn btn-lg" data-bs-toggle="modal" data-bs-target="#addevent">
                                Add Event
                            </button>
                            </DropdownItem>
                            
                        </DropdownMenu>
                    </Dropdown>



                    <div class="modal fade" id="addchrt" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-scrollable  modal-md" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalTitleId">Add Calendar</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form >
                                        <div>
                                            <label htmlFor="" className='form-label'>Cohort Name</label>
                                            <input type="text" className="form-control" />
                                        </div>

                                        <div className='my-1'>
                                            <label htmlFor="" className='form-label'>Code</label>
                                            <input type="text" className="form-control" />
                                        </div>

                                        <div className='my-1'>
                                            <label htmlFor="" className='form-label'>Start</label>
                                            <input type="date" className="form-control" />
                                        </div>
                                        <div className='my-1'>
                                            <label htmlFor="" className='form-label'>End</label>
                                            <input type="date" className="form-control" />
                                        </div>

                                        <button className="btn btn-success w-100 mt-3">Add Calendar</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="addevent" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-scrollable  modal-md" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalTitleId">Add Event</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form >
                                        <div>
                                            <label htmlFor="" className='form-label'>Event Title</label>
                                            <input type="text" className="form-control" />
                                        </div>

                                        <div className='my-1'>
                                            <label htmlFor="" className='form-label'>Cohort Related</label>
                                            <select name="" className=" form-select ">
                                                <option value=""  className=' form-control '>ui/ux</option>
                                                <option value=""  className=' form-control '>fullstack</option>
                                            </select>
                                        </div>

                                        <div className='my-1'>
                                            <label htmlFor="" className='form-label'>Event Date</label>
                                            <input type="date" className="form-control" />
                                        </div>
                                       

                                        <button className="btn btn-success w-100 mt-3">Add Calendar</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>



                </div>
            </div>

            <ul className="nav my-2">
                {["FullStack", "Frontend", "Backend", "UI/UX", "Data & AI", "Mobile Dev"]?.map((tab, i) => (
                    <li key={i} onClick={() => setActiveTab(i)} className={`h6 nav-item mx-2 ${activeTab === i && "border-bottom border-primary border-5"}`}>{tab}</li>
                ))}
            </ul>

            <div className="applicants-table table-responsive-md container">
                <table class="table text-center">
                    <thead className='' style={{ backgroundColor: "#9EA9BD" }}>
                        <tr>
                            <th scope="col">S/N</th>
                            <th scope="col">Cohort</th>
                            <th scope="col">Code</th>
                            <th scope="col">Start</th>
                            <th scope="col">End</th>

                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((d, i) => (
                            <tr key={d?.id}>
                                <td scope="row">{d?.id}</td>
                                <td>{d?.chrt}</td>
                                <td>{d?.code}</td>
                                <td>{d?.start}</td>
                                <td>{d?.end}</td>

                                <Link className='nav-link' to={""}>
                                    <div className='mb-1 '>

                                        <BsThreeDots />

                                    </div>
                                </Link>

                            </tr>
                        ))}



                    </tbody>
                </table>
            </div>

            <div className='align-items-center d-flex justify-content-end'>
                <FaLessThan color='#0d6efd' size={18} />
                <div className='mx-2'>
                    {[1, 2, 3]?.map((n, i) => (
                        <button onClick={() => setPagination(n)} key={i} className={`btn ${pagination === n && "bg-primary text-white"}`}>{n}</button>
                    ))}
                </div>
                <FaGreaterThan color='#0d6efd' size={18} />
            </div>
        </div>
    )
}

export default Calendar