import axios from 'axios'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from "react-redux"


function Receipt() {

    const [datas, setDatas] = useState([])

    const dispatch = useDispatch()


    let modalref = useRef()

    // modalref.current.on('shown.bs.modal', function () {
    //     document.getElementById("modalId").style
    //  })

    const removeModal = () =>{
        document.querySelector(".modal").style.opacity = 1

    }

    function getData() {
        axios?.get(`${process.env.REACT_APP_API_URL}/getreceipt`)
            .then((res) => setDatas(res?.data?.data))
            .catch((err) => console.log(err))
    }

    useLayoutEffect(() => {

        getData()


        return () => {
            getData()
        }

    }, [])

    const handleClick = async (id) => {
        await axios?.get(`${process.env.REACT_APP_API_URL}/confirmreceipt/${id}`)
            .then((res) => {
                if (res?.data?.message === "success") {

                    window.location.reload()
                }
            })
            .catch((err) => {
                if (err?.response?.data?.message === "not found") {
                    toast.warn(err?.response?.data?.message)
                }
            })
    }

    return (
        <div className="receipt">
            <div className="container">




               




                <div className="row gap-3">
                    {datas?.length <= 0 ?

                    <h1 className='text-warning text-center  h1'>Empty</h1>

                        :

                        datas?.map((dt, i) => (
                            <div key={i} className="col-md-3">
                                <div className="card">
                                    <p className="m-2 fw-bold">{new Date(dt?.dateposted).toLocaleString()}</p>
                                    <img data-lightbox={dt?.img} src={dt?.img} alt="receipt" className="img-fluid  card-img-top" />
    
                                    <div className="card-footer d-flex align-items-center  justify-content-between ">
                                        <p className='fst-italic'>{dt?.status === 0 ? "pending" : "active"}</p>
                                        <button onClick={removeModal} type="button"  class="btn btn-dark btn-sm" data-bs-toggle="modal" data-bs-target="#modalId">
                                            FullView
                                        </button>
                                        {dt?.status === 0 && <button onClick={() => handleClick(dt?.userid)} className='btn btn-primary'>confirm</button>}
                                    </div>

                                    <div class="modal fade" id="modalId" tabindex="" data-backdrop="false" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-md" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalTitleId">Receipt</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <img src={dt?.img} alt="" />
                            </div>
                            
                        </div>
                    </div>
                </div>
                                </div>


                            </div>
                        ))
                    
                    }
                </div>
            </div>

        </div>
    )
}

export default Receipt