import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data =>{
            setServices(data);
            console.log(data);
        })
    },[])

    return (
        <div id='services' className='expart-container'>
        <h2>Our Services</h2>
            <div className='services-container my-3'>
            {
                services.map(service =><Service
                key={service.id}
                service={service}
                ></Service>)
                
            }
            
        </div>
        </div>
    );
};

export default Services;