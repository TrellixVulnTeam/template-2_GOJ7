import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import AgeImg from '../../assets/images/services/JCCONCRETE18.jpg';
import Data from "../../api/Data.json";


function blockHome() {
    return (
        <section className="promo-featured-wrapper section-padding">
            <div className="container">
                <div className="row align-center responsive_block">
                    <div className="col-xl-6 col-12">
                        <div className="block-contents ml-xl-5 mt-5 mt-xl-0">
                            <h1>{Data.slogans[2].slogan}</h1>
                            <h4>
                               {Data.slogans[3].slogan}
                            </h4>
                            <p>
                                 {Data.dbHome.description[1].text}
                            </p>
                            <p>
                                 {Data.dbHome.description[2].text}
                            </p>
                            <Link to="/contact" className="theme-btn">
                                Free Estimate
                                <BsArrowRight style={{ fontSize: '20px', marginLeft: '15px' }} />
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-12 text-center">
                        <img src={AgeImg} alt="Default Img" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default blockHome;
