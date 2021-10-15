import React from 'react';
import './Expert.css';
const Expert = ({expert}) => {
    const {name, img, expertize} = expert;
    return (
        <div className='col-lg-4 col-sm-6'>
            <div className='expert-info'>
            <img src={img} alt=''/>
            <h3><span>{name}</span></h3>
            <h5>{expertize}</h5>
            </div>
        </div>
    );
};

export default Expert;