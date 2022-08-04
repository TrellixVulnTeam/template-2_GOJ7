import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo/logoColor.png';
import MobileMenu from '../MobileMenu';
import OffsetMenu from '../OffsetMenu';
import MainMenu from './MainMenu';
import Topbar from './Topbar';
import Data from "../../api/Data.json"

function Header1() {
    const [offset, setOffset] = useState(false);
    const handleOffset = () => {
        setOffset(!offset);
    };
    return (
        <>
            <OffsetMenu
                handleOffset={handleOffset}
                className={offset ? 'offset-menu show' : 'offset-menu'}
            />
            <header className="header-wrap header-1">
                <Topbar />
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-8 col-lg-3">
                            <div className="logo">
                                <Link to="/">
                                    <img src={Logo} alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-4 d-block d-lg-none">
                            <div className="mobile-nav-wrap">
                                <MobileMenu />
                            </div>
                        </div>
                        <div className="col-12 d-none d-md-block col-lg-9">
                            <div className="header-contact-info text-lg-right">
                                <div className="single-element">
                                  {
                                    Data.dbPrincipal.phones.slice(0,1).map((phone, index) => {
                                        return (
                                            <a key={index} href={`tel:${phone.phone}`}>
                                            <i className="fa fa-phone" />
                                            <span>{phone.phone}</span>
                                            </a>
                                        )
                                        }
                                    )
                                  }
                                    <span>Call Us Now</span>
                                </div>
                                <div className="single-element">
                                {
                                    Data.dbPrincipal.emails.slice(0,1).map((phone, index) => {
                                        return (
                                            <a key={index} href={`tel:${phone.email}`}>
                                            <i className="fa fa-phone" />
                                            <span>{phone.email}</span>
                                            </a>
                                        )
                                        }
                                    )
                                  }
                                    <span>Mail</span>
                                </div>
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
