
import React, { useEffect, useState } from "react";
import { GlobalDataContext } from "../context/context";
import AboutFeatured from '../components/AboutFeatured';
import Approch from '../components/Values';
import Footer1 from '../components/Footer';
import Header1 from '../components/Header';
import PageBanner from '../components/PageBanner';
import SkillSet from '../components/SkillSet';


function About() {
    const { rpdata } = React.useContext(GlobalDataContext);
    return (
        <>
            <Header1 />
            <PageBanner bannerBg={`${rpdata?.gallery?.[4]}`} currentPage="About Us" heading="About Us" />
            <AboutFeatured />
            <Approch />
            <SkillSet />
            <Footer1 />
        </>
    );
}

export default About;
