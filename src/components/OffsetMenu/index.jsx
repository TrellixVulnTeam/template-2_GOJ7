import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { AiOutlinePhone } from "react-icons/ai";
import { FaClock, FaMap, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
function OffsetMenu({ className, handleOffset }) {
  const { rpdata } = useContext(GlobalDataContext);

  return (
    <div className={className}>
      <span id="offset-menu-close-btn">
        <FaPlus onClick={handleOffset} />
      </span>
      <div className="offset-menu-wrapper text-white container-fluid">
        <div className="offset-menu-header">
          <div className="offset-menu-logo">
            <Link to="/">
              <img src={rpdata?.dbPrincipal?.logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="offset-menu-section">
          <h3>About Us</h3>
          <p>{rpdata?.dbAbout?.[0].text.substring(0, 143) + "..."}</p>
          <Link to="/contact" className="theme-btn mt-30">
            Contact Us
          </Link>
        </div>
        <div className="offset-menu-section">
          <h3>Contact Info</h3>
          <ul>
            <li>
              <span>
                <FaMap />
              </span>
              {rpdata?.dbPrincipal?.location?.[0].address}
            </li>
            <li>
              <span>
                <AiOutlinePhone />
              </span>
              {rpdata?.dbPrincipal?.phones?.[0].phone}
            </li>
            <li>
              <span>
                <FaClock />
              </span>
              {rpdata?.dbPrincipal?.workdays?.[0].day}
            </li>
            <li>
              <span>
                <FaClock />
              </span>
              {rpdata?.dbPrincipal?.workHours?.[0].hour}
            </li>
          </ul>
        </div>
        <div className="offset-menu-footer">
          <div className="offset-menu-social-icon">
            {rpdata?.dbSocialMedia?.redes.map((item, index) => {
              return (
                <a href={item.url} target="_blank" key={index}>
                  <i className={`fab fa-${item.icon}`} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffsetMenu;
