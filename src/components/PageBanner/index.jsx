import React from 'react';
import {Link} from "react-router-dom"

function PageBanner({ bannerBg, currentPage, heading }) {
    return (
        <section
            className="page-banner-wrap bg-cover"
            style={{ backgroundImage: `url("${bannerBg}")` }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div className="breadcrumb-wrap">
                            <nav>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        {currentPage}
                                    </li>
                                </ol>
                            </nav>
                        </div>

                        <div className="page-heading text-white">
                            <h1>{heading}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PageBanner;
