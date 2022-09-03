import React, { useState, useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import Navbar from "../Header/index";
import { useParams } from "react-router-dom";
import Footer from "../Footer/index.jsx";
import ServiceBlock from "./ServicesBlock";
import PageBanner from '../PageBanner/index';
import MapComponente from '../ContactUs/Map';
import Process2 from '../Process/index';

export const ServicesDetail = () => {
  const { rpdata } = useContext(GlobalDataContext);
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <Navbar />
      {rpdata?.dbServices?.map((item) => {
        if (item.name.replace(" ", "-").toLowerCase() === id) {
          return (
            <div>
              <PageBanner bannerBg={`${rpdata?.stock?.[0]}`} currentPage="Services" heading={item.name} />
              <ServiceBlock
                servicesName={item.name}
                imgServices={item.description[0].img}
                description={item.description.map((i, index) => {
                  return <p>{i.text}</p>;
                })}
                itemServives={item.description.map((it, index) => {
                  return it.lists[0] !== " "
                    ? it.lists.map((list, index) => {
                        return (
                          <li
                            className="single-list-inner style-check-box  list-unstyle"
                            key={index}
                          >
                            <i className="fa fa-check text-white" /> {list}
                          </li>
                        );
                      })
                    : null;
                })}
              />
            </div>
          );
        }
      })}
      <Process2/>
      <MapComponente/>
      <Footer />
    </div>
  );
};