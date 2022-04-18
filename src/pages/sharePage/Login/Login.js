import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth );

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
    const forgetPassword =async()=>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
          if(email){
            toast('Sent an Email For Reset Password');
          }
    }

    return (
        <div className='container w-50 border border-primary p-5 mt-5'>
            <h1 className='text-info text-center my-5 mt-2'>Please LogIn</h1>
            <form onSubmit={handelLogIn}>
                <input type="email" name="email" className="form-control my-3 p-3 fs-5 fst-italic" id="validationDefault02" ref={emailRef} placeholder='Enter Your Email' required />
                <input type="password" name="password" className="form-control my-3 p-3 fs-5 fst-italic" id="validationDefault03" ref={passwordRef} placeholder='Enter Your Password' required />
                <p>Create an account?<Link to="/signUp" className='text-primary text-decoration-none' onClick={navigateSignUp}> Please SignUp</Link></p>
                <p><button className='text-primary text-decoration-none' onClick={forgetPassword}>Forget Password</button></p>
                
                <button className="btn btn-primary fst-italic w-25" type="submit">Log In</button>
            </form>
            <SocialLogIn></SocialLogIn>
            <ToastContainer />
        </div>
    );
};

export default Login;