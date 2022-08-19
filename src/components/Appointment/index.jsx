import React from "react";
import { GlobalDataContext } from "../../context/context";
import Data from "../../api/Data.json";

function Apointment() {
  const { rpdata } = React.useContext(GlobalDataContext);
    return (
        <section className="contact-page-wrap section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="contact-map-wrap">
              <div id="map">
                  <h2 className="text-center pt-1 pb-3">We Cover {rpdata?.dbPrincipal?.miles} Miles Around {rpdata?.dbPrincipal?.location?.[0].address}</h2>
              <iframe
                  title="map"
                  src={rpdata?.dbPrincipal?.location?.[0].url}
                  frameBorder="0"
                  style={{
                      border: '0',
                      width: '100%',
                  }}
                  allowFullScreen=""
                  aria-hidden="false"
              />
          </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Apointment;
