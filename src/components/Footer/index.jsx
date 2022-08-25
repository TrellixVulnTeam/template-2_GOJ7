import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { AiOutlineArrowUp } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import {
  FaLocationArrow,
  FaPhoneAlt,
  FaCalendar,
  FaCreditCard,
  FaArrowRight,
} from "react-icons/fa";

import LiveChat from "../botonWhatsapp/BotonWhatsapp"

function Footer1() {
  const { rpdata } = useContext(GlobalDataContext);

  const Navigation = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Services",
      link: "/services",
    },
    {
      title: "Gallery",
      link: "/projects",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  return (
    <footer className="footer-1 footer-wrap">
      <div className="footer-widgets dark-bg">
        <div className="container">
          <div className="row">
            {/* ABOUT WIDGET */}
            <div className="col-md-6 col-xl-3 col-12">
              <div className="single-footer-wid">
                <div className="wid-title">
                  <h4>About Us</h4>
                </div>
                <p>{rpdata?.dbAbout?.[0].text.substring(0, 150) + "..."}</p>
                <div className="social_link">
                  {rpdata?.dbSocialMedia?.redes.map((item, index) => {
                    return (
                      <a
                        href={item.url}
                        key={index}
                        target="_blank"
                        className="text-white"
                      >
                        <i
                          className={`fab fa-${item.icon}`}
                          aria-hidden="true"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* NEWS FEED WIDGET */}

            <div className="col-md-6 col-xl-2 col-12">
              <div className="single-footer-wid ml-15 site_info_widget">
                <div className="wid-title">
                  <h4>Navigation</h4>
                </div>
                {Navigation.map((item, index) => (
                  <div className="single-contact-info" key={index}>
                    <div className="icon">
                      <FaArrowRight />
                    </div>
                    <div className="contact-info">
                      <NavLink to={item.link}>{item.title}</NavLink>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-6 col-xl-3 col-12">
              <div className="single-footer-wid ml-15 site_info_widget">
                <div className="wid-title">
                  <h4>Services</h4>
                </div>
                {rpdata?.dbServices?.slice(0, 6).map((item, index) => (
                  <div className="single-contact-info" key={index}>
                    <div className="icon">
                      <FaArrowRight />
                    </div>
                    <div className="contact-info">
                      <NavLink to="/services">{item.name}</NavLink>{" "}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-6 col-xl-4 col-12">
              <div className="single-footer-wid ml-15 site_info_widget">
                <div className="wid-title">
                  <h4>Get In Touch</h4>
                </div>
                <div className="single-contact-info">
                  <div className="icon">
                    <FaLocationArrow />
                  </div>
                  <div className="contact-info">
                    <span>{rpdata?.dbPrincipal?.location?.[0].address}</span>
                  </div>
                </div>
                {rpdata?.dbPrincipal?.phones?.map((item, index) => {
                  return (
                    <div className="single-contact-info" key={index}>
                      <div className="icon">
                        <FaPhoneAlt />
                      </div>
                      <div className="contact-info">
                        <a href={`tel:+1${item.phone}`}>
                          <span>{item.phone}</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
                {rpdata?.dbPrincipal?.workdays?.map((item, index) => {
                  return (
                    <div className="single-contact-info">
                      <div className="icon">
                        <FaCalendar />
                      </div>
                      <div className="contact-info">
                        <span> {item.day}</span>
                      </div>
                    </div>
                  );
                })}
                {rpdata?.dbPrincipal?.workHours?.map((item, index) => {
                  return (
                    <div className="single-contact-info">
                      <div className="icon">
                        <FaCalendar />
                      </div>
                      <div className="contact-info">
                        <span>{item.hour}</span>
                      </div>
                    </div>
                  );
                })}
                <div className="single-contact-info">
                  <div className="icon">
                    <FaCreditCard />
                  </div>
                  <div className="contact-info">
                    <span>{rpdata?.dbPrincipal?.paymentMethod}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-12 pb-80">
              <div className="copyright-info text-white">
                <p>
                  &copy; Copyright By{" "}
                  <a href="index.html">{rpdata?.dbPrincipal?.name}</a> - 2022
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-12 text-center">
              <div className="footer-logo">
                <a href="#top">
                  <img
                    src={rpdata?.dbPrincipal?.logo}
                    className="p-2 logo_footer rounded-3"
                    alt="img"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-block col-12">
              <div className="scroll-up-btn text-md-right justify-content-end">
                <a href="#top">
                  <AiOutlineArrowUp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LiveChat/>
      <div className="visor_Counter">
        <div class="elfsight-app-b8a56f1e-13f0-420d-a542-091d4e218b2d"></div>
      </div>
    </footer>
  );
}

export default Footer1;
