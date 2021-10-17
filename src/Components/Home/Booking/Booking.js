import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    const {bookingId} = useParams()
    return (
        <div>
            <h3>This is Booking: {bookingId}</h3>
            <Link className='btn btn-lg btn-outline-dark' to='/'>go Back</Link>
        </div>
    );
};

export default Booking;