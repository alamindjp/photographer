import React from 'react';
import img1 from './imgages/1641.png'
import img2 from './imgages/4367736.png'
import img3 from './imgages/4404582.png'

const Spacialities = () => {
    return (
        <div>
            <div style={{ height: '1px' }} className='bg-secondary mt-5'></div>
            <div className="container">
            <h1 className='text-secondary mt-4'>My Spacialities</h1>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 g-5">
                        <div className="card h-100">
                            <img src={img1} className="card-img-top img-fluid p-2" alt="..." />
                            <div className="card-body">
                            </div>
                            <button className='card-footer btn btn-outline-success'>See More</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 g-5">
                        <div className="card h-100">
                            <img src={img2} className="card-img-top img-fluid p-2" alt="..." />
                            <div className="card-body">
                            </div>
                            <button className='card-footer btn btn-outline-success'>See More</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 g-5">
                        <div className="card h-100">
                            <img src={img3} className="card-img-top img-fluid p-2" alt="..." />
                            <div className="card-body">
                            </div>
                            <button className='card-footer btn btn-outline-success'>See More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spacialities;