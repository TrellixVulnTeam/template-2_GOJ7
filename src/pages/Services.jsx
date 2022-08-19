import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import Footer1 from '../components/Footer';
import Header1 from '../components/Header';
import PageBanner from '../components/PageBanner';
import ServicesCard from '../components/Services/index';

function Services() {
    const { rpdata } = useContext(GlobalDataContext);
    return (
        <>
            <Header1 />
            <PageBanner bannerBg={`${rpdata?.stock?.[1]}`} currentPage="Services" heading="Services" />
            <ServicesCard />
            <Footer1 />
        </>
    );
}

export default Services;
