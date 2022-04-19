import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../sharePage/Loading/Loading';

const ChackOut = () => {
    const nameRef = useRef();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [user, setUser] = useState([])
    

    const navigate = useNavigate('');

    const handelSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        setUser(email, password)
    }
    const navigateHome = () => {
        navigate('/home')
    }
    return (
        <div className='container w-50 border border-primary p-5'>
            <h1 className="text-info m-2">Customrt Details</h1>
            <form onSubmit={handelSubmit}>
                <div>
                    <input type="text" name='name' className="form-control my-3 fst-italic" id="validationDefault01" ref={nameRef} placeholder='Enter Your Name' required />
                </div>
                <div>
                    <input type="email" name='email' ref={emailRef} className="form-control my-3 fst-italic" id="validationDefault02" placeholder='Enter Your Email' required />
                    <input type="number" name="password" className="form-control my-3 fst-italic" id="validationDefault03" ref={passwordRef} placeholder='Enter Phone Number' required />
                </div>
                
                    <button onClick={navigateHome} className="btn btn-primary" type="submit">Book Now</button>
            </form>
        </div>
    );
};

export default ChackOut;