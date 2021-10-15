import React from 'react';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
const Service = ({service}) => {
    // const {service} = props
    // const {name, img, price, description}=props.service;
    const {name, img, price, description}= service;
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h3>Service: <span>{name}</span></h3>
            <h4><small><FontAwesomeIcon icon={faDollarSign} /></small> <span>{price}</span></h4>
            <p>{description}</p>
            <button type="button" className="btn btn-lg btn-outline-dark">Details</button>
        </div>
    );
};

export default Service;