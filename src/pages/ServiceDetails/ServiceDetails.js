import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2 className='text-info'>Service Details {serviceId}</h2>

            <div className='text-center'>
                <Link to='/chackout'>
                    <button className='btn btn-outline-success'>proceed Chackout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;
