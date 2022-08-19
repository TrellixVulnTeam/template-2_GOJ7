import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { Link } from "react-router-dom";

const Directories = (props) => {
  const { rpdata } = useContext(GlobalDataContext);

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center pt-50">
        </div>
        <h2 className="pd-top-100 text-center">Find Us</h2>
        <div className="row justify-content-center pd-top-20">
          {/* {rpdata?.dbSocialMedia?.directorios.map((item, index) => {
            return (
              <div
                className="col-lg-3 col-md-6 text-center content-directorios"
                key={index}
              >
                <a href={item.url}>
                  <img src={item.image}></img>
                </a>
              </div>
            );
          })} */}
          {rpdata?.dbSocialMedia?.redes.map((item, index) => {
            return (
              <div
                className="col-lg-3 col-md-6 text-center content-directorios"
                key={index}
              >
                <a href={item.url} target="_blank">
                  <img src={item.image}></img>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Directories;