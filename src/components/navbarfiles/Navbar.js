import React, { useState, useLayoutEffect } from 'react'
import './Navbar.css'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { infoCtrl, loginCtrl } from '../../Redux/Slices/userSlice'
import axios from 'axios'

function Navbar() {

  const dispatch = useDispatch()

  const login = useSelector((state) => state?.user?.login)

  const token = useSelector((state) => state?.user?.token);

  const [user, setUser] = useState({})

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);


  useLayoutEffect(() => {

    axios.get(`${process.env.REACT_APP_API_URL}/profile`, {
      headers: {
        Authorization: token !== null && `Bearer ${token}`
      }
    }).then((res) => {
      dispatch(infoCtrl(res?.data?.info))
      setUser(res?.data?.info)
    })
      .catch((err) => console.log(err))

  }, [dispatch, token])



  const handleLogout = () => {
    dispatch(loginCtrl(null))
    dispatch(infoCtrl({}))
  }

  return (
    <nav className="navbar navbar-expand-md">
      <div className="container">
        <Link to="/" className="navbar-brand" href="#">
          <img className="nav-logo" src="./../../../images/logo.png" alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">

              <Dropdown isOpen={dropdownOpen} toggle={toggle} >
                <DropdownToggle className='' caret>Courses</DropdownToggle>
                <DropdownMenu >
                  <DropdownItem > <Link className='nav-link' to={"/course/4"}>App Development</Link> </DropdownItem>
                  <DropdownItem > <Link className='nav-link' to={"/course/2"}>FullStack</Link> </DropdownItem>
                  <DropdownItem > <Link className='nav-link' to={"/course/3"}>Backend</Link> </DropdownItem>
                  <DropdownItem > <Link className='nav-link' to={"/course/0"}>UI/UX</Link> </DropdownItem>
                  <DropdownItem > <Link className='nav-link' to={"/course/5"}>Data Science & AI</Link> </DropdownItem>
                  
                </DropdownMenu>
              </Dropdown>

              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faq">FAQs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>

              
             
            </ul>

            <div className="d-flex gap-3">
              <Link to="/signup" className="btn btn-primary">Get Started</Link>
              <Link to="/hire" className="btn btn-outline-primary">Hire</Link>
            </div>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar