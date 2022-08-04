import React from 'react';
import Data from "../../api/Data.json"

function WidgetGetinTouch({ heading, text, icon }) {
    return (
        <>
            {
                Data.dbPrincipal.map((item, index) => {
                    return (
                        <div className="single-contact-info" key={index}>
                            <div className="icon"><i className={icon}></i></div>
                            <div className="contact-info">
                                <span>{item.companyName}</span>
                                <p>{item.address}</p>
                            </div>
                        </div>
                        
                    )
                }
                )
            }
        </>
    );
}

export default WidgetGetinTouch;
