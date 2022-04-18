import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const {id, name, image, price, discription } = service;
    const navigate = useNavigate()
    const navigateServiceDetails = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className="col-12 col-md-6 col-lg-4 g-5">
            <div className="card h-100">
                <img src={image} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{discription}</p>
                </div>
                <p className="card-text"><span className='bg-info p-2 rounded'>Price: ${price}</span></p>
                <button onClick={() => navigateServiceDetails(id)} className='card-footer btn btn-outline-success'>Hire Me</button>
            </div>

        </div>
    );
};

export default Service;