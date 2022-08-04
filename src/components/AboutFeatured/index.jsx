import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import SkillBar from '../SkillSet/SkillBar';
import Data from '../../api/Data.json';

function AboutFeatured() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="EZ9DrY43wtw"
                onClose={() => setOpen(false)}
            />
            <section className="about-featured-wrapper section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-5 col-12">
                            <div
                                className="about-promo bg-cover"
                                style={{ backgroundImage: `url(${Data.defaultimg.img1})` }}
                            >
                                <div
                                    className="skill-popup-video d-flex justify-content-center align-items-center bg-cover"
                                    style={{ backgroundImage: `url(${Data.defaultimg.img2})` }}
                                >
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
                            <div className="block-contents ml-lg-5">
                                <span>{Data.slogans[0].slogan}</span>
                                <h1>{Data.slogans[1].slogan}</h1>
                                <h5>
                                    {Data.dbAbout.description[0].text}
                                </h5>
                            </div>
                            {
                                Data.dbAbout.items.map((item, index) => {
                                    return (
                                        <SkillBar key={index} heading={item.value} progress="100%" />
                                    )
                                }   
                                )
                            }
                            <Link to="/contact" className="theme-btn theme-3 mt-10">
                                        Free Estimate <BsArrowRight />
                                    </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutFeatured;
