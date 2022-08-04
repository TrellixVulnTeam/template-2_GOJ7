import React from 'react';
import bgImg from '../../assets/img/skill_bg.jpg';
import leftImg from '../../assets/img/skill_img.jpg';
import { BsArrowRight } from 'react-icons/bs';
import SkillBar from './SkillBar';
import Data from "../../api/Data.json"
import {Link} from "react-router-dom";

function SkillSet() {
    return (
        <section className="skill-wrapper section-padding pt-0">
            <div className="container">
                <div
                    className="skill-bg pt-100 pb-100 bg-center bg-cover bg-overlay text-white"
                    style={{
                        backgroundImage: `url(${Data.defaultimg.img1})`,
                    }}
                >
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-12 text-center d-none d-xl-block">
                            <img src={leftImg} className="mlm-100" alt="" />
                        </div>
                        <div className="col-xl-6 offset-1 offset-xl-0 col-10 pr-lg-5">
                            <div className="block-contents">
                                <span>{Data.dbPrincipal.companyName}</span>
                                <h1>{Data.slogans[1].slogan}</h1>
                                <h4>
                                    {Data.dbAbout.description[1].text}
                                </h4>
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
