import React from 'react'
import { Link } from 'react-router-dom/dist';
import { BsWhatsapp } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import axios from 'axios';
import {toast} from "react-toastify"


function CallToAction() {

  const handleSubmit = async(e) =>{
    e.preventDefault()

    const form = new FormData(e.currentTarget)

    axios?.post(`${process.env.REACT_APP_API_URL}/prospectus`, form)
    .then((res) =>{
      if(res?.data?.message === 'success'){
        window.open("./faq.css", '_blank');
      }
    })
    .catch((err) => {
      if(err?.response?.data?.message === "fields cannot be empty"){
        toast.warn(err?.response?.data?.message)
      }
    })

  }

  return (
    <>
    <div className="sidebar position-fixed top-50  translate-middle-y  z-3 end-0 ">
    <button type="button" class="btn btn-lg d-block" data-bs-toggle="modal" data-bs-target="#modalId">
       <img style={{width: "5rem"}} src="./../../../images/Prospectus.png" alt="" />
     </button>
    <Link to="https://wa.me/+2347025713326" target='_blank' class="btn my-1 text-success btn-lg d-block">
       <BsWhatsapp/>
     </Link>
    <Link to="https://facebook.com/lasopdotnet" target='_blank' class="btn my-1 text-primary btn-lg d-block">
       <FaFacebook/>
     </Link>
    <Link to="https://www.instagram.com/lasopdotnet" target='_blank' class="btn my-1 text-danger btn-lg d-block">
       <FaInstagram/>
     </Link>

    <Link to="https://linkedin.com/company/lasopdotnet" target='_blank' class="btn my-1 text-primary btn-lg d-block">
       <AiFillLinkedin/>
     </Link>

    <Link to="https://twitter.com/Lasopdotnet" target='_blank' class="btn my-1 text-info btn-lg d-block">
       <FaTwitter/>
     </Link>
    </div>

    <div class="modal fade" id="modalId" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-md" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalTitleId">Prospectus</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className='my-2'>
                  <label htmlFor="" className='form-label'>Full Name</label>
                  <input name="fullname" type="text" className="form-control" />
                </div>
                <div className='my-2'>
                  <label htmlFor="" className='form-label'>Email</label>
                  <input name="email" type="email" className="form-control" />
                </div>

                <div className='my-2'>
                  <label htmlFor="" className='form-label'>Phone Number</label>
                  <input name="phone" type="text" className="form-control" />
                </div>

                <button type='submit' className="btn btn-success w-100">Receive Prospectus In Your Mail</button>
              </form>
            </div>
           
          </div>
        </div>
      </div>

    </>
  )
}

export default CallToAction