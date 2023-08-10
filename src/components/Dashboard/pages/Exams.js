// import React, { useState } from 'react'
// import flash from "./../../../assets/flash.svg"
// import { Link } from 'react-router-dom'
// function Exams() {

//   const data = [
//     { id: 1, title: "Sam Thompson", code: "EX-234", status: "inactive", duration: "120min", countdown:"inactive" },
//     { id: 2, title: "Sam Thompson", code: "EX-234", status: "inactive", duration: "120min", countdown:"inactive" },
//     { id: 3, title: "Sam Thompson", code: "EX-234", status: "inactive", duration: "120min", countdown:"inactive" },
//     { id: 4, title: "Sam Thompson", code: "EX-234", status: "inactive", duration: "120min", countdown:"inactive" },
//     { id: 5, title: "Sam Thompson", code: "EX-234", status: "inactive", duration: "120min", countdown:"inactive" },
//     { id: 6, title: "Sam Thompson", code: "EX-234", status: "inactive", duration: "120min", countdown:"inactive" },
//     { id: 7, title: "Sam Thompson", code: "EX-234", status: "inactive", duration: "120min", countdown:"inactive" },
//     { id: 8, title: "Sam Thompson", code: "EX-234", status: "inactive", duration: "120min", countdown:"inactive" },
// ]
//   const navdata = ["Fullstack", "Frontend", "Backend", "UI/UX", "Mobile Dev", "Data & AI"]

//   const [activeTab, setActiveTab] = useState(0)

//   return (
//     <div className="exams">
//         <h3>Exams</h3>
//         <hr className="border-primary border-2" />

//        <nav className='nav my-2'>
//        {navdata?.map((tab,i) =>(
//            <li key={i} onClick={() => setActiveTab(i)} className={`h6 nav-item mx-2 ${activeTab === i && "border-bottom border-primary border-5"}`}>{tab}</li> 
//         ))}
//        </nav>

//        <div className="exam-table table-responsive-md container">
//                 <table class="table text-center">
//                     <thead className='' style={{ backgroundColor: "#9EA9BD" }}>
//                         <tr>
//                             <th scope="col">S/N</th>
//                             <th scope="col">Title</th>
//                             <th scope="col">Code</th>
//                             <th scope="col">Status</th>
//                             <th scope="col">Duration</th>
//                             <th scope="col">CountDown</th>
                            
//                             <th scope="col"></th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data?.map((d, i) => (
//                             <tr key={d?.id} className='my-1'>
//                                 <td scope="row">{d?.id}</td>
//                                 <td>{d?.title}</td>
//                                 <td>{d?.code}</td>
//                                 <td className='' style={{backgroundColor: "#E4E2E6", borderRadius:".4rem"}}>{d?.status}</td>
//                                 <td>{d?.duration}</td>
//                                 <td>{d?.countdown}</td>
                        
                               
//                                <div className='rounded  mb-1 d-flex border align-items-center justify-content-around border-primary'>
//                                     <div><img src={flash} alt="" /></div>
//                                     <p className='text-primary m-auto'>Activate</p>
//                                 </div>
                              

//                             </tr>
//                         ))}



//                     </tbody>
//                 </table>
//             </div>

//     </div>
//   )
// }

// export default Exams

import React from 'react'

function Exams() {
  return (
    <div>Exams</div>
  )
}

export default Exams