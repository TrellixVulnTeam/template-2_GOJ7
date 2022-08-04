import React from "react";
import { BsArrowRight, BsApp } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Data from "../../api/Data.json";

function Approch() {
  return (
    <section className="our-approch-wrapper section-padding section-bg">
      <div className="container">
        <div className="row mb-30">
          <div className="col-12 col-lg-12">
            <div className="section-title text-center">
              <p>{Data.dbPrincipal.companyName}</p>
              <h1>{Data.slogans[1].slogan}</h1>
            </div>
          </div>
        </div>

        <div className="row">
          {Data.dbAbout.values.map((item, index) => {
            return (
              <div className="col-md-6 col-xl-4 col-12">
                <div className="single-approch-card">
                  <div
                    className="card-thumb bg-cover"
                    style={{
                      backgroundImage: `url(${item.img})`,
                    }}
                  />
                  <div className="content">
                    <div className="case-cat">
                      <Link to="/contaact"><BsApp/></Link>
                    </div>
                    <h3>
                      <Link to="/contact">{item.value}</Link>
                    </h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Approch;
