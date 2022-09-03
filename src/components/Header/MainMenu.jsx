import React, { useContext, useState } from "react";
import { GlobalDataContext } from "../../context/context";
import { FaTh } from "react-icons/fa";
import { Link } from "react-router-dom";

function MainMenu({ hanldeOffset }) {

    const { rpdata } = useContext(GlobalDataContext);

    


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
                  <ul className="sub-menu">
                    {rpdata?.dbServices?.slice(0, 10).map((item, index) => {
                      return (
                        <li key={index}>
                          <Link
                            to={`/services/${item.name
                              .replace(" ", "-")
                              .toLowerCase()}`}
                            className="text-white"
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
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
            <button
              type="button"
              onClick={hanldeOffset}
              className="side-menu-toggle"
            >
              <FaTh />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainMenu;
