import React from 'react'
import "./blogdetails.css"
import Navbar from '../navbarfiles/Navbar'
import Footer from '../footerfiles/Footer'
import { Link, useParams } from 'react-router-dom'
import { FaArrowRight, FaSearch } from 'react-icons/fa'
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
} from "react-share";
import Blogcard from '../common/Blogcard'
import Subscribe from '../common/Subscribe'

function Blogdetails() {

    const { id } = useParams()

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

    return (
        <div className="blogdetails">
            <Navbar />

            <div className="body p-5">
                <div className="container">
                    <div className="row justify-content-between align-items-center ">
                        <h5 className="h5 col-md-4 col-6">LATEST BLOG POSTS</h5>

                        <div className="d-none col-md-4" />

                        <div className='col-md-4 col-6 position-relative  '>
                            <input placeholder='search here' type="text" className="form-control" />
                            <div style={{ right: "1rem" }} className='position-absolute top-50 translate-middle '>
                                <FaSearch />
                            </div>
                        </div>
                    </div>

                    <nav class="breadcrumb">
                        <Link class="breadcrumb-item nav-link" to="/">Home</Link>
                        <Link class="breadcrumb-item nav-link active" to="#">Sub</Link>

                    </nav>

                    <div className="row">
                        <div className="col-md-10 col-12 order-2 order-md-1">
                            <h4 className="title w-75">Lorem ipsum adipisicing elit. Ducimus, sapiente?</h4>

                            <div className="d-flex">
                                <span className=' fw-medium  date'>Mar 02, 2023</span>
                                <span className=" fw-medium  mx-2 time">10 min</span>
                            </div>

                            <div className="mainimage my-2">
                                <img className='img-fluid' src="./../../../images/opclass.png" alt="main photo" />
                            </div>

                            <p className="maintext fw-medium ">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur aliquam fugiat numquam quam dolorem quisquam suscipit labore recusandae nisi, eaque quos, ullam consectetur delectus quas, laborum minima veritatis nam iste magni! At molestiae voluptatibus voluptatem commodi reiciendis ipsum temporibus dolor assumenda earum vero porro dignissimos, ab mollitia, dicta autem ipsa veritatis tempore sequi iusto laborum nulla adipisci quaerat? Recusandae vero earum nisi? Repudiandae, est molestiae! Accusantium expedita autem soluta quisquam, porro excepturi. Natus, perferendis illum. Ratione corporis laboriosam quia voluptatum voluptatem recusandae, inventore iure. Expedita odio aliquid sit dignissimos, est quos commodi error repellat officia ipsa autem temporibus quo blanditiis.
                            </p>

                            <div className="mb-2 d-flex gap-2 flex-column flex-md-row">
                                <img className='img-fluid' src="./../../../images/class1.png" alt="" />
                                <img className='img-fluid' src="./../../../images/class2.png" alt="" />
                            </div>

                            <p className="fw-bold othertex">
                                Blandit vestibulum risus pretium, vitae magna sit. Amet, ut eget semper suspendisse sapien non, ultrices. Nullam libero cursus pretium iaculis nibh eget ac. Elementum non lectus id ac purus viverra. Posuere at tortor, duis est, egestas. Scelerisque non eget ultricies neque, vestibulum. Sagittis, tellus nulla congue faucibus faucibus viverra.

                                Amet arcu nibh arcu sed pellentesque tincidunt tempus quis. Vel vel urna mauris et sit cras. Rhoncus mi magna id morbi imperdiet. Posuere potenti praesent integer curabitur donec ullamcorper.

                                Sed quis in amet risus, eget aenean bibendum pretium. Porta sit mattis pellentesque viverra sed pharetra risus erat at. Vitae orci erat in libero cursus ultrices placerat pulvinar. A placerat neque facilisis placerat ut nisl nibh donec. Non sem tincidunt tortor nunc accumsan pellentesque sed blandit.

                                Platea nullam morbi turpis tincidunt gravida.
                                Curabitur risus dui non felis aliquet eget.
                                Eros, eleifend magna ipsum tellus.
                                Dictumst mattis justo, vitae, et at placerat.
                                Purus ultrices gravida massa viverra sed nibh nisl dictum id.
                                Facilisis lectus sagittis quis aliquet dui iaculis nulla quisque velit.
                            </p>

                            <div className="similar p-4">

                                <h4 className="header py-3 text-uppercase ">
                                    Similar blog Post
                                </h4>

                                <Blogcard blogdata={blogdata} />

                                <div className='d-flex justify-content-center bg-white viewall my-4 my-md-0  '>
                                    <p className='me-3'>View all blogs</p>
                                    <div className="mt-0"> <FaArrowRight /></div>
                                </div>

                                

                            </div>


                        </div>

                        <div className="col-md-2 col-12 order-md-2 order-1">
                            <FacebookShareButton color='red' url='#'/>
                            <TwitterShareButton url='#' />
                        </div>
                    </div>

                </div>
            </div>

            <div className="subscribe">
                 <Subscribe/>
            </div>

            <Footer />
        </div>
    )
}

export default Blogdetails