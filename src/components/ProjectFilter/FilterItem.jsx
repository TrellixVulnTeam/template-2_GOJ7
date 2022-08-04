import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function FilterItem({ image, name, price, heading }) {
    return (
        <div className="col-xl-3 col-md-6 grid-item bedroom">
            <div className="single-cause-item">
                <div className="cause-bg bg-cover" style={{ backgroundImage: `url(${image})` }}>
                    <Link to="/project-details" className="icon">
                        <BsArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FilterItem;
