import React, { useEffect, useState, useRef } from 'react'
import { FaPlus } from 'react-icons/fa'
import "./syllabus.css"
import more from "./../../../assets/more.svg"
import bookmark from "./../../../assets/book.svg"
import addItem from "./../../../assets/additem.svg"
import book from "./../../../assets/Notifications2.svg"
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { AiOutlineSend, AiOutlineDelete } from "react-icons/ai"
import { HiOutlineDownload } from "react-icons/hi"
import { data } from './MyChart'
import { useDispatch, useSelector } from 'react-redux'
import { addFiles } from '../../../Redux/Slices/cohortslice'

function Cohortsyllabus() {

  const datas = [
    { id: 1, title: "UI/UX Cohort 1" },
    { id: 2, title: "UI/UX Cohort 1" },
    { id: 3, title: "UI/UX Cohort 1" },
    { id: 4, title: "UI/UX Cohort 1" },
    { id: 5, title: "UI/UX Cohort 1" },
    { id: 6, title: "UI/UX Cohort 1" },
    { id: 7, title: "UI/UX Cohort 1" },
    { id: 8, title: "UI/UX Cohort 1" },
    { id: 9, title: "UI/UX Cohort 1" },
    { id: 10, title: "UI/UX Cohort 1" },
    { id: 11, title: "UI/UX Cohort 1" },
    { id: 12, title: "UI/UX Cohort 1" },

  ]

  const [modal, setModal] = useState(false);
  const [add, setAdd] = useState(false);
  const [addIns, setAddIns] = useState(false);



  const toggle = () => setModal(!modal);
  const toggleAdd = () => setAdd(!add);
  const toggleAddIns = () => setAddIns(!addIns);


  const dispatch = useDispatch()

 const handleUpload = async(e) =>{
    dispatch(addFiles(e.target.files))
 }

 const data = useSelector((state) => state.cohort.upload)

 const syllabusUpload = async(e) =>{
  e.preventDefault()
  const form = new FormData()
  form.append('files', data)
  console.log(form.get("files"))
 }


  return (
    <div className='chrtSyllab'>
      <div className="d-flex justify-content-between">
        <h3>Syllabus/UI/UX</h3>
        <button onClick={toggleAdd} type="button" data-toggle="modal" data-target="#add" className="btn btn-outline-primary d-flex align-items-center justify-content-between">
          <div className="icon">
            <FaPlus color='#0D6EFD' size={16} />
          </div>
          <small className='px-1'>Add</small>
        </button>

        <Modal isOpen={add} toggle={toggleAdd} fullscreen="sm" size='sm' backdrop={false}>
          <ModalHeader toggle={toggleAdd} className='d-flex'>
            <img src={bookmark} alt="" />
            <p className='text-primary modalhead'>Add a new syllabus</p>
          </ModalHeader>
          <ModalBody>
            <div className='my-2 d-flex justify-content-center align-items-center flex-column'>
              <input type="file" hidden id='addsyl' multiple  onChange={(e) => handleUpload(e)} />
              <label htmlFor="addsyl">
                <img className='' src={addItem} alt="" />
              </label>

              <button onClick={toggleAddIns} type="button" data-toggle="modal" data-target="#add" className="btn btn-secondary mt-3 ">Add Syllabus</button>

              <Modal isOpen={addIns} toggle={toggleAddIns} fullscreen="sm" size='sm' backdrop={false}>
                <ModalHeader toggle={toggleAddIns} className='d-flex'>
                  <img src={bookmark} alt="" />
                  <p className='text-primary modalhead'>Add a new syllabus</p>
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={syllabusUpload}>
                    {data?.map((dt, i) =>(
                      <div key={i}>
                      <label htmlFor="" className="form-label text-primary">{dt?.name}</label>
                      
                     </div>
                    ))}

                      <button type='submit' className="btn btn-md btn-primary w-100">Add Syllabus</button>
                  
                    </form>
                </ModalBody>

              </Modal>
            </div>



          </ModalBody>

        </Modal>
      </div>
      <hr className="border-primary border-2" />


      <div className="container p-3">
        <div className="row g-2">
          {datas?.map((data) => (
            <div key={data?.id} className="col-md-3 col-6 border border-primary rounded " to="/dashboard/syllabus?id=1">
              <div className="d-flex justify-content-between align-items-center">

                <img src={book} alt="" className='syl-img' />
                <button onClick={toggle} type="button" data-toggle="modal" data-target="#options" className='btn'><img src={more} alt="" className='syl-img' /></button>
              </div>

              <p className='fw-bold'>{data?.title}</p>

              <Modal isOpen={modal} toggle={toggle} fullscreen="sm" size='sm' backdrop={false}>
                <ModalHeader toggle={toggle}></ModalHeader>
                <ModalBody>
                  <div className="d-flex justify-content-between my-1">
                    <h6>Share</h6>
                    <AiOutlineSend color='#0d6efd' />
                  </div>
                  <div className="d-flex justify-content-between my-1">
                    <h6>Download</h6>
                    <HiOutlineDownload color='#0d6efd' />
                  </div>
                  <div className="d-flex justify-content-between my-1">
                    <h6>Delete</h6>
                    <AiOutlineDelete color='#ba1a1a' />
                  </div>
                </ModalBody>

              </Modal>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cohortsyllabus