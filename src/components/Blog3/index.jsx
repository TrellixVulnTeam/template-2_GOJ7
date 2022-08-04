import React from 'react';
import blogThreeData from './blogThreeData';
import BlogThreeItem from './BlogThreeItem';
import Data from "../../api/Data.json"
import NavLink from 'react-router-dom/NavLink';

function Blog3() {
    return (
        <section className="blog-wrapper section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-12 mb-20">
                        <div className="section-title-3">
                            <p>{Data.dbPrincipal.companyName}</p>
                            <h1>Our Services</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {Data.dbServices.services.slice(0,3).map((item,index) => (
                        <div className="col-xl-4 col-md-6 col-12">
                        <div className="single-news-card">
                            <div
                                className="featured-thumb bg-cover"
                                style={{ backgroundImage: `url(${item.description[0].image})` }}
                            />
                            <div className="post-content">
                                <h3 className='pt-15'>
                                    <NavLink to="/services" >
                                    {item.title}
                                    </NavLink>
                                </h3>
                                <p className='text-truncate pt-15 pb-10'>{item.description[0].text}</p>
                            </div>
                            <NavLink to="/services" className="post-cat">
                                More Services
                            </NavLink>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blog3;
