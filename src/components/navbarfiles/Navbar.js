import React from 'react'
import './Navbar.css'
import {NavLink} from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginCtrl } from '../../Redux/Slices/userSlice'

function Navbar() {

  const dispatch = useDispatch()

  const login = useSelector((state) => state?.user?.login)


  const handleLogout = () => dispatch(loginCtrl())

  return (
    <div>
        <nav className="navbar navbar-expand-lg ">
       <div className="container">
    <NavLink className="nav-logo ms-md-5" href="/">
      <img src="./../../../images/logo.png" alt="logo" />
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav align-items-center ms-auto mb-2 mb-lg-0">
       
       
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" href="/course/2">Fullstack Development <span className='arro'> &#8594;</span></NavLink></li>
            <li><NavLink className="dropdown-item" href="/course/1">Frontend Development <span className='arr'> &#8594;</span></NavLink></li>
          
            <li><NavLink className="dropdown-item" href="/course/3">Backend Development<span className='arrs'> &#8594;</span></NavLink></li>
            <li><NavLink className="dropdown-item" href="/course/0">UI/UX Design <span className='arrow'>&#8594;</span></NavLink></li>
            <li><NavLink className="dropdown-item" href="/course/4">App Development <span className='aro'>&#8594;</span></NavLink></li>
            <li><NavLink className="dropdown-item" href="/course/5">Data Science & AI <span className='aro'>&#8594;</span></NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link " href='/about'>About</Link>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " href='/faq'>FAQs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " href='/blog'>Blog</NavLink>
        </li>
        {
          login === true ?
         <div class="dropdown admin open">
          <button class="btn  btn-sm dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
                Admin
              </button>
          <div class="dropdown-menu py-1 px-2 " aria-labelledby="triggerId">
            
            <Link class="dropdown-item text-start mb-2 fw-bold" to="/dashboard/home">Dashboard</Link>
            <button onClick={handleLogout} className="btn btn-sm btn-danger w-100">Logout</button>
          </div>
         </div>
        :
        <li className="nav-item">
          <NavLink className="nav-link " href='/login'>Login</NavLink>
        </li>
        
        }
      </ul>
      <form className="d-flex" role="search">
         <NavLink href='/signup'>
        <button className="btn btn-primary start" type="button" >Get Started</button>
        </NavLink>
        <NavLink to='hire'>
        <button  className="hire" type="submit">Hire</button>
        </NavLink>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar