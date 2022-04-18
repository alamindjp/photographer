import React, { useRef } from 'react';
import { Link,} from 'react-router-dom';
import SocialLogIn from './SocialLogIn/SocialLogIn';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handelSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
    }
    return (
        <div className='container w-25 border border-primary p-3 mt-5'>
            <h1 className='text-info text-center my-5 mt-2'>Please LogIn</h1>
            <form onSubmit={handelSubmit}>
                <input type="email" className="form-control my-3 p-3 fs-5 fst-italic" id="validationDefault02" ref={emailRef} placeholder='Enter Your Email' required />
                <input type="password" className="form-control my-3 p-3 fs-5 fst-italic" id="validationDefault03" ref={passwordRef} placeholder='Enter Your Password' required />
                <p>Create an account?<Link to="/signUp" className='text-primary text-decoration-none'> Please SignUp</Link></p>
                <button className="btn btn-primary fst-italic" type="submit">Submit form</button>
            </form>
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default Login;