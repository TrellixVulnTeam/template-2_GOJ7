import React from "react";
import { GlobalDataContext } from "../../context/context";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import SkillBar from "../SkillSet/SkillBar";

function Promo() {
  const { rpdata } = React.useContext(GlobalDataContext);
  return (
    <section className="promo-featured-wrapper section-padding">
      <div className="container">
        <div className="row align-center responsive_block">
          <div className="col-xl-6 col-12">
            <div className="block-contents ml-xl-5 mt-5 mt-xl-0">
              <span>{rpdata.dbPrincipal?.name}</span>
              <h1>{rpdata.dbSlogan?.[1].slogan}</h1>
              <h4>{rpdata.dbSlogan?.[3].slogan}</h4>
              <p>{rpdata.dbHome?.[0].text}</p>
              {rpdata?.dbServices?.slice(0,4).map((item, index) => {
                return (
                  <SkillBar key={index} heading={item.name} progress="100%">
                    {item.name}
                  </SkillBar>
                );
              })}
              <Link to="/contact" className="theme-btn">
                Free Estimate
                <BsArrowRight
                  style={{ fontSize: "20px", marginLeft: "15px" }}
                />
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-12 text-center">
            <img src={rpdata?.stock?.[8]} alt="Default Img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
