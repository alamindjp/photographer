import React from 'react';

const Blogs = () => {
    return (
        <div className='container w-75 mt-5 text-start'>
            <div className='border border-danger rounded p-3 mb-3'>
                <h4>Q 1. Difference between authorization and authentication.</h4>
                <p className='text-start'><span className='fs-5 fw-bolder'>Ans: </span> <br /> <span className='fw-bolder fst-italic'>Authorization</span> is the permissions. Authorization determines what resources a user can access.<br />
                    <span className='fw-bolder fst-italic'> Authentication</span> in the form of a key. The lock on the door only grants access to someone with the correct key in much the same way that a system only grants access to users who have the correct credentials.</p>
            </div>

            <div className='border border-danger rounded p-3 mb-3'>
                <h4>Q 2. Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p><span className='fs-5 fw-bolder'>Ans: </span> <br /> <span className='fw-bolder fst-italic'>Firebase</span> is used for many purposes that can help your app to develop it a quality app and its security is high lavel. <br />

                    <span className='fw-bolder fst-italic'>1.</span> Password-based authentication. <br />
                    <span className='fw-bolder fst-italic'>2.</span> Two-factor/multifactor authentication. <br />
                    <span className='fw-bolder fst-italic'>3.</span> Biometric authentication. <br />
                    <span className='fw-bolder fst-italic'>4.</span> Token-based authentication.
                </p>
            </div>

            <div className='border border-danger rounded p-3 mb-3'>
                <h4>Q 1. What other services does firebase provide other than authentication.</h4>
                <p className='text-start'><span className='fs-5 fw-bolder'>Ans: </span> <br />
                    <span className='fw-bolder fst-italic'>1. Parse-</span> Open Source Backend Platform. <br />
                    <span className='fw-bolder fst-italic'>2. Kinvey-</span>  Mobile Backend as a Service (mBaaS) for the Enterprise <br />
                    <span className='fw-bolder fst-italic'>3. Back4app-</span> Parse Hosting Platform. <br />
                    <span className='fw-bolder fst-italic'>4. Kuzzle-</span> Backend for web, hybrid, or native mobile apps and IoT projects.
                </p>
            </div>
        </div>
    );
};

export default Blogs;