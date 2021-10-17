import React from 'react';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Service = ({service}) => {
    // const {service} = props
    // const {name, img, price, description}=props.service;
    const {id, name, img, price, description}= service;
    return (
        <div className='service-container expert-info'>
            <img src={img} alt="" />
            <h3>Service: <span>{name}</span></h3>
            <h4><small><FontAwesomeIcon icon={faDollarSign} /></small> <span>{price}</span></h4>
            <p>{description}</p>
           <Link to={`/booking/${id}`}>
           <button type="button" className="btn btn-lg btn-outline-dark"><span>Book</span> {name.toLowerCase()}</button>
           </Link>
        </div>
    );
};

export default Service;