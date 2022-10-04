import React from "react";
import { GlobalDataContext } from "../../context/context";
import { BsApp } from "react-icons/bs";
import { Link } from "react-router-dom";

function Approch() {
  const { rpdata } = React.useContext(GlobalDataContext);
  return (
    <section className="our-approch-wrapper section-padding section-bg">
      <div className="container">
        <div className="row mb-30">
          <div className="col-12 col-lg-12">
            <div className="section-title text-center">
              <p>{rpdata?.dbPrincipal?.name}</p>
              <h1>{rpdata?.dbSlogan?.[1].slogan}</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-xl-4 col-12">
            <div className="single-approch-card">
              <div
                className="card-thumb bg-cover"
                style={{
                  backgroundImage: `url("${rpdata?.stock?.[0]})"`,
                }}
              />
              <div className="content">
                <div className="case-cat">
                  <Link to="/contact">
                    <BsApp />
                  </Link>
                </div>
                <h3>
                  <Link to="/contact">{rpdata?.dbValues?.[0].title}</Link>
                </h3>
                <p>{rpdata?.dbValues?.[0].description}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 col-12">
            <div className="single-approch-card">
              <div
                className="card-thumb bg-cover"
                style={{
                  backgroundImage: `url("${rpdata?.stock?.[1]})"`,
                }}
              />
              <div className="content">
                <div className="case-cat">
                  <Link to="/contact">
                    <BsApp />
                  </Link>
                </div>
                <h3>
                  <Link to="/contact">{rpdata?.dbValues?.[1].title}</Link>
                </h3>
                <p>{rpdata?.dbValues?.[1].description}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 col-12">
            <div className="single-approch-card">
              <div
                className="card-thumb bg-cover"
                style={{
                  backgroundImage: `url("${rpdata?.stock?.[2]})"`,
                }}
              />
              <div className="content">
                <div className="case-cat">
                  <Link to="/contact">
                    <BsApp />
                  </Link>
                </div>
                <h3>
                  <Link to="/contact">{rpdata?.dbValues?.[2].title}</Link>
                </h3>
                <p>{rpdata?.dbValues?.[2].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Approch;
