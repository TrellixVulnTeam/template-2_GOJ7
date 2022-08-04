import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import AboutFeatured from '../components/AboutFeatured';
import Approch from '../components/Values';
import Footer1 from '../components/Footer';
import Header1 from '../components/Header';
import PageBanner from '../components/PageBanner';
import SkillSet from '../components/SkillSet';
function About() {
    return (
        <>
            <Header1 />
            <PageBanner bannerBg={bannerBg} currentPage="About Us" heading="About Us" />
            <AboutFeatured />
            <Approch />
            <SkillSet />
            <Footer1 />
        </>
    );
}

export default About;
