import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const ServicePageArea = ({service_image_num,ser_icon_img,ser_title,colorClass, ser_description,ser_itemservices, event_click}) => {
   return (
      <>
         <div className="col-md-6 col-xl-4 col-12">
            <div className="single-service-card">
                <div>
                  <img src={`${service_image_num}`} className="img-fluid" alt="img-not-found"/>
                </div>
                <div className="content">
                    <div className="case-cat">
                        <Link to="/services" onClick={event_click}><BsArrowRight /></Link>
                    </div>
                    <h3>
                        <span onClick={event_click} to="/services-details">{ser_title}</span>
                    </h3>
                    <p>{ser_description}</p>
                    <button className="read-btn" onClick={event_click}>
                        Read More <BsArrowRight />
                    </button>
                </div>
            </div>
        </div>
      </>
   );
};

export default ServicePageArea;