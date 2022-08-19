import React, { useContext, useState } from "react";
import { GlobalDataContext } from "../../context/context";

import Data from "../../api/Data.json"

function Topbar() {
    const { rpdata } = useContext(GlobalDataContext);
    return (
        <div className="top-bar d-none d-md-block">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-12 text-center">
                        <a href="/" className="top-left">
                            <span>{rpdata?.dbPrincipal?.workdays?.[0].day}</span>
                        </a>
                        <a href="/" className="top-left">
                        <span>{rpdata?.dbPrincipal?.workHours?.[0].hour}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;
