import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChackOut = () => {
    const nameRef = useRef();
    const emailRef = useRef('');
    const numberRef = useRef('');
    const [user, setUser] = useState([])


    const navigate = useNavigate('');

    const handelSubmit = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = numberRef.current.value;
        setUser(name,email, password)
        navigate('/home')
    }

    return (
        <div className='container w-50 border border-primary p-5'>
            <h1 className="text-info m-2">Customer Details</h1>
            <form onSubmit={handelSubmit}>
                <div>
                    <input type="text" name='name' className="form-control my-3 fst-italic" id="validationDefault01" ref={nameRef} placeholder='Enter Your Name' required />
                </div>
                <div>
                    <input type="email" name='email' ref={emailRef} className="form-control my-3 fst-italic" id="validationDefault02" placeholder='Enter Your Email' required />
                    <input type="number" name="phoneNumber" className="form-control my-3 fst-italic" id="validationDefault03" ref={numberRef} placeholder='Enter Phone Number' required />
                </div>

                <button className="btn btn-primary" type="submit">Book Now</button>
            </form>
        </div>
    );
};

export default ChackOut;