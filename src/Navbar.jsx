import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='container-fluid bg-dark'>
                <div className='container bg-dark'>
                    <div className='row'>

                        <nav className="navbar navbar-expand-lg ">
                            <a className="navbar-brand" href="#">
                                <img src="/images/signature.png" width="250" height="50" alt="" />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            {/* <div className="collapse navbar-collapse" id="navbarNav">
                                <h5 className='fst-italic'>Follow me:</h5>
                                <a href='https://www.facebook.com/dattu.waghmode.12' target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href='https://www.instagram.com/dattu_waghmode_007/' target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                <a href=' https://wa.me/918329170806' target="_blank"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>

                            </div> */}
                        </nav>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
