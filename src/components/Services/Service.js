import React from 'react';
import './Service.css'

const Service = (props) => {
    const {name, price, image, description} = props.service;
    return (
        <div className='col-md-4'>
            <div className="service-item">
                <img src={image} alt="" />
                <h1>{name}</h1>
                <p>{description}</p>
                <span>$ {price}</span>
            </div>
        </div>
    );
};

export default Service;