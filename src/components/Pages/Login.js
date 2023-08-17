import React, { useState } from 'react'
import classroom from "./../../assets/classroom.png"
import "./login.css"
import { AiOutlineEyeInvisible} from "react-icons/ai"
import { NavLink } from 'reactstrap'
import Navbar from './../navbarfiles/Navbar'
import Footer from './../footerfiles/Footer'
import { useDispatch } from 'react-redux'
import { loginCtrl } from '../../Redux/Slices/userSlice'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function Login() {

  const [show, setShow] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async(e) =>{
    e.preventDefault()
    const form = new FormData(e.currentTarget)

    await axios.post(`${process.env.REACT_APP_API_URL}/login`, form)
    .then((res) => {
      if(res?.data?.message === "login successful"){
        dispatch(loginCtrl(res?.data?.token))
    navigate("/")
        toast.success("login successful")
      }
    })
    .catch((err) => console.log(err))

    
  }

  return (
    <>
    <Navbar/>
    <div data-aos="fade-zoom-in" className="login d-flex flex-column justify-content-center align-items-center">
      <div className="container-fluid">

        <div className="row align-items-lg-center  ">
          <div className="p-5 col-12 col-md-6 position-relative">
            <h3 className=''>LOGO</h3>

            <p className='heading'>WELCOME BACK</p>

            <div className="loginform  p-4">
              <p>Input Your Details</p>

              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="my-1">
                  <div className="form-label d-block">Email</div>
                  <input type="email" className="" name="email" />
                </div>

                <div className="pwd my-1">
                  <div className="form-label d-block">Password</div>
                 <div className="d-flex align-items-center position-relative">
                 <input type={`${show === false ? "password" : "text"}`} className="position-absolute" name="password" />
                  <AiOutlineEyeInvisible onClick={(e) => setShow(!show) } className='d-block ms-auto position-relative left-100' size={28}/>
                 </div>
                </div>

                <button className='my-3 btn btn-primary w-100'>Login</button>
               
              </form>

            </div>

            <small className='info p d-flex justify-content-center text-center mt-5'>Dont you have an account? <NavLink href='/signup' className='text-primary'>Signup</NavLink></small>
            
          </div>
          <div className="col-12 col-md-6 d-none d-md-block">
            <img src={classroom} alt="classroom" className='img-fluid classroom'/>

          </div>
        </div>

      </div>

      
    </div>

    <Footer/>
    </>
  )
}

export default Login