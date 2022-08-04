import React from 'react';
import { Link } from 'react-router-dom';

function BlogThreeItem({ thumb, title, description }) {
    return (
        <div className="col-xl-4 col-md-6 col-12">
            <div className="single-news-card">
                <div
                    className="featured-thumb bg-cover"
                    style={{ backgroundImage: `url(${thumb})` }}
                />
                <div className="post-content">
                    <h3 className='pt-15'>
                        <Link to="/services" >
                           {title}
                        </Link>
                    </h3>
                    <p className='text-truncate pt-15 pb-10'>{description}</p>
                </div>
                <Link to="/services" className="post-cat">
                    More Services
                </Link>
            </div>
        </div>
    );
}

export default BlogThreeItem;
