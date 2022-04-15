import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams()
    return (
        <div>
            <h2>welcome to details: {serviceId}</h2>
            <div className='text-center'>
            <Link to='/checkout'>
            <button className='btn btn-primary'>Proceed checkout</button>
            </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;