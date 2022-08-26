import React, { useContext, useState } from "react";
import { GlobalDataContext } from "../../context/context";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo/logowh.png";
import MobileMenu from "../MobileMenu";
import OffsetMenu from "../OffsetMenu";
import MainMenu from "./MainMenu";
import Topbar from "./Topbar";
import Data from "../../api/Data.json";

function Header1() {
  const [offset, setOffset] = useState(false);
  const handleOffset = () => {
    setOffset(!offset);
  };

  const { rpdata } = useContext(GlobalDataContext);

  return (
    <>
      <OffsetMenu
        handleOffset={handleOffset}
        className={offset ? "offset-menu show" : "offset-menu"}
      />
      <header className="header-wrap header-1">
        <Topbar />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-10 col-lg-3">
              <div className="row">
                <div className="content-logo">
                  <div className="logo-header">
                    <Link to="/">
                      <img src={rpdata?.dbPrincipal?.logo} alt="logo" />
                    </Link>
                  </div>
                </div>
                <div className="content-info">
                  <div className="content-info-page">
                    <div className="single-element">
                      <h6
                        className="text-black text-style-2"
                        style={{ fontSize: "20px" }}
                      >
                        {rpdata?.dbPrincipal?.name}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2 d-block d-lg-none">
              <div className="mobile-nav-wrap">
                <MobileMenu />
              </div>
            </div>
            <div className="col-12 justify-content-center content-info-email-phone">
              <a href={`tel:${rpdata.dbPrincipal?.phones[0].phone}`}>
                <i className="fa fa-phone text-email" />
                <span className="text-email">
                  {rpdata.dbPrincipal?.phones?.[0].phone}
                </span>
              </a>
              <a href={`mailto:${rpdata.dbPrincipal?.emails[0].email}`}>
                <i className="fa fa-envelope text-email" />
                <span className="text-email">
                  {rpdata.dbPrincipal?.emails[0].email}
                </span>
              </a>
            </div>
            <div className="col-12 d-none d-md-block col-lg-9">
              <div className="header-contact-info text-lg-right">
                {rpdata.dbPrincipal?.phones.map((phone, index) => {
                  return (
                    <div className="single-element">
                      <a key={index} href={`tel:${phone.phone}`}>
                        <i className="fa fa-phone" />
                        <span>{phone.phone}</span>
                      </a>
                      <span>Phone</span>
                    </div>
                  );
                })}
                <div className="header-btn d-inline">
                  <Link to="/contact" className="theme-btn">
                    Free Estimate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="menu-wrapper d-none d-lg-block">
          <div className="container">
            <MainMenu hanldeOffset={handleOffset} />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header1;
