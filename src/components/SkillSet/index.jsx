import React, { useEffect, useState } from "react";
import { GlobalDataContext } from "../../context/context";
import { BsArrowRight } from 'react-icons/bs';
import {Link} from "react-router-dom";

function SkillSet() {
    const { rpdata } = React.useContext(GlobalDataContext);
    return (
        <section className="skill-wrapper section-padding pt-0">
            <div className="container">
                <div
                    className="skill-bg pt-100 pb-100 bg-center bg-cover bg-overlay text-white"
                    style={{
                        backgroundImage: `url("${rpdata?.stock?.[0]})"`,
                    }}
                >
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-12 text-center d-none d-xl-block">
                            <img src={rpdata?.stock?.[1]} className="mlm-100" alt="" />
                        </div>
                        <div className="col-xl-6 offset-1 offset-xl-0 col-10 pr-lg-5">
                            <div className="block-contents mb-20">
                                <span>{rpdata.dbPrincipal?.name}</span>
                                <h1>{rpdata.dbSlogan?.[1].slogan}</h1>
                                <p>
                                    {rpdata?.dbSlogan?.[0].slogan}
                                </p><br></br>
                                <p>
                                {rpdata?.dbAbout?.[1].text}
                                </p>
                            </div>
                            <Link to="/contact" className="theme-btn theme-3">
                                        Free Estimate <BsArrowRight />
                                    </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillSet;
