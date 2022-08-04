import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../../api/Data.json';

function WidgetNews() {
    return (
      <>
        {Data.dbServices.services.map((item, index) => (
          <div className="single-recent-post" key={index}>
            <div className="post-data">
              <h5>
                <Link to="/services">{item.title}</Link>{" "}
              </h5>
            </div>
          </div>
        ))}
      </>
    );
}

export default WidgetNews;
