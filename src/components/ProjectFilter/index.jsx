import React, { useEffect, useState } from "react";
import { GlobalDataContext } from "../../context/context";

function ProjectFilter() {
  const { rpdata } = React.useContext(GlobalDataContext);
    
  return (
    <section className="portfolio-wrapper-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12 text-center">
            <div className="section-title-2">
              <p>Projects</p>
              <h1>Our Recent Projects</h1>
            </div>
          </div>
        </div>

        <div className="container pd-top-150 pd-bottom-100">
          <div className="gallery-content">
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectFilter;