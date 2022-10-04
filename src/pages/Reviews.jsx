import React, { useEffect, useState } from "react";
import { GlobalDataContext } from "../context/context";
import AboutFeatured from "../components/AboutFeatured";
import Approch from "../components/Values";
import Footer1 from "../components/Footer";
import Header1 from "../components/Header";
import PageBanner from "../components/PageBanner";
import SkillSet from "../components/SkillSet";

function Reviews() {
  const { rpdata } = React.useContext(GlobalDataContext);
  return (
    <>
      <Header1 />
      <PageBanner
        bannerBg={`${rpdata?.stock?.[2]}`}
        currentPage="Reviews"
        heading="Reviews"
      />
      <div className="container mt-100 mb-100">
        <h2 className="text-center">What Our Clients Say</h2>
        <div class="elfsight-app-7acc3690-52f5-40d8-928e-6cef6988096d"></div>
      </div>
      <Footer1 />
    </>
  );
}

export default Reviews;
