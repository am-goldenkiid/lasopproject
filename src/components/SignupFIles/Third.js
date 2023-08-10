import React, { useLayoutEffect, useState } from 'react'
import "./../Pages/login.css"
import { AiOutlineEyeInvisible} from "react-icons/ai"
import { NavLink } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { clearData, goBack } from '../../Redux/Slices/onboardslice'
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs'
import axios from 'axios'
import { toast } from 'react-toastify'
import { usePaystackPayment } from 'react-paystack';

function Third() {
   

    const dispatch = useDispatch()
    const userinfo = useSelector((state) => state?.onboard?.userData)
    let id = useSelector((state) => state?.onboard?.id)

    const [min, setMin ] = useState(null)
    const [availCourses, setAvailCourses] = useState([])
    const [amt, setAmount] = useState(0)
    
    const config = {
      reference: (new Date()).getTime().toString(),
      email: userinfo?.email,
      amount: amt * 100 , //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
      publicKey: 'pk_test_65a3830b44f0185c6a353cb387b9c8888459cd59',
      metadata:{
        id:id,
        fname: userinfo?.fname
      }
    }
//1688887834774 tid 2939062902
    const onSuccess = (reference) => {
      // Implementation for whatever you want to do with reference and after success call.
      axios.get(`https://api.paystack.co/transaction/verify/${reference?.reference}`,{
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_PAYSTACK_SECRET_KEY}`
        }
      }).then((res) => {
        if(res?.data?.status === "success") {
          toast.success("success")
        }else{
          toast.warn(res?.data?.status)
        }
      })
     
    };
  
    
    
    const onClose = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
    }
  
    const init = usePaystackPayment(config)
  
  

     useLayoutEffect(() =>{
      axios.get(`${process.env.REACT_APP_API_URL}/getcourse`)
      .then((response) => {
       let data = response?.data?.find((a) => a.id == userinfo?.course)

       setMin(data?.price/2)
     })

     }, [min])

  
  const handleSubmit = (e) =>{
    e.preventDefault()
   

    if(amt < min){
      toast.error("Amount must be at least N"+ min )
    }else{
      init(onSuccess, onClose)
    }
    

   // dispatch(clearData())

  }

  return (
    <div data-aos="fade-zoom-in" className="login d-flex flex-column justify-content-center align-items-center">
      <div className="container-fluid">

      <div className="d-flex justify-content-end">
       <button className='btn btn-md btn-dark' onClick={() => dispatch(goBack())}>
          <BsArrowLeftSquare/>
        </button>

        
       </div>
          <div className="p-5 ">
          
           
            <p className='heading my-3'>Start Your Application</p>

            <small>step 3/3</small>

            <div className="loginform p-4 ">
              <p>Payment</p>

              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="my-1">
                  <input value={amt} onChange={(e) => setAmount(e.target.value)} min={min} max={min * 2} type="text" className="" name="amount" disable/>
                </div>
                
  
                {/* <div className="my-1 payment" >
                  <div className="form-label d-block">Choose Payment Method</div>
                  <div className="p-2 my-1 border border-secondary d-flex justify-content-between rounded align-items-center">
                    <p className='h6'>Pay With Bank Transfer</p>
                    <input type="radio" value="bank" className="" name="payment" />
                  </div>

                  <div className="p-2 my-1 border border-secondary d-flex justify-content-between rounded align-items-center">
                    <p className='h6'>Pay With Debit Card</p>
                    <input type="radio" value="card" className="" name="payment" />
                  </div>
                </div> */}

                
                
                <button className='my-3 btn btn-primary w-100'>Pay</button>
               
              </form>

            </div>

            <small className='info p d-flex justify-content-center text-center mt-5'>I already have an account? <NavLink href='/login' className='text-primary'>Login</NavLink></small>
            
          </div>
         
        </div>

      </div>

      

  )
}

export default Third