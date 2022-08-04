import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import AgeImg from '../../assets/img/age.png';
import Data from "../../api/Data.json";

function Promo() {
    return (
        <section className="promo-featured-wrapper section-padding">
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-6 col-12 text-center">
                        <img src={AgeImg} alt="age" />
                    </div>
                    <div className="col-xl-6 col-12">
                        <div className="block-contents ml-xl-5 mt-5 mt-xl-0">
                            <span>{Data.dbPrincipal.companyName}</span>
                            <h1>{Data.slogans[0].slogan}</h1>
                            <h4>
                               {Data.slogans[0].slogan}
                            </h4>
                            <p>
                                 {Data.dbHome.description[0].text}
                            </p>
                            <Link to="/contact" className="theme-btn">
                                Get In Touch
                                <BsArrowRight style={{ fontSize: '20px', marginLeft: '15px' }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Promo;
