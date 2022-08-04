import React, { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import Logo from "../../assets/images/logo/logoColor.png";
import { NavLink } from "react-router-dom";
import Data from "../../api/Data.json";
import {
  FaLocationArrow,
  FaPhoneAlt,
  FaCalendar,
  FaClock,
  FaCreditCard,
  FaArrowRight,
} from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLeaf,
} from "react-icons/fa";

function Footer1() {
  // STATES
  const [email, setEmail] = useState("");

  // HANDLER
  const onchangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

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
                <p>{Data.dbAbout.description[0].text}</p>
                <div className="social_link">
                  {Data.socialmedia.redes.map((item, index) => (
                    <a key={index} href={item.url}>
                      {item.icon === "facebook" ? <FaFacebookF /> : null}
                      {item.icon === "twitter" ? <FaTwitter /> : null}
                      {item.icon === "instagram" ? <FaInstagram /> : null}
                      {item.icon === "youtube" ? <FaYoutube /> : null}
                    </a>
                  ))}
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
                {Data.dbServices.services.map((item, index) => (
                  <div className="single-contact-info" key={index}>
                    <div className="icon">
                      <FaLeaf />
                    </div>
                    <div className="contact-info">
                      <NavLink to="/services">{item.title}</NavLink>{" "}
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
                    <span>{Data.dbPrincipal.address[0].locations}</span>
                  </div>
                </div>
                {Data.dbPrincipal.phones.map((item, index) => (
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
                ))}
                <div className="single-contact-info">
                  <div className="icon">
                    <FaCalendar />
                  </div>
                  <div className="contact-info">
                    <span>{Data.dbPrincipal.workdays}</span>
                  </div>
                </div>
                <div className="single-contact-info">
                  <div className="icon">
                    <FaClock />
                  </div>
                  <div className="contact-info">
                    <span>{Data.dbPrincipal.workHours}</span>
                  </div>
                </div>
                <div className="single-contact-info">
                  <div className="icon">
                    <FaCreditCard />
                  </div>
                  <div className="contact-info">
                    <span>{Data.dbPrincipal.payments}</span>
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
            <div className="col-lg-4 col-12">
              <div className="copyright-info">
                <p>
                  &copy; Copyright By{" "}
                  <a href="index.html">{Data.dbPrincipal.companyName}</a> - 2021
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-12 text-center">
              <div className="footer-logo">
                <a href="#top">
                  <img src={Logo} alt="Dustrix" className="p-2" />
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
    </footer>
  );
}

export default Footer1;
