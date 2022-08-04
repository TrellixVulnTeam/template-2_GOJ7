/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from "react";
import Data from "../../api/Data.json";
import Map from "./Map";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

function ContactUs() {
  return (
    <section className="contact-page-wrap section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-contact-card card1">
              <div className="top-part">
                <div className="icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="title">
                  <h4>{Data.dbPrincipal.address[0].locations}</h4>
                  <span>Location</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-contact-card card1">
              <div className="top-part">
                <div className="icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="title">
                  {Data.dbPrincipal.phones.map((item, index) => (
                    <h4 key={index}> {item.phone}</h4>
                  ))}
                  <span>Phone</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-contact-card card1">
              <div className="top-part">
                <div className="icon">
                  <FaCalendar />
                </div>
                <div className="title">
                    <h4 > {Data.dbPrincipal.workdays}</h4>
                    <h4 > {Data.dbPrincipal.workHours}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-12">
            <div className="contact-map-wrap">
            <div id="map">
                <h2 className="text-center pt-1 pb-3">{Data.dbPrincipal.miles}</h2>
            <iframe
                title="map"
                src={Data.dbPrincipal.address[0].iframe}
                frameBorder="0"
                style={{
                    border: '0',
                    width: '100%',
                }}
                allowFullScreen=""
                aria-hidden="false"
            />
        </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
