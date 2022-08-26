import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { FaCalendar, FaMapMarkerAlt, FaPhone, FaPhoneAlt } from "react-icons/fa";

function ContactUs() {
  const { rpdata } = useContext(GlobalDataContext);
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
                  <h4>{rpdata?.dbPrincipal?.location?.[0].address}</h4>
                  <span>Location</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-contact-card card1">
              <div className="top-part">
                <div className="icon">
                  <FaPhoneAlt />
                </div>
                <div className="title">
                  {rpdata?.dbPrincipal?.phones?.map((item, index) => {
                    return (
                      <a href={`tel:+1${item.phone}`} key={index}>
                        <h4>{item.phone}</h4>
                      </a>
                    );
                  })}
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
                  <h4> {rpdata?.dbPrincipal?.workdays?.[0].day}</h4>
                  <h4> {rpdata?.dbPrincipal?.workHours?.[0].hour}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
