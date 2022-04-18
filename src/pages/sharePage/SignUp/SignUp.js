import React from 'react';

const SignUp = () => {
    return (
        <div className='container w-25 border border-primary p-3'>
            <h1 className="text-info m-2">Please SignUp</h1>
            <form>
                <div>
                    <input type="text" className="form-control my-3 p-3 fs-5 fst-italic" id="validationDefault01" placeholder='Enter Your Name' required />
                </div>
                <div>
                    <input type="email" className="form-control my-3 p-3 fs-5 fst-italic" id="validationDefault02" placeholder='Enter Your Email' required />
                    <input type="password" className="form-control my-3 p-3 fs-5 fst-italic" id="validationDefault03" placeholder='Create a Password' required />
                </div>
                <div>
                    <div className="form-check my-3 text-start">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                        <label className="form-check-label">Agree to terms and conditions</label>
                    </div>
                </div>
                <div>
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;