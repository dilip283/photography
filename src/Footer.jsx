import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='container-fluid bg-dark wave'>
                <div className='container'>
                    <div className='col-lg-12'>
                    {/* <hr className='text-white' width={100} /> */}

                    </div>
                    <div className='col-lg-12 d-flex flex-row justify-content-center pt-5 pb-0'>
                    
                        <img src='/Images/signature.png' alt='sign' width={350} height={100}></img>

                    </div>
                    <div className='row py-5'>
                        <div className='col-lg-12'>
                            <p className='d-flex flex-row justify-content-center text-white fst-italic'>
                            the camera is just not capturing the world, it captures the expressions and emotions.
                            </p>

                        </div>
                        <div className='col-lg-12 d-flex flex-row justify-content-center'>
                            <h6 className='text-white'>All Rights Reserved @2022</h6>
                        </div>

                        <div className='col-lg-12 d-flex flex-row justify-content-center'>
                        <a href='https://www.facebook.com/dattu.waghmode.12' target="_blank"><i className='fa fa-facebook text-white me-2'></i></a>
                        <a href='https://www.instagram.com/dattu_waghmode_007/' target="_blank"><i className='fa fa-instagram text-white me-2'></i></a>
                        <a href=' https://wa.me/918329170806' target="_blank"><i className='fa fa-whatsapp text-white'></i></a>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Footer
