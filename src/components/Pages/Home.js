import React from 'react'
import Navbar from './../navbarfiles/Navbar'
import Footer from './../footerfiles/Footer'
import bannerImg from "./../../assets/Image.svg"
import line from "./../../assets/Line 12.svg"
import outline from "./../../assets/outline.png"
import { BiCalendar } from 'react-icons/bi'
import { RxDividerVertical } from "react-icons/rx"
import { Link, NavLink } from 'react-router-dom'
import { TbMathGreater } from "react-icons/tb"
import { FaArrowRight, FaFacebook } from "react-icons/fa"
import Advert from '../common/Advertsection'
import Testimony from '../common/Testimony'
import Faq from '../common/Faq'
import Getstarted from '../common/Getstarted'
import doubleline from "./../../assets/double.png"
import {TfiEmail } from "react-icons/tfi"
import { BsWhatsapp } from "react-icons/bs"

import "./home.css"
import Blogcard from '../common/Blogcard'
import LearnEarn from '../common/LearnEarn'
import OurProgram from '../common/OurProgram'

function Home() {

  let blogdata = [
    {
        id: 1, title: "Blog new & stories", time: "10 min",
        date: "Mar 02, 2023", body: "Good user experience design starts with good research and strategy to address user problems. Learn the foundational concepts of Design Thinkin"
    },
    {
        id: 2, title: "Blog new & stories", time: "10 min",
        date: "Mar 02, 2023", body: "concepts of Design Thinkin"
    },
    {
        id: 3, title: "Blog new & stories", time: "10 min",
        date: "Mar 02, 2023", body: "Good user experience design starts with good research and strategy to address user problems. Learn the foundational concepts of Design Thinkin"
    },
]

  const cardsData = [
    {
      title: "fullstack development",
      info: "Learn to create professional, responsive websites using HTML, CSS, Bootstrap, JavaScript, JQuery, React, Python, Django & SQL.",
      img: "full.png"
    },
    {
      title: "mobile app development",
      info: "Learn to create mobile UI designs with native frameworks or cross-platform frameworks, React Native, Flutter",
      img: "mob.png"
    },
    {
      title: "frontend development",
      info: "Learn to create professional, responsive websites using HTML, CSS, Bootstrap, JavaScript, JQuery, React, & SQL.",
      img: "full.png"
    },
    {
      title: "backend development",
      info: "Learn Python, and its framework Django. Or  Node and Express.NET if your interest is to become a Nodejs developer.",
      img: "backend.png"
    },
    {
      title: "UI/UX design",
      info: "Learn design thinking, wireframes, interactive prototyping. Earn a UX design certification to accelerate your career with cutting-edge skills.",
      img: "ui.png"
    },
    {
      title: "Data science and AI",
      info: "Dive into prescriptive and predictive analytics, machine learning, artificial intelligence, statistical analysis, and programming languages.",
      img: "ds.png"
    },
  ]



  return (
    <>
      <Navbar />
      <div className="home">
        <div className="banner p-3">
          <div className="container p-md-5 p-1">
            <div className="row align-items-center">
              <div className='col-md-6 col-12 px-4'>
                <h2 className="h2"> Empower yourself with technical skills to shape the future </h2>
                <p className='p'>Transform your passion for technology into a rewarding career and take your coding skills to the next level with our practical, industry-focused training programs.</p>
                <div className='info-btn container-fluid'>
                  <div className="row align-items-center gap-1">


                  </div>
                </div>
              </div>

              <div className="col-md-6 col-12 my-3 my-md-0">
                <img className='img-fluid' src={bannerImg} alt="banner" />
              </div>
            </div>

          </div>
        </div>

        <div className="next-cohort w-75 m-auto p-3 my-5 rounded border border-primary ">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-5 col-12 d-flex justify-content-between align-items-center">
              <div className=''>
                <h6 className='small'><BiCalendar /> Next cohort starts:</h6>
                <h4>June 08</h4>
                <h6 className='small'>9:30am - 2:30pm WAT</h6>
              </div>
              <button className="btn-sm btn btn-primary">Enroll Now</button>
            </div>

            <div className="col-md-2 col-12 text-md-center">
              <RxDividerVertical size={40} />
            </div>

            <div className="col-md-5 col-12 flex-column flex-md-row d-flex align-items-md-center justify-content-around">
              <h6 className='small text-capitalize'>Find Another cohort <br /> that fit your schedule</h6>

              <NavLink href="" className="mb-2 border border-primary text-center p-md-2 p-1 small text-primary rounded">
                <small>see all cohorts</small>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="outline">
          <h6 className="text-center h2">Course Outline</h6>
          <img src={outline} className="d-block m-auto img-fluid" alt="outline" />

        </div>


        <div className="cards container p-4">
          <div className="row gap-md-0 gap-3">
            {cardsData?.map((data, i) => (
              <div key={i} className="col-md-4 my-2">
                <div className="card p-3">
                  <img src={`./../../../images/${data?.img}`} alt={data?.title} className="card-img-top img-fluid" />
                  <h5 className='my-3 text-capitalize '>{data?.title}</h5>
                  <p>{data?.info}</p>
                  <div className="border w-50 rounded p-2 border-primary d-flex gap-3 align-items-center">
                    <Link className='fw-bold'>learn more</Link>
                    <TbMathGreater color='#000066' />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

       <div className="learn_earn">
       <LearnEarn/>
       </div>

       <div className="ourprogram">
          <OurProgram/>
       </div>

        <div className="advert p-5">
     <Advert/>
     </div>



     <div className="testimony">
      <Testimony/>
     </div>

     <div className="faq p-md-5">

     <h4 className='text-center text-white text-capitalize '>frequently asked questions</h4>
        <img src={doubleline} className='doubleline' alt="" />

      <Faq/>
     </div>

     <div className="getstarted p-5">
      <Getstarted/>
     </div>

     <div className="event p-5">

      <h5 className='text-center'>Upcoming Events, News and Blogs</h5>

      <img className='doubleline' src={doubleline} alt="line" />

      <Blogcard blogdata={blogdata}/>

     <div className="d-flex ">
     <div className='d-flex justify-content-center bg-white viewall my-4 my-md-0  '>
        <p className='me-3'>View all blogs</p>
       <div className="mt-0"> <FaArrowRight/></div>
      </div>

     <div className="sidebar position-fixed top-50 end-0 ">
     <button type="button" class="btn btn-primary btn-lg d-block" data-bs-toggle="modal" data-bs-target="#modalId">
        <TfiEmail/>
      </button>
     <Link to="https://wa.me/+2347025713326" target='_blank' class="btn my-1 btn-success btn-lg d-block">
        <BsWhatsapp/>
      </Link>
     <Link to="https://facebook.com/lasop" target='_blank' class="btn my-1 btn-primary btn-lg d-block">
        <FaFacebook/>
      </Link>
     </div>
      
      
     
      <div class="modal fade" id="modalId" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-md" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalTitleId">Subscribe</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div className='my-2'>
                  <label htmlFor="" className='form-label'>Full Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className='my-2'>
                  <label htmlFor="" className='form-label'>Email</label>
                  <input type="email" className="form-control" />
                </div>

                <div className='my-2'>
                  <label htmlFor="" className='form-label'>Phone Number</label>
                  <input type="text" className="form-control" />
                </div>

                <button className="btn btn-success">Receive Prospectus In Your Mail</button>
              </form>
            </div>
           
          </div>
        </div>
      </div>
      
      
     

     </div>

     </div>
      </div>

    


      <Footer />
    </>
  )
}

export default Home