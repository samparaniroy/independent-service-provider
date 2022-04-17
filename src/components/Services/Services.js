import React, { useEffect, useState } from 'react';
import Service from './Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('services.json')
        .then(res=> res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="services-area">
                <div className="container">
                    <div className="row">
                        <div className="services-title">
                            <h1>Services</h1>
                        </div>
                        {
                            services.map(service => <Service key={service.name} service={service}></Service>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;