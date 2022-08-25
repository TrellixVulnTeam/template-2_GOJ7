import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import ContactForm from '../components/ContactForm';
import ContactUs from '../components/ContactUs';
import Footer1 from '../components/Footer';
import Header1 from '../components/Header';
import PageBanner from '../components/PageBanner';
import Map from '../components/ContactUs/Map';

function Contact() {
    const { rpdata } = useContext(GlobalDataContext);
    return (
        <>
            <Header1 />
            <PageBanner bannerBg={`${rpdata?.gallery?.[9]}`} heading="Contact Us" currentPage="Contact" />
            <ContactUs />
            <Map/>
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <h2 className="text-center pt-50">Get In Tocuch!</h2>
                <ContactForm title="Write Message" heading="Get In Touch" />
                </div>
                <div className="col-lg-3"></div>
            </div>
            
            <Footer1 />
        </>
    );
}

export default Contact;
