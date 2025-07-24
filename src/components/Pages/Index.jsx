import React from 'react';
import videoBG from '../../assets/artistic-video.mp4';
import titleShape from '../../assets/title-shape.svg';
import hero from '../../assets/hero-image.png';
import heroIcon1 from '../../assets/icon-hero-img-1.svg';
import heroIcon2 from '../../assets/icon-hero-img-2.svg';
import logo1 from '../../assets/client-logo-1.svg';
import logo2 from '../../assets/client-logo-2.svg';
import logo3 from '../../assets/client-logo-3.svg';
import logo4 from '../../assets/client-logo-4.svg';
import logo5 from '../../assets/client-logo-5.svg';
import logo6 from '../../assets/client-logo-6.svg';
import about1 from '../../assets/about-img-1.jpg';
import about2 from '../../assets/about-img-2.jpg';
import aboutCircle from '../../assets/about-more-circle.svg';
import aboutIcon1 from '../../assets/icon-about-agency-1.svg';
import aboutIcon2 from '../../assets/icon-about-agency-2.svg';
import aboutClient from '../../assets/author-image.jpg';
import btnArrow from '../../assets/btn-arrow.svg';


function Index() {
    return (
        <>
            <div className='video-bg'>
                <video muted autoPlay loop>
                    <source src={videoBG} type="video/mp4" />
                </video>
            </div>

            <div className="container">
                <div className="hero position-absolute">
                    <div className="hero-content text-center">
                        <div className="section-title">
                            <h5><img src={titleShape} className='img-fluid me-2' alt="" /> Welcome to our Freelance Solutions</h5>
                            <h1>Hire Top Professionals To <br /> Transform Your <span>Ideas Into Reality</span> </h1>
                        </div>
                        <div className="hero-image mt-5">
                            <img src={hero} className='img-fluid' alt="" />
                            <div className='floating-img'>
                                <div className="floating-img-1">
                                    <img src={heroIcon1} className='img-fluid' alt="" />
                                </div>
                                <div className="floating-img-2">
                                    <img src={heroIcon2} className='img-fluid' alt="" />
                                </div>
                            </div>
                            <div className="floating-text">
                                <span>Web Developer</span>
                                <span>Graphic Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-marquee position-absolute">
                <marquee behavior="scroll" direction="" >
                    <img src={logo1} className='img-fluid ms-5' alt="" />
                    <img src={logo2} className='img-fluid ms-5' alt="" />
                    <img src={logo3} className='img-fluid ms-5' alt="" />
                    <img src={logo4} className='img-fluid ms-5' alt="" />
                    <img src={logo5} className='img-fluid ms-5' alt="" />
                    <img src={logo6} className='img-fluid ms-5' alt="" />
                    <img src={logo1} className='img-fluid ms-5' alt="" />
                    <img src={logo2} className='img-fluid ms-5' alt="" />
                    <img src={logo3} className='img-fluid ms-5' alt="" />
                    <img src={logo4} className='img-fluid ms-5' alt="" />
                    <img src={logo5} className='img-fluid ms-5' alt="" />
                    <img src={logo6} className='img-fluid ms-5' alt="" />
                    <img src={logo1} className='img-fluid ms-5' alt="" />
                    <img src={logo2} className='img-fluid ms-5' alt="" />
                    <img src={logo3} className='img-fluid ms-5' alt="" />
                    <img src={logo4} className='img-fluid ms-5' alt="" />
                    <img src={logo5} className='img-fluid ms-5' alt="" />
                    <img src={logo6} className='img-fluid ms-5' alt="" />
                </marquee>
            </div>

            <div className="large-section ">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="d-flex gap-3">
                                <img src={about1} className='img-fluid rounded' alt="" />
                                <div className="d-flex flex-column gap-4 about-sec-image">
                                    <img src={aboutCircle} className='img-fluid about-small-img1' alt="" />
                                    <img src={about2} className='img-fluid about-small-img2' alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <h5><img src={titleShape} className='img-fluid me-2' alt="" /> Welcome to our freelance solutions</h5>
                                    <h1>We Are A Creative Agency <br /> That Provides <span>Solutions</span></h1>
                                </div>
                                <div className="d-flex justify-content-between align-items-center py-3" style={{ borderBottom: '1px solid #3d3f3c' }}>
                                    <h6><img src={titleShape} className='img-fluid me-3' alt="" />Client-Centric Approach </h6>
                                    <h6><img src={titleShape} className='img-fluid me-3' alt="" />Seamless Communications </h6>
                                </div>

                                <div className="d-flex justify-content-between align-items-center py-3" style={{ borderBottom: '1px solid #3d3f3c' }}>
                                    <div className='d-flex '>
                                        <img src={aboutIcon1} className='img-fluid me-3' alt="" />
                                        <h6>Dedicated to client success </h6>
                                    </div>
                                    <div className='d-flex '>
                                        <img src={aboutIcon2} className='img-fluid me-3' alt="" />
                                        <h6>Affordable Service with Quality </h6>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center py-3" >
                                    <div className="d-flex about-client gap-3">
                                        <div className="about-client-img">
                                            <img src={aboutClient} className='img-fluid rounded-circle' alt="" />
                                        </div>
                                        <div className="about-client-info">
                                            <h5 className='fw-bold'>Seethamahalakshmi Suvvari</h5>
                                            <h5 className='m-0'>Full Stack Developer</h5>
                                        </div>
                                    </div>
                                    <div className="btn-1">
                                        <button className='btn '>Explore More </button>
                                        <img src={btnArrow} className='img-fluid ms-2' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;