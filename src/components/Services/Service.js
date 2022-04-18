import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {name, price, image, description} = props.service;
    return (
        <div className='col-md-4'>
            <div className="service-item">
                <div>
                    <img src={image} alt="" />
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <p><small>$ {price}</small></p>
                </div>
                <div className='button-content'>
                <Link to='/checkout'>
                    <button>Checkout</button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;