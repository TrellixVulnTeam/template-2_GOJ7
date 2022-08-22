import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import Footer1 from '../components/Footer';
import Header1 from '../components/Header';
import PageBanner from '../components/PageBanner';
import ProjectFilter from '../components/ProjectFilter';

function Projects() {
    const { rpdata } = useContext(GlobalDataContext);
    return (
        <>
            <Header1 />
            <PageBanner bannerBg={`${rpdata?.stock?.[6]}`} heading="Gallery" currentPage="Gallery" />
            <ProjectFilter />
            <Footer1 />
        </>
    );
}

export default Projects;
