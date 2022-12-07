import React from 'react'


const About = () => {
    return (
        <>
            <div className='container-fluid bg-black py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 py-5'>
                            <img className='img-fluid border border-rounded' src='/images/me.jpg' />

                        </div>
                        <div className='col-lg-6 p-5'>
                            <h1 className='text-success'>About Me</h1>
                            <hr className='text-white' width={50} />
                            <p className='text-success'>
                                Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film.
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default About
