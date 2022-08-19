import { useState,useContext } from "react"
import Modal from "../../components/Services/Modal";
import ServicePageArea from "./ServicePageArea"

import { GlobalDataContext } from "../../context/context";


const ServicesCard = (props) => {
  const { rpdata } = useContext(GlobalDataContext);

  const [model, setModel] = useState(false);
  const [tempdata, setTempdata] = useState([]);
  const getData = (img, name, description, id) => {
    let temData = [img, name, description, id];
    setTempdata((itme) => [1, ...temData]);
    return setModel(true);
  };

  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <div className="blog-page-area pd-top-120 go-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="product-search-inner bg-main">
              <div className="row custom-gutters-20 text-center">
                <div className="col-md-12 align-self-center">
                  <h2 className="text-white">Our Services</h2>
                </div>
              </div>
            </div>
            <div className="row">

            <div className="row">
            {props.itemServices
              ? rpdata.slice(0, props.itemServices).map((item, index) => {
                  return (
                    <div className="col-lg-4 col-md-6" key={index}>
                      <div className="single-product-wrap style-bottom-radius">
                        <div className="thumb">
                          <img src={item.description[0].img} alt={item.name} className="img-card-services" />
                        </div>
                        <div className="product-details-inner">
                          <h4 className="text-capitalize">{item.name}</h4>
                          <p className="pb-4 text-truncate">
                            {item.description[0].text}
                          </p>
                          <ul>
                          </ul>
                          <button
                            className="btn btn-base read-more"
                            onClick={() =>
                              getData(
                                item.description[0].img,
                                item.name,
                                item.description[0].text,
                                item.description.lists.map((item) => item),
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
              : rpdata?.dbServices?.map((item, index) => {
                  return (
                    <ServicePageArea
                    key={index}
                    service_image_num={item.description[0].img}
                    ser_icon_img="home"
                    ser_title={item.name}
                    ser_description={item.description[0].text}
                    event_click={() =>
                      getData(
                        item.description[0].img,
                        item.name,
                        item.description.map((item) => {
                          return (
                            <div>
                              <p>{item.text}</p>
                              {
                                item.lists ?
                                item.lists.map ((item) => <li>{item}</li>)
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
                name={tempdata[2]}
                description={tempdata[3]}
                itemservies={tempdata[4]}
                hide={() => setModel(false)}
              />
            ) : (
              ""
            )}
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;