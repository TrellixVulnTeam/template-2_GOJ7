import React from "react";
import { GlobalDataContext } from "../../context/context";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const  ServiceBlock = ({
  servicesName,
  description,
  itemServives,
  imgServices,
}) => {
  const { rpdata } = React.useContext(GlobalDataContext);
  return (
    <section className="promo-featured-wrapper section-padding">
      <div className="container">
        <div className="row align-center responsive_block">
          <div className="col-xl-6 col-12">
            <div className="block-contents ml-xl-5 mt-5 mt-xl-0">
              <span>{rpdata.dbPrincipal?.name}</span>
              <h1>{servicesName}</h1>
              <p>{description}</p>
              <ul className="single-list-wrap">
                        {itemServives}
                       
                      </ul>
              <Link to="/contact" className="theme-btn">
                Free Estimate
                <BsArrowRight
                  style={{ fontSize: "20px", marginLeft: "15px" }}
                />
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-12 text-center">
            <img src={imgServices} alt="Default Img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceBlock;
