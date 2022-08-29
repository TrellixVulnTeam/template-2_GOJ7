import React, { useEffect, useState } from "react";
import { GlobalDataContext } from "../../context/context";
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Data from "../../api/Data.json"

function Hero3() {
    const { rpdata } = React.useContext(GlobalDataContext);
    return (
        <section className="hero-slide-wrapper hero-3">
            <div className="slide-items">
                <div className="single-slide bg-cover">
                    <div className="container">
                        <div className="row align-items-center text-center text-xl-start">
                            <div className="col-12 col-lg-8 offset-lg-2 offset-xl-0 col-xl-7">
                                <div className="hero-contents">
                                    <p className='text-white'>Welcome To {rpdata?.dbPrincipal?.name}</p>
                                    <h1 className='text-white'>{rpdata?.dbSlogan?.[2].slogan}</h1>
                                    <Link to="/contact" className="theme-btn theme-3">
                                        Free Estimate <BsArrowRight />
                                    </Link>
                                    <Link to="/services" className="theme-btn theme-3">
                                        Services
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-5 d-none d-xl-block">
                                <div
                                    className="hero-img bg-cover"
                                    style={{ backgroundImage: `url("${rpdata?.stock?.[5]})"` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero3;
