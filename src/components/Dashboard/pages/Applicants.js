import React, { useState } from 'react'
import TopForm from './TopForm'
import { FaAlignLeft, FaEye, FaGreaterThan, FaLessThan } from 'react-icons/fa'

function Applicants() {

    const [pagination, setPagination] = useState(1)

    const data = [
        { id: 1, name: "Nathan", course: "UI/UX", mode: "Weekdays", center: "Online", status: "paid", date: new Date().toLocaleDateString() },
        { id: 2, name: "Nathan", course: "UI/UX", mode: "Weekdays", center: "Online", status: "paid", date: new Date().toLocaleDateString() },
        { id: 3, name: "Nathan", course: "UI/UX", mode: "Weekdays", center: "Online", status: "paid", date: new Date().toLocaleDateString() },
        { id: 4, name: "Nathan", course: "UI/UX", mode: "Weekdays", center: "Online", status: "paid", date: new Date().toLocaleDateString() },
        { id: 5, name: "Nathan", course: "UI/UX", mode: "Weekdays", center: "Olowoira", status: "unpaid", date: new Date().toLocaleDateString() },
        { id: 6, name: "Nathan", course: "UI/UX", mode: "Weekdays", center: "Online", status: "unpaid", date: new Date().toLocaleDateString() },
        { id: 7, name: "Nathan", course: "UI/UX", mode: "Weekdays", center: "Online", status: "paid", date: new Date().toLocaleDateString() },
        { id: 8, name: "Nathan", course: "UI/UX", mode: "Weekdays", center: "Online", status: "paid", date: new Date().toLocaleDateString() },
    ]

    return (
        <div className="applicants">
            <TopForm title="Applicants" />

            <div className="applicants-table table-responsive-md container">
                <table class="table text-center">
                    <thead className='' style={{ backgroundColor: "#9EA9BD" }}>
                        <tr>
                            <th scope="col">S/N</th>
                            <th scope="col">Name</th>
                            <th scope="col">Course</th>
                            <th scope="col">Mode</th>
                            <th scope="col">Center</th>
                            <th scope="col">Status</th>
                            <th scope="col">Date</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((d, i) => (
                            <tr key={d?.id}>
                                <td scope="row">{d?.id}</td>
                                <td>{d?.name}</td>
                                <td>{d?.course}</td>
                                <td>{d?.mode}</td>
                                <td>{d?.center}</td>
                                <td>{d?.status}</td>
                                <td>{d?.date}</td>
                                <div className='rounded  mb-1 d-flex border align-items-center justify-content-around border-primary'>
                                    <div><FaEye size={28} color='#0d6efd' /></div>
                                    <p className='text-primary m-auto'>view</p>
                                </div>

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

export default Applicants