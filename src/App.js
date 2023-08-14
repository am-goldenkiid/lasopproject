import React, { lazy, Suspense, useLayoutEffect } from 'react';
import { Spinner } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "aos/dist/aos.js"
import "aos/dist/aos.css"
import AOS from "aos"
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer} from 'react-toastify';

const Home = lazy(() => import("./components/Pages/Home"))
const Course = lazy(() => import("./components/Pages/Course"))
const Onboard = lazy(() => import("./components/Pages/Onboard"))
const Login = lazy(() => import("./components/Pages/Login"))
const Calendar = lazy(() => import("./components/Pages/Calendar"))
const Faq = lazy(() => import("./components/Pages/FaqPage"))
const About = lazy(() => import("./components/Pages/About"))
const Contact = lazy(() => import("./components/Pages/Contact"))
const Blog = lazy(() => import("./components/Pages/Blog"))
const Blogdetails = lazy(() => import("./components/Pages/Blogdetails"))
const Dashboard = lazy(() => import("./components/Dashboard/Layout"))



function App() {

  AOS.init({
    duration: 3000,
    easing: 'ease-in-out',
    delay: 100,
  })

  window.addEventListener("scroll", () => AOS.refresh());

  return (
    <Suspense>
      <Router>
       
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={ <Onboard/> }/>
          <Route path="/login" element={ <Login/> }/>
          <Route path="/calendar" element={ <Calendar/> }/>
          <Route path="/faq" element={ <Faq/> }/>
          <Route path="/contact" element={ <Contact/> }/>
          <Route path="/about" element={ <About/> }/>
          <Route path="/blog" element={ <Blog/> }/>
          <Route path="/blog/:id" element={<Blogdetails/>}/>
          <Route path="/course/:id" element={<Course/>}/>
          <Route path="/dashboard/:text/?" element={<Dashboard/>}/>
        </Routes>
      
      </Router>
      <ToastContainer
      position='top-center'
      />
    </Suspense>
  );
}

export default App;
