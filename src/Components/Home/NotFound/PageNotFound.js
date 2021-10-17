import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css'
const PageNotFound = () => {
    return (
        <div className='page-not-found'>
            <img className='img-fluid' src="https://i.ibb.co/Jk89Bk0/404.jpg" alt="" />
            <Link className='btn btn-lg btn-outline-dark' to='/'>Go Back</Link>
        </div>
    );
};

export default PageNotFound;