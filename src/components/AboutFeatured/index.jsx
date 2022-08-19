import React, { useState } from "react";
import { GlobalDataContext } from "../../context/context";
import { BsArrowRight } from "react-icons/bs";
import ModalVideo from "react-modal-video";
import SkillBar from "../SkillSet/SkillBar";
import { Link } from "react-router-dom";

function AboutFeatured() {
  const [isOpen, setOpen] = useState(false);
  const { rpdata } = React.useContext(GlobalDataContext);
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
                style={{ backgroundImage: `url("${rpdata?.stock?.[5]})"` }}
              >
                <div
                  className="skill-popup-video d-flex justify-content-center align-items-center bg-cover"
                  style={{ backgroundImage: `url("${rpdata?.stock?.[4]})"` }}
                ></div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
              <div className="block-contents ml-lg-5">
                <span>{rpdata?.dbSlogan?.[0].slogan}</span>
                <h1>{rpdata?.dbSlogan?.[1].slogan}</h1>
                <h5> </h5>
                <p>{rpdata?.dbAbout?.[0].text}</p>
              </div>
              {rpdata?.dbAbout?.[0].list?.map((item, index) => {
                return (
                  <SkillBar key={index} heading={item} progress="100%">
                    {item}
                  </SkillBar>
                );
              })}
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
