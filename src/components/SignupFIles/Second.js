import React, { useLayoutEffect, useState } from 'react'
import { BsArrowLeftCircle, BsArrowLeftSquare, BsArrowRightCircle, BsArrowRightSquare } from "react-icons/bs"
import "./../Pages/login.css"
import { AiOutlineEyeInvisible} from "react-icons/ai"
import { NavLink, Spinner } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addData, setPage, goBack, setId } from '../../Redux/Slices/onboardslice'
import axios from "axios"
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import TermsAndConditions from '../../assets/terms.pdf'

function Second() {
  const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const storedata =  useSelector(state => state.onboard.userData)

 

  const handleSubmit = async(e) =>{
    e.preventDefault()
    setLoading(true)
    const form = new FormData(e.currentTarget);
    
    const data = {
        course: form.get("course"),
        cohort: form.get("cohort"),
        center: form.get("center"),
        study: form.get("study"),
        agreement: form.get("agreement"),
    }

    

    let registerData = {
      course: data.course,
      cohort: data.cohort,
        center: data.center,
        mos: data.study,
        agreement: data.agreement,
      fname: storedata.fname,
      lname: storedata.lname,
      email: storedata.email,
      password: storedata.pwd,
      phone: storedata.phone,
      loc: storedata.location,
    }
    
    
   
    await axios.post(`${process.env.REACT_APP_API_URL}/register`, registerData, {
      headers:{
        "Content-Type": "multipart/form-data"
      }
    })
    .then((res) => {
      //alert("Register Successfully")
      setLoading(false)
      toast.success(res?.data?.message)
      dispatch(setId(res?.data?.info?.id))
      dispatch(setPage())
    
    })
    .catch((err) => toast.warn(err?.response?.data?.message))

    dispatch(addData(data))
    



  }

  const handleChange = (e) => {
    setChecked(e.target.checked)
  }

  const [courses, setCourses] = useState(null)
  const [cohorts, setcohorts] = useState(null)
  const [centers, setcenters] = useState(null)
  const [mos, setmos] = useState(null)
  const [checked, setChecked] = useState(false)
 



  useLayoutEffect(() =>{
    axios.get(`${process.env.REACT_APP_API_URL}/getcourse`)
    .then((res) => setCourses(res?.data))

    axios.get(`${process.env.REACT_APP_API_URL}/getmos`)
    .then((res) => setmos(res?.data))

    axios.get(`${process.env.REACT_APP_API_URL}/getcenter`)
    .then((res) => setcenters(res?.data))

    axios.get(`${process.env.REACT_APP_API_URL}/getcohort`)
    .then((res) => setcohorts(res?.data))
  }, [])

  return (
    <div data-aos="fade-zoom-in" className="login d-flex flex-column justify-content-center align-items-center">
      <div className="container-fluid">

       <div className="d-flex justify-content-evenly">
       <button className='btn btn-md btn-dark' onClick={() => dispatch(goBack())}>
          <BsArrowLeftSquare/>
        </button>

        <button className='btn btn-md btn-dark' onClick={() => dispatch(setPage())}>
          <BsArrowRightSquare/>
        </button>
       </div>

          <div className="p-md-5 ">
         
            

            <p className='heading my-3'>Start Your Application</p>

            <small>Step 2/3</small>

            <div className="loginform p-4 ">
              <p>Course Of Study</p>

              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="my-1">
                  <div className="form-label d-block">Course</div>
                  <select className="form-control" name="course"  >
                   {courses?.map(course =>(
                     <option value={course?.id}>{course?.title}</option>
                   ))}
                  </select>
                </div>
                
                <div className="my-1">
                  <div className="form-label d-block">Session</div>
                  <select className="form-control" name="cohort" >
                  {cohorts?.map(cohort =>(
                     <option value={cohort?.id}>{cohort?.title}</option>
                   ))}
                   
                  </select>
                </div>

                <div className="my-1">
                  <div className="form-label d-block">Center</div>
                  <select className="form-control" name="center" >
                  {centers?.map(center =>(
                     <option value={center?.id}>{center?.title}</option>
                   ))}
                  </select>
                </div>

                <div className="my-1">
                  <div className="form-label d-block">Mode Of Study</div>
                  <select className="form-control" name="study" >
                  {mos?.map(m =>(
                     <option value={m?.id}>{m?.title}</option>
                   ))}
                    
                  </select>
                </div>

                <div className="my-3 d-flex">
                  <input type="checkbox" className="agree" name="agreement" onChange={handleChange} />
                  <small className='ps-3'>Agree To Our<Link to={TermsAndConditions} target='_blank' className='d-inline text-primary text-decoration-none'> Terms And Conditions</Link></small>
                </div>

               

                <button className='my-3 btn btn-primary w-100'>
                  {loading === false ? "Continue" : <Spinner color='#fff' size={28}/>}
                </button>
               
              </form>

            </div>

            

            <small className='info p d-flex justify-content-center text-center mt-5'>I already have an account? <NavLink href='/login' className='text-primary'>Login</NavLink></small>
            
          </div>
         
        </div>

      </div>

      

  )
}

export default Second