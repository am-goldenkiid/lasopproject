import React from 'react'
import img from "./../../../assets/Notifications.svg"
import lamp from "./../../../assets/lamp-on.svg"
import "./syllabus.css"
import { Link } from 'react-router-dom'
function Syllabus() {

  const datas =[
    {id: 1, title:"UI/UX Syllabus"},
    {id: 2, title:"Frontend Syllabus"},
    {id: 3, title:"FullSatck Syllabus"},
    {id: 4, title:"Backend Syllabus"},
    {id: 5, title:"Data&AI Syllabus"},
    {id: 6, title:"MobileDev Syllabus"},
  ]

  return (
   <div className="syllabus">
    <h3>Syllabus</h3>
    <hr className="border-primary border-2" />

    <div className="container p-3">
      <div className="row g-2">
      {datas?.map((data) =>(
               <Link key={data?.id} className="col-md-3 col-6 border border-primary rounded " to="/dashboard/syllabus?id=1">
                  <div className="d-flex justify-content-between align-items-center">
                    <p>{data?.title}</p>
                    <img src={img} alt="" className='syl-img'/>
                  </div>

                 <div className='d-flex justify-content-center'>
                  <img src={lamp} alt="lamp" />
                  <small>click to open folder</small>
                 </div>
               </Link>
      ))}
      </div>
    </div>
   </div>
  )
}

export default Syllabus