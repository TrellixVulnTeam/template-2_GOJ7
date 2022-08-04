import React from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import Footer1 from '../components/Footer';
import Header1 from '../components/Header';
import PageBanner from '../components/PageBanner';
import ServicesCard from '../components/Services/index';

function Services() {
    return (
        <>
            <Header1 />
            <PageBanner bannerBg={bannerBg} currentPage="Services" heading="Services" />
            <ServicesCard />
            <Footer1 />
        </>
    );
}

export default Services;
