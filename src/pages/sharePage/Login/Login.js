import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate, } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogIn from './SocialLogIn/SocialLogIn';

const Login = () => {
    const navigate = useNavigate('')
    const emailRef = useRef('');
    const passwordRef = useRef('');
const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate(from, { replace: true });
    }
    const handelLogIn = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    const navigateSignUp = () => {
        navigate('/signUp')
    }

    return (
        <div className='container w-50 border border-primary p-5 mt-5'>
            <h1 className='text-info text-center my-5 mt-2'>Please LogIn</h1>
            <form onSubmit={handelLogIn}>
                <input type="email" name="email" className="form-control my-3 p-3 fs-5 fst-italic" id="validationDefault02" ref={emailRef} placeholder='Enter Your Email' required />
                <input type="password" name="password" className="form-control my-3 p-3 fs-5 fst-italic" id="validationDefault03" ref={passwordRef} placeholder='Enter Your Password' required />
                <p>Create an account?<Link to="/signUp" className='text-primary text-decoration-none' onClick={navigateSignUp}> Please SignUp</Link></p>
                <button className="btn btn-primary fst-italic" type="submit">Log In</button>
            </form>
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default Login;