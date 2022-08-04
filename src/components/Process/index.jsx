import React from 'react';
import ProcessGrid2 from './ProcessGrid2';
import Data from "../../api/Data.json"
import {Link} from 'react-router-dom';

function Process2() {
    return (
        <section className="promo-featured-wrapper section-padding">
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-5 col-12 text-center">
                        <ProcessGrid2 img1={Data.defaultimg.img1} img2={Data.defaultimg.img1} img3={Data.defaultimg.img1} />
                    </div>
                    <div className="col-xl-7 col-12 mt-5 mt-xl-0">
                        <div className="block-contents ml-xl-5 ml-50">
                            <div className="section-title-3">
                                <p className="pl-50 pr-50">{Data.dbPrincipal.companyName}</p>
                                <h1>{Data.slogans[0].slogan}</h1>
                            </div>
                            <h4>{Data.slogans[0].slogan}</h4>
                            <p>{Data.dbHome.description[1].text}</p>
                            <Link to="/contact" className="theme-btn theme-3">
                                Free Estimate
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Process2;
