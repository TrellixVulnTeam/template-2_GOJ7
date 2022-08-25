import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import Data from "../../api/Data.json";

function Map() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center">
          We Cover {rpdata?.dbPrincipal?.miles} Miles Around {rpdata?.dbPrincipal?.location?.[0].address}
        </h2>
        <iframe src={rpdata?.dbPrincipal?.location?.[0].url} style={{ width: "100%", height: "400px" }} />
      </div>
    </div>
  );
}

export default Map;
