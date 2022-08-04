import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import {
    FaClock,
    FaDribbble,
    FaFacebookF,
    FaLinkedinIn,
    FaMap,
    FaPlus,
    FaTwitter,
    FaYoutube
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/logoColor.png';
import Data from "../../api/Data.json"

function OffsetMenu({ className, handleOffset }) {
    return (
        <div className={className}>
            <span id="offset-menu-close-btn">
                <FaPlus onClick={handleOffset} />
            </span>
            <div className="offset-menu-wrapper text-white">
                <div className="offset-menu-header">
                    <div className="offset-menu-logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                </div>
                <div className="offset-menu-section">
                    <h3>About Us</h3>
                    <p>
                        {Data.dbAbout.description[0].text}
                    </p>
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
                            {Data.dbPrincipal.address[0].locations}
                        </li>
                        <li>
                            <span>
                                <AiOutlinePhone />
                            </span>
                            {Data.dbPrincipal.phones[0].phone}
                        </li>
                        <li>
                            <span>
                                <AiOutlineMail />
                            </span>
                            {Data.dbPrincipal.emails[0].email}
                        </li>
                        <li>
                            <span>
                                <FaClock />
                            </span>
                            {Data.dbPrincipal.workdays}
                        </li>
                        <li>
                            <span>
                                <FaClock />
                            </span>
                            {Data.dbPrincipal.workHours}
                        </li>
                    </ul>
                </div>
                <div className="offset-menu-footer">
                    <div className="offset-menu-social-icon">
                        <a href="/">
                            <FaFacebookF />
                        </a>
                        <a href="/">
                            <FaTwitter />
                        </a>
                        <a href="/">
                            <FaLinkedinIn />
                        </a>
                        <a href="/">
                            <FaDribbble />
                        </a>
                        <a href="/">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OffsetMenu;
