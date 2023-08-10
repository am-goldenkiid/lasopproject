import React from 'react'
import "./blogcard.css"
import { Link } from 'react-router-dom'

function Blogcard({blogdata}) {

   

    return (
        <div className="blogcard">
            <div className="container">
                <div className="row">

                    {blogdata?.map((info, i) => (
                         <div key={i} className="col-md-4 col-12 my-3 my-md-0">
                         <Link className='nav-link' to={`/blog/${info?.id}`}>
                         <div className="card img-thumbnail p-3 ">
                             <img src="./../../../images/blogimg.png" alt="" className="card-img-top img-fluid" />
                             <h5 className="fw-bold title my-1">{info?.title}</h5>
                             <div className="d-flex ">
                                 <p className='date fw-medium  '>{info?.date}</p>
                                 <p className='time fw-medium  mx-3'>{info?.time}</p>
                             </div>

                             <p>
                                 {info?.body.length > 100 ?
                                     `${info?.body.slice(0, 100)}.... ` :
                                     info?.body
                                 }
                                 &nbsp; &nbsp; <Link to={`/blog/${info?.id}`}>read more</Link>
                             </p>

                         </div>
                         </Link>
                     </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Blogcard