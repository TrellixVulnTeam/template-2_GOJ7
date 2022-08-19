import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';

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
                            <h3 className='modal-title text-capitalize'>{this.props.name}</h3>
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
                            <div className="tp-service-three-text-btn">
                     <Link to="/contact"  className="theme-btn theme-3">
                        <i className="flaticon-enter"></i>Freee Estimate </Link>
                        </div>
                  </div>
                    </div>
                </div>
            </div>
        )
    }
}