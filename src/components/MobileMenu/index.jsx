/* eslint-disable react/no-array-index-key */
import React, { useState, useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import * as AiIcons from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MenuContent from "./MenuContent";
import menuData from "./menuData";
import SubMenu from "./SubMenu";

const NavIcon = styled(Link)`
  font-size: 2rem;
  height: 50px;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const SidebarNav = styled.nav`
  background-color: black;
  width: 300px;
  height: 100%;
  position: fixed;
  overflow-y: scroll;
  scroll-behavior: smooth;
  -webkit-scroll-behavior: smooth;
  box-shadow: 0 13px 35px -12px rgba(35, 35, 35, 0.15);
  top: 0;
  right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 99999;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const MobileMenu = () => {
  const { rpdata } = useContext(GlobalDataContext);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const subitems = rpdata?.dbServices?.map((item, index) => {
    return {
      title: item.name,
      path: `/services/${item.name.replace(" ", "-").toLowerCase()}`,
    };
  });

  const menu = [
    {
      title: "Home",
      path: "/",
    },

    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
      subNav: [],
    },

    {
      title: "Gallery",
      path: "/projects",
    },

    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      <>
        <NavIcon
          className="d-lg-none"
          to="#"
          style={{ justifyContent: "flex-end" }}
        >
          <AiOutlineBars onClick={showSidebar} />
        </NavIcon>

        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose
                style={{
                  color: "white",
                  fontSize: "18px",
                  justifyContent: "flex-start",
                }}
                onClick={showSidebar}
              />
            </NavIcon>
            <ul className="content-menu-movil">
              <li className="item-menu-movil">
                <Link to="/">Home</Link>
              </li>
              <li className="item-menu-movil">
                <Link to="/about">About</Link>
              </li>
              <li className="item-menu-movil">
                <Link to="/services">Services</Link>
                <ul className="sub-menu">
                  {rpdata?.dbServices?.slice(0, 10).map((item, index) => {
                    return (
                      <li key={index} className="sub-item-menu">
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
              <li className="item-menu-movil">
                <Link to="/projects">Gallery</Link>
              </li>
              <li className="item-menu-movil">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <MenuContent />
          </SidebarWrap>
        </SidebarNav>
      </>
    </>
  );
};

export default MobileMenu;