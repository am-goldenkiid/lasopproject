import React from "react";
import { Button, Nav, NavItem, NavLink } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import Calendar from "./../../assets/calendar-2.svg";
import app from "./../../assets/profile-add.svg";
import note from "./../../assets/note.svg";
import home from "./../../assets/home1.png";
import Students from "./../../assets/profile-2user.svg";
import Teacher from "./../../assets/teacher.svg";
import Finance from "./../../assets/moneys.svg";
import result from "./../../assets/note.svg";
import syl from "./../../assets/bookmark.svg";
import logout from "./../../assets/logout.svg";

import { FaTimes } from "react-icons/fa";


const navigation = [
  {
    title: "Overview",
    href: "/dashboard/home/",
    icon: home,
  },
  {
    title: "Calendar",
    href: "/dashboard/calendar",
    icon: Calendar,
  },
  {
    title: "Applicants",
    href: "/dashboard/applicants/",
    icon: app,
  },
  {
    title: "Students",
    href: "/dashboard/students/",
    icon: Students,
  },
  
  {
    title: "Staffs",
    href: "/dashboard/staffs",
    icon: Teacher,
  },
  {
    title: "Finances",
    href: "/dashboard/finances",
    icon: Finance,
  },
  {
    title: "Syllabus",
    href: "/dashboard/syllabus",
    icon: syl,
  },
  {
    title: "Exam",
    href: "/dashboard/exam",
    icon: Finance,
  },

  {
    title: "Results",
    href: "/dashboard/results",
    icon: result,
  },
  {
    title: "Logout",
    href: "/dashboard/logout",
    icon: logout,
  },


];

const Sidebar = ({ sideBarArea }) => {
  const showMobilemenu = () => {
    sideBarArea.current.classList.toggle("showSidebar")
  };
  let location = useLocation();

  return (
    <div className="p-2 " >
      <div className="d-flex align-items-center flex-column justify-content-around gap-3">
        <button
          className="btn-light btn m-md-auto m-0 d-lg-none"
          onClick={() => showMobilemenu()}
        ><FaTimes /></button>
        <Link to="/" className="fw-bold text-decoration-none h2 text-primary py-0 py-md-3">LOGO</Link>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "sidebarActive rounded fw-bold nav-link py-3"
                    : "nav-link text-white py-3"
                }
              >
                <img src={navi.icon} />
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}


        </Nav>
          
         
      </div>
    </div>
  );
};

export default Sidebar;
