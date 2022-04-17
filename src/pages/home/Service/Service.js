import React from 'react';

const Service = ({ service }) => {
    const { name, image, price, discription } = service
    return (
        <div className="col-12 col-md-6 col-lg-4 g-5">
            <div className="card-group">
                <div className="card">
                    <img src={image} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{discription}</p>
                        <p className="card-text"><small className="text-muted">{price}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;