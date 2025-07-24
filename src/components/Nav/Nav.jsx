
import React from 'react';

function Nav(props) {
    return (
        <>
            <div className='nav-container position-absolute w-100' style={{ borderBottom: '1px solid #6a6c69' }}>

                <div className="container">
                    <nav className="navbar navbar-expand-lg py-3">
                        <div className="container-fluid">
                            <a href="#" className="navbar-brand logo text-white fw-bold fs-3">Code <span>Portfolio</span></a>
                            <button className="navbar-toggler text-white border-0" type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'
                                aria-expanded='false' aria-label='Toggle navigation'>
                                <i className="ri-menu-line  fs-3 text-white "></i>
                            </button>
                            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                                <ul className="navbar-nav gap-3 nav-menu">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-white fw-semibold fs-6 custom-link">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-white fw-semibold fs-6 custom-link">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-white  fw-semibold fs-6 custom-link">Projects</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-white  fw-semibold fs-6 custom-link">Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-white  fw-semibold fs-6 custom-link">Pricing Plan</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-white  fw-semibold fs-6 custom-link">Blog</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="d-flex align-items-center hero-social-icon gap-2">
                                <div className='icon-circle'> <i className="ri-instagram-line"></i></div>
                                <div className='icon-circle'> <i className="ri-facebook-fill"></i></div>
                                <div className='icon-circle'> <i className="ri-twitter-fill"></i></div>
                                <div className='icon-circle'> <i className="ri-linkedin-fill"></i></div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Nav;