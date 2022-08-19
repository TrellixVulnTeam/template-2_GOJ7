import { useState,useContext } from "react"
import { GlobalDataContext } from "../../context/context";
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const ServicePageArea = ({service_image_num,ser_icon_img,ser_title,colorClass, ser_description,ser_itemservices, event_click}) => {
    const { rpdata } = useContext(GlobalDataContext);
    return (
      <>
         <div className="col-md-6 col-xl-4 col-12">
            <div className="single-service-card">
                <div>
                  <img src={service_image_num} className="img-fluid img-services" alt="img-not-found"/>
                </div>
                <div className="content">
                    <div className="case-cat">
                        <Link to="/services" onClick={event_click}><img src={rpdata.dbPrincipal.logo} className="img-fluid" style={{width:"110px"}}></img></Link>
                    </div>
                    <h3>
                        <span onClick={event_click} to="/services-details">{ser_title}</span>
                    </h3>
                    <p>{ser_description.substring(0,140) + "..."}</p>
                    <Link className="theme-btn theme-3 mt-10" to="/services" onClick={event_click}>
                        Read More <BsArrowRight />
                    </Link>
                </div>
            </div>
        </div>
      </>
   );
};

export default ServicePageArea;