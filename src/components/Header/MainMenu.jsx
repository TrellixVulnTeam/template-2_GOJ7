import React from 'react';
import { FaTh } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function MainMenu({ hanldeOffset }) {
    return (
        <>
            <div className="main-menu-area">
                <div className="row align-center">
                    <div className="col-6 col-md-8 col-lg-10">
                        <div className="main-menu">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/services">Services</Link>
                                </li>
                                <li>
                                    <Link to="/projects">Gallery</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 col-md-8 col-lg-2 icon-wrapper">
                        <button type="button" onClick={hanldeOffset} className="side-menu-toggle">
                            <FaTh />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainMenu;
