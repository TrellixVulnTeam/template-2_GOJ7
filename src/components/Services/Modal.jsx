import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import { BsVimeo } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import Data from "../../api/Data.json"

const redes = [
    {
        name: 'facebook',
        url: 'https://www.facebook.com/interscopemedia',
        icon:"facebook-f",
    },
    {
        name: 'instagram',
        url: 'https://www.instagram.com/interscope_media/',
        icon: "instagram",
    },
    {
        name: 'vimeo',
        url: 'https://vimeo.com/interscopemedia',
        icon: "vimeo",
    },
    {
        name: 'youtube',
        url: 'https://www.youtube.com/channel/UCuNArciTje4FOhfBijZTboQ',
        icon: <FaYoutube />,
    }
];
export default class ModalServices extends Component {
    render() {
        let modelStyle = {
            display: 'block',
            background: 'rgba(0,0,0,0.8)',
        }
        return (
            <div className='modal show fade' style={modelStyle}>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h3 className='modal-title text-capitalize'>{this.props.title}</h3>
                            <button type='button' className="close" onClick={this.props.hide} data-bs-dismiss="modal" aria-label="Close">
                                <GrClose />
                            </button>
                        </div>
                        <div className='modal-body'>
                            <div className='text-center'>
                                <img src={this.props.img} alt='model' />
                            </div>
                            <p className='pt-3 text-black'>{this.props.description}</p>
                        </div>
                        <div className="modal-footer flex justify-content-between">
                        <div className="tp-footer-info-social">
                            {
                                    Data.socialmedia.redes.map((item, index) => {
                                       return(
                                          <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                                             <i className={`fab fa-${item.icon}`}></i>
                                          </a>
                                       )
                                    }
                                    )
                                 }
                            </div>
                            <div className="tp-service-three-text-btn">
                     <Link to="/contact" className="yellow-btn service__btn">
                        <i className="flaticon-enter"></i>Freee Estimate </Link>
                        </div>
                  </div>
                    </div>
                </div>
            </div>
        )
    }
}