import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Data from '../../api/Data.json'

function WidgetAbout({ text, fbLink, twitterLink, instaLink, youtubeLink }) {
    return (
        <>
            <div className="col-md-6 col-xl-3 col-12">
                <div className="single-footer-wid">
                    <div className="wid-title">
                        <h4>About Us</h4>
                    </div>
                    <p>{Data.dbAbout.description[0].text}</p>
                    <div className="social_link">
                        {
                            Data.socialmedia.redes.map((item, index) => (
                                <a key={index} href={item.url}>
                                    {item.icon === 'faFacebook' ? <FaFacebookF /> : null}
                                    {item.icon === 'faTwitter' ? <FaTwitter /> : null}
                                    {item.icon === 'faInstagram' ? <FaInstagram /> : null}
                                    {item.icon === 'faYoutube' ? <FaYoutube /> : null}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default WidgetAbout;
