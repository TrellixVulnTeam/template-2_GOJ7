import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import Footer1 from '../components/Footer';
import Header1 from '../components/Header';
import PageBanner from '../components/PageBanner';
import ProjectFilter from '../components/ProjectFilter';

function Projects() {
    return (
        <>
            <Header1 />
            <PageBanner bannerBg={bannerBg} heading="Gallery" currentPage="Gallery" />
            <ProjectFilter />
            <Footer1 />
        </>
    );
}

export default Projects;
