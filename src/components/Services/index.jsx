import { useState,useContext } from "react"
import Modal from "../../components/Services/Modal";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { BsArrowRight } from 'react-icons/bs';

import ServicePageArea from "./ServicePageArea"

import Data from "../../api/Data.json";
import { GlobalDataContext } from "../../context/context";


const Index = (props) => {

  const {rpdata} = useContext(GlobalDataContext);

  console.log(rpdata);
  let publicUrl = process.env.PUBLIC_URL + "/";
  const [model, setModel] = useState(false);
  const [tempdata, setTempdata] = useState([]);
  const getData = (img, title, description, id) => {
    let temData = [img, title, description, id];
    setTempdata((itme) => [1, ...temData]);
    return setModel(true);
  };

  return (
    <>
      <section className="our-service-wrapper section-padding mtm-30">
            <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-title-wrapper text-center mb-55 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">
                  {Data.slogans.slogan1}
                  
                </h5>
                <h1>{rpdata.dbPrincipal.companyName}</h1>
                <h2 className="tp-section-title heading-color-black">
                  Our Services
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {props.itemServices
              ? Data.slice(0, props.itemServices).map((item, index) => {
                  return (
                    <div className="col-lg-4 col-md-6" key={index}>
                      <div className="single-product-wrap style-bottom-radius">
                        <div className="thumb">
                          <img src={item.image} alt={item.title} />
                        </div>
                        <div className="product-details-inner">
                          <h4 className="text-capitalize">{item.title}</h4>
                          <p className="pb-4 text-truncate">
                            {item.description[0].text}
                          </p>
                          <ul>
                            <li>{item.description[0].items.value}</li>
                          </ul>
                          <button
                            className="btn btn-base read-more"
                            onClick={() =>
                              getData(
                                item.description[0].image,
                                item.title,
                                item.description[0].text,
                                item.description.items.map((item) => item.value),
                                item.id
                              )
                            }
                          >
                            <i className="la la-arrow-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              : Data.dbServices.services.map((item, index) => {
                  return (
                    <ServicePageArea
                    key={index}
                    service_image_num={item.description[0].image}
                    ser_icon_img="home"
                    ser_title={item.title}
                    ser_description={item.description[0].text}
                    event_click={() =>
                      getData(
                        item.description[0].image,
                        item.title,
                        item.description.map((item) => {
                          return (
                            <div>
                              <p>{item.text}</p>
                              {
                                item.items ?
                                item.items.map ((item) => <li><BsArrowRight className="text-orange"/>{item.value}</li>)
                                : null
                              }
                              <br />
                            </div>
                          );
                        }),
                        item.value,
                        item.id
                      )
                    }
                  />
                  );
                })}
            {model === true ? (
              <Modal
                img={tempdata[1]}
                title={tempdata[2]}
                description={tempdata[3]}
                itemservies={tempdata[4]}
                hide={() => setModel(false)}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
