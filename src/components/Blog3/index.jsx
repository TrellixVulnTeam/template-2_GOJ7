import React from "react";
import { GlobalDataContext } from "../../context/context";
import NavLink from 'react-router-dom/NavLink';

function Blog3() {
    const { rpdata } = React.useContext(GlobalDataContext);
    return (
        <section className="blog-wrapper section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-12 mb-20">
                        <div className="section-title-3">
                            <p>{rpdata.dbPrincipal?.name}</p>
                            <h1>Our Services</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {rpdata.dbServices?.slice(0,6).map((item,index) => (
                        <div className="col-xl-4 col-md-6 col-12">
                        <div className="single-news-card">
                            <div
                                className="featured-thumb bg-cover"
                                style={{ backgroundImage: `url("${item.description?.[0].img})"` }}
                            />
                            <div className="post-content">
                                <h3 className='pt-15'>
                                    <NavLink to="/services" >
                                    {item.name}
                                    </NavLink>
                                </h3>
                                <p className='pt-15 pb-10'>{item.description[0].text.substring(0,100) + "..."}</p>
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
