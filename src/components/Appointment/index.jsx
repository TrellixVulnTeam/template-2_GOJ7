import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function Map() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center">
          We Cover {rpdata?.dbPrincipal?.miles} Miles Around{" "}
          {rpdata?.dbPrincipal?.location?.[0].address}
        </h2>
        <Tabs>
          <TabList>
            {rpdata?.dbPrincipal?.location?.slice(1,6).map((item, index) => {
              return <Tab>{item.address}</Tab>;
            })}
          </TabList>
          {rpdata?.dbPrincipal?.location?.slice(1,6).map((item, index) => {
              return <TabPanel><iframe
              src={item.url}
              style={{ width: "100%", height: "400px" }}
            /></TabPanel>
            })}
        </Tabs>
      </div>
    </div>
  );
}

export default Map;
